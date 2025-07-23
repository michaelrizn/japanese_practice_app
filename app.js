// app.js
const FONT_SIZE_KEY = "globalFontSize";

window.addEventListener("DOMContentLoaded", () => {
  const pwaUpdater = new PWAUpdater();
  pwaUpdater.init();

  // Инициализация масштаба
  let currentScaleFactor = parseFloat(localStorage.getItem('scaleFactor'));
  if (!currentScaleFactor || isNaN(currentScaleFactor)) {
    currentScaleFactor = 2;
  }
  document.documentElement.style.setProperty('--scale-factor', currentScaleFactor);

  // Обработчики для кнопок изменения масштаба
  const decreaseBtn = document.getElementById("font-decrease");
  const increaseBtn = document.getElementById("font-increase");
  if (decreaseBtn) {
    decreaseBtn.addEventListener("click", () => {
      changeScaleFactor(-0.2);
    });
  }
  if (increaseBtn) {
    increaseBtn.addEventListener("click", () => {
      changeScaleFactor(+0.2);
    });
  }
  
  // Добавляем плавность для всех переходов
  document.body.style.transition = "all 0.3s ease";
  
  // Инициализация автоматического изменения высоты textarea
  initAutoResizeTextarea();
});

/**
 * Изменяет масштаб на delta
 * @param {number} delta - Величина изменения масштаба
 */
function changeScaleFactor(delta) {
  let currentScale = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue('--scale-factor')
  ) || 2;
  let newScale = currentScale + delta;
  
  // Ограничения на масштаб
  if (newScale < 0.5) newScale = 0.5;
  if (newScale > 4) newScale = 4;

  document.documentElement.style.setProperty('--scale-factor', newScale);
  localStorage.setItem('scaleFactor', String(newScale));
}

/**
 * Инициализирует автоматическое изменение высоты textarea
 */
function initAutoResizeTextarea() {
  const textarea = document.getElementById('japanese-input');
  if (!textarea) return;
  
  // Функция для автоматического изменения высоты
  function autoResize() {
    // Сбрасываем высоту для правильного расчета scrollHeight
    textarea.style.height = 'auto';
    
    // Устанавливаем новую высоту на основе содержимого
    const newHeight = Math.max(textarea.scrollHeight, getMinHeight());
    textarea.style.height = newHeight + 'px';
  }
  
  // Функция для получения минимальной высоты в зависимости от размера экрана
  function getMinHeight() {
    const isMobile = window.innerWidth <= 600;
    if (isMobile) {
      // Для мобильных устройств
      const vw = window.innerWidth / 100;
      return Math.max(35, Math.min(8 * vw, 45));
    } else {
      // Для обычных экранов
      const vw = window.innerWidth / 100;
      return Math.max(35.2, Math.min(4.34 * vw, 40.64));
    }
  }
  
  // Добавляем обработчики событий
  textarea.addEventListener('input', autoResize);
  textarea.addEventListener('paste', () => {
    // Небольшая задержка для обработки вставленного текста
    setTimeout(autoResize, 10);
  });
  
  // Обработчик изменения размера окна
  window.addEventListener('resize', () => {
    autoResize();
  });
  
  // Инициализируем высоту при загрузке
  autoResize();
}
