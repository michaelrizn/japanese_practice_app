const FONT_SIZE_KEY = "globalFontSize";

document.addEventListener("DOMContentLoaded", () => {
  let currentFontSize = parseInt(localStorage.getItem(FONT_SIZE_KEY), 10);
  if (!currentFontSize || isNaN(currentFontSize)) {
    currentFontSize = 16;
  }
  document.documentElement.style.fontSize = currentFontSize + "px";

  const decreaseBtn = document.getElementById("font-decrease");
  const increaseBtn = document.getElementById("font-increase");
  if (decreaseBtn) {
    decreaseBtn.addEventListener("click", () => changeFontSize(-1));
  }
  if (increaseBtn) {
    increaseBtn.addEventListener("click", () => changeFontSize(+1));
  }

  initHiraganaAndKatakanaPractice();
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

function initHiraganaAndKatakanaPractice() {
  if (
    typeof hiraganaAndKatakana === "undefined" ||
    !hiraganaAndKatakana.length
  ) {
    console.error("Массив hiraganaAndKatakana не найден или пуст");
    return;
  }

  let currentSymbol = null;

  const mainSymbolElement = document.getElementById("main-symbol");
  const optionsContainer = document.getElementById("options");
  const feedbackElement = document.getElementById("feedback");

  function showQuestion() {
    optionsContainer.innerHTML = "";
    feedbackElement.innerHTML = "";

    const randomIndex = Math.floor(Math.random() * hiraganaAndKatakana.length);
    currentSymbol = hiraganaAndKatakana[randomIndex];

    mainSymbolElement.textContent = currentSymbol.symbol;

    const options = generateOptions(randomIndex);

    options.forEach((option, index) => {
      const optionElement = document.createElement("div");
      optionElement.className = "option";
      optionElement.innerHTML = `<strong>${option.english}</strong> — ${option.russian}`;

      optionElement.addEventListener("click", () =>
        checkAnswer(option.english),
      );

      optionsContainer.appendChild(optionElement);

      if (index < options.length - 1) {
        const divider = document.createElement("hr");
        divider.className = "divider";
        optionsContainer.appendChild(divider);
      }
    });

    const finalDivider = document.createElement("hr");
    finalDivider.className = "divider";
    optionsContainer.appendChild(finalDivider);
  }

  function generateOptions(correctIndex) {
    const options = [];
    const usedIndexes = new Set();

    options.push(hiraganaAndKatakana[correctIndex]);
    usedIndexes.add(correctIndex);

    while (options.length < 4) {
      const randomIndex = Math.floor(
        Math.random() * hiraganaAndKatakana.length,
      );
      if (!usedIndexes.has(randomIndex)) {
        options.push(hiraganaAndKatakana[randomIndex]);
        usedIndexes.add(randomIndex);
      }
    }

    return options.sort(() => Math.random() - 0.5);
  }

  function checkAnswer(selectedOption) {
    feedbackElement.innerHTML = "";

    const feedbackText = document.createElement("span");
    if (selectedOption === currentSymbol.english) {
      feedbackText.textContent = "Yes";
      feedbackText.className = "correct";
    } else {
      feedbackText.textContent = "No";
      feedbackText.className = "incorrect";
    }

    feedbackElement.appendChild(feedbackText);

    setTimeout(showQuestion, 1000);
  }

  showQuestion();
}
