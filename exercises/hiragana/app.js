document.addEventListener("DOMContentLoaded", () => {
  // Настройки изменения размера шрифта
  const rootElement = document.documentElement;
  const decreaseButton = document.getElementById("font-decrease");
  const increaseButton = document.getElementById("font-increase");

  // Начальный размер шрифта
  let fontSize = 100; // в процентах

  // Функция для изменения размера шрифта
  function setFontSize(size) {
    fontSize = Math.min(150, Math.max(50, size)); // Ограничиваем от 50% до 150%
    rootElement.style.fontSize = fontSize + "%";
  }

  // Обработчики событий для кнопок
  decreaseButton.addEventListener("click", () => setFontSize(fontSize - 10));
  increaseButton.addEventListener("click", () => setFontSize(fontSize + 10));

  // Инициализация начального состояния
  setFontSize(fontSize);

  // Основная логика упражнения
  if (typeof hiragana === "undefined" || !hiragana.length) {
    console.error("Массив hiragana не найден или пуст");
    return;
  }

  let currentSymbol = null;

  // Элементы интерфейса
  const mainSymbolElement = document.getElementById("main-symbol");
  const optionsContainer = document.getElementById("options");
  const feedbackElement = document.getElementById("feedback");

  // Функция для отображения вопроса
  function showQuestion() {
    optionsContainer.innerHTML = ""; // Очистка вариантов
    feedbackElement.innerHTML = ""; // Очистка фидбека

    // Случайный символ для вопроса
    const randomIndex = Math.floor(Math.random() * hiragana.length);
    currentSymbol = hiragana[randomIndex];

    // Отображаем символ
    mainSymbolElement.textContent = currentSymbol.symbol;

    // Генерация и отображение 4 вариантов ответа
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

      // Добавляем горизонтальную черту между вариантами, кроме последнего
      if (index < options.length - 1) {
        const divider = document.createElement("hr");
        divider.className = "divider";
        optionsContainer.appendChild(divider);
      }
    });

    // Добавляем горизонтальную черту перед обратной связью
    const feedbackDivider = document.createElement("hr");
    feedbackDivider.className = "divider";
    optionsContainer.appendChild(feedbackDivider);
  }

  // Генерация вариантов ответа
  function generateOptions(correctIndex) {
    const options = [];
    const usedIndexes = new Set();

    // Добавляем правильный ответ
    options.push(hiragana[correctIndex]);
    usedIndexes.add(correctIndex);

    // Добавляем 3 случайных неправильных варианта
    while (options.length < 4) {
      const randomIndex = Math.floor(Math.random() * hiragana.length);
      if (!usedIndexes.has(randomIndex)) {
        options.push(hiragana[randomIndex]);
        usedIndexes.add(randomIndex);
      }
    }

    // Перемешиваем варианты
    return options.sort(() => Math.random() - 0.5);
  }

  // Проверка ответа
  function checkAnswer(selectedOption) {
    feedbackElement.innerHTML = ""; // Очистка предыдущего фидбека

    const feedbackText = document.createElement("span");
    if (selectedOption === currentSymbol.english) {
      feedbackText.textContent = "Yes";
      feedbackText.className = "correct";
    } else {
      feedbackText.textContent = "No";
      feedbackText.className = "incorrect";
    }

    feedbackElement.appendChild(feedbackText);

    // Переход к следующему вопросу через 1 секунду
    setTimeout(showQuestion, 1000);
  }

  // Запуск упражнения
  showQuestion();
});
