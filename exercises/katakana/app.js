const FONT_SIZE_KEY = "globalFontSize";

document.addEventListener("DOMContentLoaded", () => {
  // Инициализация размера шрифта
  let currentFontSize = parseInt(localStorage.getItem(FONT_SIZE_KEY), 10);
  if (!currentFontSize || isNaN(currentFontSize)) {
    currentFontSize = 16;
  }
  document.documentElement.style.fontSize = currentFontSize + "px";

  // Привязка кнопок изменения шрифта
  const decreaseBtn = document.getElementById("font-decrease");
  const increaseBtn = document.getElementById("font-increase");
  if (decreaseBtn) {
    decreaseBtn.addEventListener("click", () => changeFontSize(-1));
  }
  if (increaseBtn) {
    increaseBtn.addEventListener("click", () => changeFontSize(+1));
  }

  // Запуск упражнения
  initKatakanaPractice();
});

// Функция изменения шрифта
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

// Основная логика упражнения "Katakana Practice"
function initKatakanaPractice() {
  if (typeof katakana === "undefined" || !katakana.length) {
    console.error("Массив katakana не найден или пуст");
    return;
  }

  let currentSymbol = null;

  const mainSymbolElement = document.getElementById("main-symbol");
  const optionsContainer = document.getElementById("options");
  const feedbackElement = document.getElementById("feedback");

  function showQuestion() {
    optionsContainer.innerHTML = ""; // Очистка вариантов
    feedbackElement.innerHTML = ""; // Очистка фидбека

    // Случайный символ
    const randomIndex = Math.floor(Math.random() * katakana.length);
    currentSymbol = katakana[randomIndex];

    // Отображаем символ
    mainSymbolElement.textContent = currentSymbol.symbol;

    // Генерация и отображение вариантов
    const options = generateOptions(randomIndex);

    options.forEach((option, index) => {
      const optionElement = document.createElement("div");
      optionElement.className = "option";
      optionElement.innerHTML = `<strong>${option.english}</strong> — ${option.russian}`;

      // Обработчик выбора
      optionElement.addEventListener("click", () =>
        checkAnswer(option.english),
      );

      optionsContainer.appendChild(optionElement);

      // Добавляем горизонтальную черту между вариантами
      if (index < options.length - 1) {
        const divider = document.createElement("hr");
        divider.className = "divider";
        optionsContainer.appendChild(divider);
      }
    });
  }

  function generateOptions(correctIndex) {
    const options = [];
    const usedIndexes = new Set();

    options.push(katakana[correctIndex]);
    usedIndexes.add(correctIndex);

    while (options.length < 4) {
      const randomIndex = Math.floor(Math.random() * katakana.length);
      if (!usedIndexes.has(randomIndex)) {
        options.push(katakana[randomIndex]);
        usedIndexes.add(randomIndex);
      }
    }

    return options.sort(() => Math.random() - 0.5);
  }

  function checkAnswer(selectedOption) {
    feedbackElement.innerHTML = ""; // Очистка обратной связи

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

  // Запуск отображения первого вопроса
  showQuestion();
}
