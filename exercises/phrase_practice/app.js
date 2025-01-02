window.addEventListener("DOMContentLoaded", () => {
  initToggles();
  showRandomPhrase();

  const nextButton = document.getElementById("next-phrase-button");
  nextButton.addEventListener("click", showRandomPhrase);
});

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
  const sources = [];

  // Проверяем доступность каждого источника и добавляем его в массив
  if (typeof hiraganaPhrases !== "undefined") {
    console.log("hiraganaPhrases доступен:", hiraganaPhrases);
    sources.push(hiraganaPhrases);
  } else {
    console.error("hiraganaPhrases не определён");
  }

  if (typeof katakanaPhrases !== "undefined") {
    console.log("katakanaPhrases доступен:", katakanaPhrases);
    sources.push(katakanaPhrases);
  } else {
    console.error("katakanaPhrases не определён");
  }

  if (typeof kanjiPhrases !== "undefined") {
    console.log("kanjiPhrases доступен:", kanjiPhrases);
    sources.push(kanjiPhrases);
  } else {
    console.error("kanjiPhrases не определён");
  }

  // Проверяем, есть ли доступные источники фраз
  if (sources.length === 0) {
    console.error("Нет доступных источников фраз");
    return;
  }

  // Логируем доступные источники
  console.log("Доступные источники фраз:", sources);

  // Выбираем случайный источник
  const sourceIndex = Math.floor(Math.random() * sources.length);
  const sourceArray = sources[sourceIndex];

  // Логируем, из какого источника взята фраза
  console.log(
    "Выбранный источник:",
    sourceArray === hiraganaPhrases
      ? "hiraganaPhrases"
      : sourceArray === katakanaPhrases
        ? "katakanaPhrases"
        : sourceArray === kanjiPhrases
          ? "kanjiPhrases"
          : "неизвестный источник",
  );

  // Выбираем случайную фразу из выбранного источника
  const phraseObj = sourceArray[Math.floor(Math.random() * sourceArray.length)];

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
