// app.js
const FONT_SIZE_KEY = "globalFontSize";

window.addEventListener("DOMContentLoaded", () => {
  // Регистрация Service Worker для PWA
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  }

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
