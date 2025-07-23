class PWAUpdater {
  constructor() {
    this.refreshing = false;
    this.updateCheckInterval = 60000;
    this.autoUpdateDelay = 10000;
  }

  init() {
    if (!('serviceWorker' in navigator)) {
      console.log('Service Worker not supported');
      return;
    }

    this.registerServiceWorker();
    this.setupEventListeners();
  }

  async registerServiceWorker() {
    try {
      const registration = await navigator.serviceWorker.register('./sw.js');
      console.log('SW registered:', registration);
      
      this.setupUpdateDetection(registration);
      this.startPeriodicUpdateCheck(registration);
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
      window.location.reload();
    });

    window.addEventListener('focus', () => {
      this.checkForUpdates();
    });

    window.addEventListener('online', () => {
      this.checkForUpdates();
    });
  }

  async checkForUpdates() {
    if (navigator.serviceWorker.controller) {
      try {
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration) {
          registration.update();
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
      background: #4CAF50;
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
        color: #4CAF50;
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

  applyUpdate() {
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
    }
  }
}

window.PWAUpdater = PWAUpdater;