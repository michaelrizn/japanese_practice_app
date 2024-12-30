// exercises/phrase_practice/phrase_practice.js

window.addEventListener("DOMContentLoaded", () => {
  initToggles();
  showRandomPhrase();

  const nextButton = document.getElementById("next-phrase-button");
  nextButton.addEventListener("click", showRandomPhrase);
});

/**
 * Инициализация тумблеров при загрузке страницы
 */
function initToggles() {
  const toggleTranscriptionRu = document.getElementById(
    "toggle-transcription-ru",
  );
  const toggleTranslationRu = document.getElementById("toggle-translation-ru");
  const toggleTranscriptionEn = document.getElementById(
    "toggle-transcription-en",
  );
  const toggleTranslationEn = document.getElementById("toggle-translation-en");

  // Восстанавливаем состояние из localStorage
  toggleTranscriptionRu.checked = getStoredToggle("transcriptionRu");
  toggleTranslationRu.checked = getStoredToggle("translationRu");
  toggleTranscriptionEn.checked = getStoredToggle("transcriptionEn");
  toggleTranslationEn.checked = getStoredToggle("translationEn");

  // Навешиваем обработчики
  toggleTranscriptionRu.addEventListener("change", () => {
    storeToggle("transcriptionRu", toggleTranscriptionRu.checked);
    applyToggleVisibility(".line-2", toggleTranscriptionRu.checked);
  });

  toggleTranslationRu.addEventListener("change", () => {
    storeToggle("translationRu", toggleTranslationRu.checked);
    applyToggleVisibility(".line-3", toggleTranslationRu.checked);
  });

  toggleTranscriptionEn.addEventListener("change", () => {
    storeToggle("transcriptionEn", toggleTranscriptionEn.checked);
    applyToggleVisibility(".line-4", toggleTranscriptionEn.checked);
  });

  toggleTranslationEn.addEventListener("change", () => {
    storeToggle("translationEn", toggleTranslationEn.checked);
    applyToggleVisibility(".line-5", toggleTranslationEn.checked);
  });
}

/**
 * Показать случайную фразу (случайно выбрав хирагану или катакану).
 */
function showRandomPhrase() {
  // Определяем, из какого массива тянуть
  const pickHiragana = Math.random() < 0.5;
  const sourceArray = pickHiragana ? hiraganaPhrases : katakanaPhrases;

  // Случайный индекс
  const randomIndex = Math.floor(Math.random() * sourceArray.length);
  const phraseObj = sourceArray[randomIndex];

  // Заполняем элементы
  document.getElementById("jp-phrase").textContent = phraseObj.phrase;
  document.getElementById("transcription-ru").textContent =
    phraseObj.transcriptionRu;
  document.getElementById("translation-ru").textContent =
    phraseObj.translationRu;
  document.getElementById("transcription-en").textContent =
    phraseObj.transcriptionEn;
  document.getElementById("translation-en").textContent =
    phraseObj.translationEn;

  // Применяем состояния тумблеров
  applyToggleVisibility(
    ".line-2",
    document.getElementById("toggle-transcription-ru").checked,
  );
  applyToggleVisibility(
    ".line-3",
    document.getElementById("toggle-translation-ru").checked,
  );
  applyToggleVisibility(
    ".line-4",
    document.getElementById("toggle-transcription-en").checked,
  );
  applyToggleVisibility(
    ".line-5",
    document.getElementById("toggle-translation-en").checked,
  );
}

/**
 * Скрывает или показывает текст внутри заданной строки,
 * но НЕ скрывает сам тумблер.
 *
 * @param {string} selector - например, ".line-2"
 * @param {boolean} isChecked - если true, то текст скрыт (checkbox=ON)
 */
function applyToggleVisibility(selector, isChecked) {
  // Найдём строку (div), где находится и текст, и чекбокс
  const lineElement = document.querySelector(selector);
  if (!lineElement) return;

  // Внутри ищем .text-content — это тот span, где собственно текст
  const textContent = lineElement.querySelector(".text-content");
  if (!textContent) return;

  // Если чекбокс включён => скрываем текст, иначе показываем
  textContent.style.display = isChecked ? "none" : "inline";
}

/**
 * Сохраняем состояние тумблера в localStorage.
 */
function storeToggle(key, value) {
  localStorage.setItem(key, String(value));
}

/**
 * Считываем состояние тумблера из localStorage.
 */
function getStoredToggle(key) {
  return localStorage.getItem(key) === "true";
}
