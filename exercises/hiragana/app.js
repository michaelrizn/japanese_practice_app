document.addEventListener("DOMContentLoaded", () => {
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
    feedbackElement.className = "feedback"; // Сбрасываем класс

    // Случайный символ для вопроса
    const randomIndex = Math.floor(Math.random() * hiragana.length);
    currentSymbol = hiragana[randomIndex];

    // Отображаем символ
    mainSymbolElement.textContent = currentSymbol.symbol;

    // Генерация и отображение 4 вариантов ответа
    const options = generateOptions(randomIndex);

    options.forEach((option) => {
      const optionElement = document.createElement("div");
      optionElement.className = "option";
      optionElement.innerHTML = `<strong>${option.english}</strong> — ${option.russian}`;

      // Обработчик выбора
      optionElement.addEventListener("click", () =>
        checkAnswer(option.english),
      );

      optionsContainer.appendChild(optionElement);
    });
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
    const isCorrect = selectedOption === currentSymbol.english;
    
    // Класс для стилизации отзыва
    feedbackElement.className = isCorrect ? "feedback correct" : "feedback incorrect";
    
    // Текст отзыва
    feedbackElement.textContent = isCorrect ? "Верно" : "Неверно";

    // Переход к следующему вопросу через 1 секунду
    setTimeout(showQuestion, 1000);
  }

  // Запуск упражнения
  showQuestion();
});
