window.addEventListener("DOMContentLoaded", () => {
  initToggles();
  initPhraseSources();
  showRandomPhrase();

  const nextButton = document.getElementById("next-phrase-button");
  nextButton.addEventListener("click", showRandomPhrase);
});

// Массив для хранения всех доступных источников фраз
const phraseSources = [];

// Функция для инициализации источников фраз
function initPhraseSources() {
  // Удаляем из katakana-файла фразы без катаканы (только хирагана)
  window.katakanaPhrases01 = window.katakanaPhrases01.filter(item => /[\u30A0-\u30FF]/.test(item.phrase));
  // Удаляем из kanji-файла фразы без иероглифов (только хирагана)
  window.kanjiPhrases01 = window.kanjiPhrases01.filter(item => /[\u4E00-\u9FFF]/.test(item.phrase));
  // Регистрируем доступные источники фраз
  registerPhraseSource("hiraganaPhrases01");
  registerPhraseSource("katakanaPhrases01");
  registerPhraseSource("kanjiPhrases01");
  
  // Можно добавить будущие источники:
  // registerPhraseSource("hiraganaPhrases02"); и т.д.
  
  console.log(`Инициализировано ${phraseSources.length} источников фраз`);
}

// Функция для регистрации источника фраз
function registerPhraseSource(sourceVarName) {
  const globalVarName = sourceVarName;
  const sourceArray = window[globalVarName];
  
  if (Array.isArray(sourceArray)) {
    phraseSources.push({
      name: globalVarName,
      phrases: sourceArray
    });
    console.log(`Зарегистрирован источник: ${globalVarName} (${sourceArray.length} фраз)`);
  } else {
    console.error(`Источник ${globalVarName} не найден или не является массивом`);
  }
}

function initToggles() {
  const toggleJpPhrase = document.getElementById("toggle-jp-phrase");
  const toggleTranscriptionRu = document.getElementById(
    "toggle-transcription-ru",
  );
  const toggleTranslationRu = document.getElementById("toggle-translation-ru");
  const toggleWordsRu = document.getElementById("toggle-words-ru");
  const toggleTranscriptionEn = document.getElementById(
    "toggle-transcription-en",
  );
  const toggleTranslationEn = document.getElementById("toggle-translation-en");
  const toggleWordsEn = document.getElementById("toggle-words-en");

  toggleJpPhrase.checked = false;
  toggleTranscriptionRu.checked = false;
  toggleTranslationRu.checked = false;
  toggleWordsRu.checked = false;
  toggleTranscriptionEn.checked = false;
  toggleTranslationEn.checked = false;
  toggleWordsEn.checked = false;

  toggleJpPhrase.addEventListener("change", () => {
    applyToggleVisibility(".line-1", toggleJpPhrase.checked);
  });
  toggleTranscriptionRu.addEventListener("change", () => {
    applyToggleVisibility(".line-2", toggleTranscriptionRu.checked);
  });
  toggleTranslationRu.addEventListener("change", () => {
    applyToggleVisibility(".line-3", toggleTranslationRu.checked);
  });
  toggleWordsRu.addEventListener("change", () => {
    applyToggleVisibility(".line-words-ru", toggleWordsRu.checked);
  });
  toggleTranscriptionEn.addEventListener("change", () => {
    applyToggleVisibility(".line-4", toggleTranscriptionEn.checked);
  });
  toggleTranslationEn.addEventListener("change", () => {
    applyToggleVisibility(".line-5", toggleTranslationEn.checked);
  });
  toggleWordsEn.addEventListener("change", () => {
    applyToggleVisibility(".line-words-en", toggleWordsEn.checked);
  });
}

function showRandomPhrase() {
  // Проверяем, есть ли доступные источники фраз
  if (phraseSources.length === 0) {
    console.error("Нет доступных источников фраз");
    return;
  }

  // Логируем доступные источники
  console.log("Доступные источники фраз:", phraseSources);

  // Выбираем случайный источник
  const sourceIndex = Math.floor(Math.random() * phraseSources.length);
  const source = phraseSources[sourceIndex];

  // Логируем, из какого источника взята фраза
  console.log("Выбранный источник:", source.name);

  // Выбираем случайную фразу из выбранного источника
  const phraseObj = source.phrases[Math.floor(Math.random() * source.phrases.length)];

  // Логируем выбранную фразу
  console.log("Выбранная фраза:", phraseObj);

  // Отображаем фразу на странице
  document.getElementById("jp-phrase").textContent = phraseObj.phrase;
  document.getElementById("transcription-ru").textContent =
    phraseObj.transcriptionRu;
  document.getElementById("translation-ru").textContent =
    phraseObj.translationRu;
  document.getElementById("transcription-en").textContent =
    phraseObj.transcriptionEn;
  document.getElementById("translation-en").textContent =
    phraseObj.translationEn;

  fillWordsList("words-ru", phraseObj.wordsRu);
  fillWordsList("words-en", phraseObj.wordsEn);

  applyToggleVisibility(
    ".line-1",
    document.getElementById("toggle-jp-phrase").checked,
  );
  applyToggleVisibility(
    ".line-2",
    document.getElementById("toggle-transcription-ru").checked,
  );
  applyToggleVisibility(
    ".line-3",
    document.getElementById("toggle-translation-ru").checked,
  );
  applyToggleVisibility(
    ".line-words-ru",
    document.getElementById("toggle-words-ru").checked,
  );
  applyToggleVisibility(
    ".line-4",
    document.getElementById("toggle-transcription-en").checked,
  );
  applyToggleVisibility(
    ".line-5",
    document.getElementById("toggle-translation-en").checked,
  );
  applyToggleVisibility(
    ".line-words-en",
    document.getElementById("toggle-words-en").checked,
  );
}

function applyToggleVisibility(lineSelector, isChecked) {
  const line = document.querySelector(lineSelector);
  if (!line) return;

  const textContent = line.querySelector(".text-content");
  if (!textContent) return;

  textContent.style.visibility = isChecked ? "hidden" : "visible";
}

function fillWordsList(elementId, wordsArray) {
  const container = document.getElementById(elementId);
  container.innerHTML = "";
  if (!wordsArray || wordsArray.length === 0) return;

  wordsArray.forEach((item) => {
    const div = document.createElement("div");
    div.textContent = item;
    container.appendChild(div);
  });
}
