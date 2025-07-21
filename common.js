// Общий модуль для упражнений
class ExerciseManager {
  constructor(data, symbolKey = 'symbol', answerKey = 'english', displayKey = 'russian') {
    this.data = data;
    this.symbolKey = symbolKey;
    this.answerKey = answerKey;
    this.displayKey = displayKey;
    this.currentSymbol = null;
    this.init();
  }

  init() {
    if (!this.data?.length) {
      console.error('Данные для упражнения не найдены');
      return;
    }
    this.elements = {
      symbol: document.getElementById('main-symbol'),
      options: document.getElementById('options'),
      feedback: document.getElementById('feedback')
    };
    this.showQuestion();
  }

  showQuestion() {
    this.clearUI();
    const randomIndex = Math.floor(Math.random() * this.data.length);
    this.currentSymbol = this.data[randomIndex];
    this.elements.symbol.textContent = this.currentSymbol[this.symbolKey];
    this.generateOptions(randomIndex).forEach(option => this.createOptionElement(option));
  }

  clearUI() {
    this.elements.options.innerHTML = '';
    this.elements.feedback.innerHTML = '';
    this.elements.feedback.className = 'feedback';
  }

  generateOptions(correctIndex) {
    const options = [this.data[correctIndex]];
    const usedIndexes = new Set([correctIndex]);
    while (options.length < 4) {
      const randomIndex = Math.floor(Math.random() * this.data.length);
      if (!usedIndexes.has(randomIndex)) {
        options.push(this.data[randomIndex]);
        usedIndexes.add(randomIndex);
      }
    }
    return options.sort(() => Math.random() - 0.5);
  }

  createOptionElement(option) {
    const element = document.createElement('div');
    element.className = 'option';
    element.innerHTML = `<strong>${option[this.answerKey]}</strong> — ${option[this.displayKey]}`;
    element.addEventListener('click', (e) => this.checkAnswer(option[this.answerKey], e.currentTarget));
    this.elements.options.appendChild(element);
  }

  checkAnswer(selectedOption, clickedElement) {
    const isCorrect = selectedOption === this.currentSymbol[this.answerKey];
    clickedElement.innerHTML = isCorrect ? 'Yes' : 'No';
    clickedElement.className = `option ${isCorrect ? 'correct' : 'incorrect'}`;
    setTimeout(() => this.showQuestion(), 1000);
  }
}

// Функция инициализации размера шрифта
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

// Автоинициализация при загрузке
document.addEventListener('DOMContentLoaded', initFontSize);