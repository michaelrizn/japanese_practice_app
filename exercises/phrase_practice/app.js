// Импорт данных из файлов с фразами
import { hiraganaPhrases } from "./hiragana_phrases.js";
import { katakanaPhrases } from "./katakana_phrases.js";

// Объединение всех фраз в один массив
let currentPhraseIndex = 0;
const phrases = [...hiraganaPhrases, ...katakanaPhrases];

// Функция для обновления интерфейса с текущей фразой
function updateUI() {
  if (!phrases || phrases.length === 0) {
    console.error("No phrases available for display.");
    return;
  }

  const phrase = phrases[currentPhraseIndex];

  document.getElementById("jp-phrase").textContent = phrase.jp || "—";
  document.getElementById("transcription-ru").textContent =
    phrase.transcriptionRu || "—";
  document.getElementById("translation-ru").textContent =
    phrase.translationRu || "—";
  document.getElementById("transcription-en").textContent =
    phrase.transcriptionEn || "—";
  document.getElementById("translation-en").textContent =
    phrase.translationEn || "—";
}

// Обработчик для кнопки "Следующая фраза"
function handleNextPhrase() {
  if (!phrases || phrases.length === 0) {
    console.error("No phrases available to navigate.");
    return;
  }

  currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
  updateUI();
}

// Управление размером шрифта
const rootElement = document.documentElement;
let fontSize = 100; // Начальный размер шрифта в процентах

function setFontSize(size) {
  fontSize = Math.min(150, Math.max(50, size));
  rootElement.style.fontSize = fontSize + "%";
}

// Подключение кнопок изменения размера шрифта
function initFontSizeControls() {
  const decreaseButton = document.getElementById("font-decrease");
  const increaseButton = document.getElementById("font-increase");

  if (decreaseButton) {
    decreaseButton.addEventListener("click", () => {
      setFontSize(fontSize - 10);
      console.log("Font size decreased to:", fontSize + "%");
    });
  } else {
    console.error("Font decrease button not found.");
  }

  if (increaseButton) {
    increaseButton.addEventListener("click", () => {
      setFontSize(fontSize + 10);
      console.log("Font size increased to:", fontSize + "%");
    });
  } else {
    console.error("Font increase button not found.");
  }

  // Устанавливаем начальный размер шрифта
  setFontSize(fontSize);
}

// Инициализация упражнения
function initPhrasePractice() {
  // Подключение кнопок изменения размера шрифта
  initFontSizeControls();

  // Привязка обработчика к кнопке "Следующая фраза"
  const nextPhraseButton = document.getElementById("next-phrase-button");
  if (nextPhraseButton) {
    nextPhraseButton.addEventListener("click", handleNextPhrase);
  } else {
    console.error("Next phrase button not found.");
  }

  // Первоначальная загрузка данных в интерфейс
  updateUI();
}

// Запуск функции инициализации после загрузки DOM
document.addEventListener("DOMContentLoaded", initPhrasePractice);
