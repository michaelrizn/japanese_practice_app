function initFontSize() {
  const FONT_SIZE_KEY = 'globalFontSize';
  let currentFontSize = parseInt(localStorage.getItem(FONT_SIZE_KEY), 10) || 16;
  document.documentElement.style.fontSize = currentFontSize + 'px';
  
  const decreaseBtn = document.getElementById('font-decrease');
  const increaseBtn = document.getElementById('font-increase');
  
  function changeFontSize(delta) {
    let currentSize = parseInt(window.getComputedStyle(document.documentElement).fontSize, 10);
    let newSize = Math.max(12, Math.min(32, currentSize + delta));
    document.documentElement.style.fontSize = newSize + 'px';
    localStorage.setItem(FONT_SIZE_KEY, String(newSize));
  }
  
  decreaseBtn?.addEventListener('click', () => changeFontSize(-1));
  increaseBtn?.addEventListener('click', () => changeFontSize(1));
  document.body.style.transition = 'all 0.3s ease';
}

document.addEventListener('DOMContentLoaded', initFontSize);