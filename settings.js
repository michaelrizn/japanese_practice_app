class SettingsManager {
  constructor() {
    this.pwaUpdater = null;
    this.updateButton = null;
    this.statusDiv = null;
  }

  init() {
    this.pwaUpdater = new PWAUpdater();
    this.pwaUpdater.init();
    
    this.updateButton = document.getElementById('check-updates-btn');
    this.statusDiv = document.getElementById('update-status');
    
    if (this.updateButton) {
      this.updateButton.addEventListener('click', () => {
        this.checkAndInstallUpdates();
      });
    }
  }

  async checkAndInstallUpdates() {
    if (!this.updateButton || !this.statusDiv) return;
    
    this.updateButton.disabled = true;
    this.updateButton.textContent = 'Проверяем обновления...';
    this.showStatus('Проверка обновлений...', 'info');
    
    try {
      if (!('serviceWorker' in navigator)) {
        throw new Error('Service Worker не поддерживается');
      }
      
      const registration = await navigator.serviceWorker.getRegistration();
      if (!registration) {
        throw new Error('Service Worker не зарегистрирован');
      }
      
      const hasUpdate = await this.checkForUpdatesWithFallback(registration);
      
      if (hasUpdate) {
        this.showStatus('Обновление найдено! Устанавливаем...', 'info');
        await this.installUpdate();
        this.showStatus('Обновление установлено! Перезапускаем приложение...', 'success');
        
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        const forceUpdate = await this.checkForceUpdate();
        if (forceUpdate) {
          this.showStatus('Найдены изменения в кэше! Принудительное обновление...', 'info');
          await this.clearCacheAndReload();
        } else {
          this.showStatus('Обновлений не найдено. У вас последняя версия.', 'success');
          this.resetButton();
        }
      }
    } catch (error) {
      console.error('Ошибка при проверке обновлений:', error);
      this.showStatus(`Ошибка: ${error.message}`, 'error');
      this.resetButton();
    }
  }

  async checkForUpdatesWithFallback(registration) {
    await registration.update();
    
    const hasUpdate = await this.waitForUpdate(registration, 15000);
    
    if (!hasUpdate) {
      const forceUpdate = await this.checkForceUpdate();
      if (forceUpdate) {
        this.showStatus('Принудительное обновление кэша...', 'info');
        await this.clearCacheAndReload();
        return false;
      }
    }
    
    return hasUpdate;
  }

  async checkForceUpdate() {
    try {
      const timestamp = Date.now();
      const response = await fetch(`./sw.js?v=${timestamp}`, {
        cache: 'no-cache',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      const swContent = await response.text();
      const versionMatch = swContent.match(/CACHE_NAME = '([^']+)'/);
      
      if (versionMatch) {
        const currentVersion = versionMatch[1];
        const storedVersion = localStorage.getItem('pwa-cache-version');
        
        if (storedVersion && storedVersion !== currentVersion) {
          localStorage.setItem('pwa-cache-version', currentVersion);
          return true;
        } else if (!storedVersion) {
          localStorage.setItem('pwa-cache-version', currentVersion);
        }
      }
      
      return await this.checkManifestUpdate(timestamp);
    } catch (error) {
      console.log('Force update check failed:', error);
      return false;
    }
  }

  async checkManifestUpdate(timestamp) {
    try {
      const response = await fetch(`./manifest.json?v=${timestamp}`, {
        cache: 'no-cache',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });
      
      if (!response.ok) {
        return false;
      }
      
      const lastModified = response.headers.get('Last-Modified');
      const etag = response.headers.get('ETag');
      
      const storedLastModified = localStorage.getItem('pwa-manifest-modified');
      const storedEtag = localStorage.getItem('pwa-manifest-etag');
      
      if (lastModified && storedLastModified && lastModified !== storedLastModified) {
        localStorage.setItem('pwa-manifest-modified', lastModified);
        return true;
      }
      
      if (etag && storedEtag && etag !== storedEtag) {
        localStorage.setItem('pwa-manifest-etag', etag);
        return true;
      }
      
      if (!storedLastModified && lastModified) {
        localStorage.setItem('pwa-manifest-modified', lastModified);
      }
      
      if (!storedEtag && etag) {
        localStorage.setItem('pwa-manifest-etag', etag);
      }
      
    } catch (error) {
      console.log('Manifest update check failed:', error);
    }
    
    return false;
  }

  async clearCacheAndReload() {
    try {
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map(name => caches.delete(name)));
      
      if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(registrations.map(reg => reg.unregister()));
      }
      
      setTimeout(() => {
        window.location.reload(true);
      }, 1000);
    } catch (error) {
      console.log('Cache clear failed:', error);
      window.location.reload(true);
    }
  }

  waitForUpdate(registration, timeout = 15000) {
    return new Promise((resolve) => {
      const startTime = Date.now();
      
      const checkForUpdate = () => {
        if (registration.waiting) {
          resolve(true);
          return;
        }
        
        if (registration.installing) {
          registration.installing.addEventListener('statechange', () => {
            if (registration.waiting) {
              resolve(true);
            }
          });
          return;
        }
        
        if (Date.now() - startTime > timeout) {
          resolve(false);
          return;
        }
        
        setTimeout(checkForUpdate, 500);
      };
      
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              resolve(true);
            }
          });
        }
      });
      
      checkForUpdate();
    });
  }

  async installUpdate() {
    return new Promise((resolve) => {
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          resolve();
        }, { once: true });
        
        navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
      } else {
        resolve();
      }
    });
  }

  showStatus(message, type) {
    if (!this.statusDiv) return;
    
    this.statusDiv.textContent = message;
    this.statusDiv.className = `update-status ${type}`;
    this.statusDiv.style.display = 'block';
  }

  resetButton() {
    if (!this.updateButton) return;
    
    setTimeout(() => {
      this.updateButton.disabled = false;
      this.updateButton.textContent = 'Проверить обновления и установить';
    }, 3000);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const settingsManager = new SettingsManager();
  settingsManager.init();
  
  let currentScaleFactor = parseFloat(localStorage.getItem('scaleFactor'));
  if (!currentScaleFactor || isNaN(currentScaleFactor)) {
    currentScaleFactor = 2;
  }
  document.documentElement.style.setProperty('--scale-factor', currentScaleFactor);
  
  const decreaseBtn = document.getElementById('font-decrease');
  const increaseBtn = document.getElementById('font-increase');
  if (decreaseBtn) {
    decreaseBtn.addEventListener('click', () => {
      changeScaleFactor(-0.2);
    });
  }
  if (increaseBtn) {
    increaseBtn.addEventListener('click', () => {
      changeScaleFactor(+0.2);
    });
  }
  
  document.body.style.transition = 'all 0.3s ease';
});

function changeScaleFactor(delta) {
  let currentScale = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue('--scale-factor')
  ) || 2;
  let newScale = currentScale + delta;
  
  if (newScale < 0.5) newScale = 0.5;
  if (newScale > 4) newScale = 4;

  document.documentElement.style.setProperty('--scale-factor', newScale);
  localStorage.setItem('scaleFactor', newScale.toString());
}