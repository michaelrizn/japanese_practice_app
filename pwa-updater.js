class PWAUpdater {
  constructor() {
    this.refreshing = false;
    this.updateCheckInterval = 30000;
    this.autoUpdateDelay = 10000;
    this.isGitHubPages = window.location.hostname.includes('github.io');
  }

  init() {
    if (!('serviceWorker' in navigator)) {
      console.log('Service Worker not supported');
      return;
    }

    this.showPostUpdateToastIfNeeded();
    this.registerServiceWorker();
    this.setupEventListeners();
    this.setupAppLifecycleHandlers();
  }

  async registerServiceWorker() {
    try {
      const registration = await navigator.serviceWorker.register('./sw.js');
      console.log('SW registered:', registration);
      
      this.setupUpdateDetection(registration);
      this.startPeriodicUpdateCheck(registration);
      
      setTimeout(() => {
        this.checkForUpdates();
      }, 1000);
    } catch (error) {
      console.log('SW registration failed:', error);
    }
  }

  setupUpdateDetection(registration) {
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;
      if (newWorker) {
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            this.showUpdateNotification();
          }
        });
      }
    });
  }

  startPeriodicUpdateCheck(registration) {
    setInterval(() => {
      registration.update();
    }, this.updateCheckInterval);
  }

  setupEventListeners() {
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (this.refreshing) return;
      this.refreshing = true;
      try { sessionStorage.setItem('pwaUpdated', '1'); } catch (e) {}
      window.location.reload();
    });

    window.addEventListener('focus', () => {
      this.checkForUpdates();
    });

    window.addEventListener('online', () => {
      this.checkForUpdates();
    });

    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        this.checkForUpdates();
      }
    });
  }

  setupAppLifecycleHandlers() {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      window.addEventListener('beforeunload', () => {
        try {
          const now = Date.now();
          localStorage.setItem('pwaLastActive', now.toString());
        } catch (e) {}
      });

      window.addEventListener('load', () => {
        this.checkAppResumeFromCache();
      });

      if ('onpagehide' in window) {
        window.addEventListener('pagehide', () => {
          try {
            const now = Date.now();
            localStorage.setItem('pwaLastActive', now.toString());
          } catch (e) {}
        });
      }

      if ('onpageshow' in window) {
        window.addEventListener('pageshow', (event) => {
          if (event.persisted) {
            this.checkAppResumeFromCache();
          }
        });
      }
    }
  }

  checkAppResumeFromCache() {
    try {
      const lastActive = localStorage.getItem('pwaLastActive');
      if (lastActive) {
        const timeDiff = Date.now() - parseInt(lastActive);
        if (timeDiff > 300000) {
          this.checkForUpdates();
        }
      }
    } catch (e) {}
  }

  async checkForUpdates() {
    if (navigator.serviceWorker.controller) {
      try {
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration) {
          if (this.isGitHubPages) {
            await this.forceServiceWorkerUpdate(registration);
          } else {
            registration.update();
          }
        }
      } catch (error) {
        console.log('Update check failed:', error);
      }
    }
  }

  showUpdateNotification() {
    const notification = this.createNotificationElement();
    document.body.appendChild(notification);
    
    this.setupNotificationHandlers(notification);
    this.setupAutoUpdate(notification);
  }

  createNotificationElement() {
    const notification = document.createElement('div');
    notification.className = 'pwa-update-notification';
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #808080;
                color: white;
      padding: 15px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      z-index: 10000;
      font-family: Arial, sans-serif;
      font-size: 14px;
      max-width: 300px;
      animation: slideIn 0.3s ease-out;
    `;
    
    notification.innerHTML = `
      <div style="margin-bottom: 10px;">Доступно обновление приложения!</div>
      <button class="update-btn" style="
        background: white;
                color: #808080;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
        margin-right: 10px;
      ">Обновить</button>
      <button class="dismiss-btn" style="
        background: transparent;
                color: white;
        border: 1px solid white;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
      ">Позже</button>
    `;
    
    this.addAnimationStyles();
    return notification;
  }

  addAnimationStyles() {
    if (document.querySelector('#pwa-update-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'pwa-update-styles';
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  }

  setupNotificationHandlers(notification) {
    const updateBtn = notification.querySelector('.update-btn');
    const dismissBtn = notification.querySelector('.dismiss-btn');
    
    updateBtn.addEventListener('click', () => {
      this.applyUpdate();
      notification.remove();
    });
    
    dismissBtn.addEventListener('click', () => {
      notification.remove();
    });
  }

  setupAutoUpdate(notification) {
    setTimeout(() => {
      if (document.body.contains(notification)) {
        this.applyUpdate();
        notification.remove();
      }
    }, this.autoUpdateDelay);
  }

  async forceServiceWorkerUpdate(registration) {
    try {
      const timestamp = Date.now();
      const swUrl = `./sw.js?v=${timestamp}`;
      
      const response = await fetch(swUrl, {
        cache: 'no-cache',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });
      
      if (response.ok) {
        await registration.update();
      }
    } catch (error) {
      console.log('Force SW update failed:', error);
      registration.update();
    }
  }

  applyUpdate() {
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
    }
  }

  showPostUpdateToastIfNeeded() {
    let flag = null;
    try { flag = sessionStorage.getItem('pwaUpdated'); } catch (e) {}
    if (flag === '1') {
      try { sessionStorage.removeItem('pwaUpdated'); } catch (e) {}
      const toast = this.createUpdatedToastElement();
      document.body.appendChild(toast);
      requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
      });
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-10px)';
        setTimeout(() => {
          if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 200);
      }, 2500);
    }
  }

  createUpdatedToastElement() {
    const toast = document.createElement('div');
    toast.className = 'pwa-updated-toast';
    toast.textContent = 'Приложение обновилось';
    toast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #808080;
                color: white;
      padding: 10px 14px;
      border-radius: 6px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      z-index: 10000;
      font-family: Arial, sans-serif;
      font-size: 14px;
      opacity: 0;
      transform: translateY(-10px);
      transition: opacity .2s ease, transform .2s ease;
    `;
    return toast;
  }
}

window.PWAUpdater = PWAUpdater;