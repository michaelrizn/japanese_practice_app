// app.js
const FONT_SIZE_KEY = "globalFontSize";

window.addEventListener("DOMContentLoaded", () => {
  let currentFontSize = parseInt(localStorage.getItem(FONT_SIZE_KEY), 10);
  if (!currentFontSize || isNaN(currentFontSize)) {
    currentFontSize = 16;
  }
  document.documentElement.style.fontSize = currentFontSize + "px";

  const decreaseBtn = document.getElementById("font-decrease");
  const increaseBtn = document.getElementById("font-increase");
  if (decreaseBtn) {
    decreaseBtn.addEventListener("click", () => {
      changeFontSize(-1);
    });
  }
  if (increaseBtn) {
    increaseBtn.addEventListener("click", () => {
      changeFontSize(+1);
    });
  }
});

function changeFontSize(delta) {
  let currentSize = parseInt(
    window.getComputedStyle(document.documentElement).fontSize,
    10,
  );
  let newSize = currentSize + delta;
  if (newSize < 12) newSize = 12;
  if (newSize > 32) newSize = 32;

  document.documentElement.style.fontSize = newSize + "px";
  localStorage.setItem(FONT_SIZE_KEY, String(newSize));
}
