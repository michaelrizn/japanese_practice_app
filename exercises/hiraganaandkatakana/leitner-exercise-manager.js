class LeitnerExerciseManager {
  constructor() {
    this.leitner = new LeitnerSystem();
    this.currentCard = null;
    this.currentType = 'mixed';
    this.questionMode = 'symbol-to-reading';
    this.startTime = 0;
    this.init();
  }

  init() {
    this.elements = {
      symbol: document.getElementById('main-symbol'),
      options: document.getElementById('options'),
      feedback: document.getElementById('feedback'),
      controls: document.getElementById('controls'),
      stats: document.getElementById('stats')
    };
    
    this.createControls();
    this.updateStats();
    this.showNextCard();
  }

  createControls() {
    const controlPanelHtml = `
      <div class="control-panel">
        <div class="panel-section">
          <h3>Управление коробками</h3>
          <div class="box-controls">
            <button class="box-btn" data-box="0">Новые</button>
            <button class="box-btn" data-box="1">1 день</button>
            <button class="box-btn" data-box="2">3 дня</button>
            <button class="box-btn" data-box="3">1 неделя</button>
            <button class="box-btn" data-box="4">1 месяц</button>
          </div>
        </div>
        
        <div class="panel-section">
          <h3>Статистика</h3>
          <div class="stats-display">
            <div class="boxes-stats" id="boxes-stats"></div>
          </div>
        </div>
        
        <div class="panel-section">
          <h3>Действия</h3>
          <div class="action-controls">
            <button class="control-btn" id="reset-progress">Сбросить прогресс</button>
          </div>
        </div>
      </div>
    `;
    
    this.elements.feedback.insertAdjacentHTML('afterend', controlPanelHtml);
    
    document.querySelectorAll('[data-box]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (this.currentCard) {
          const boxNumber = parseInt(e.target.dataset.box);
          this.leitner.moveCardToBox(this.currentCard.id, boxNumber);
          this.updateStats();
          this.showNextCard();
        }
      });
    });
    
    document.getElementById('reset-progress').addEventListener('click', () => {
      if (confirm('Вы уверены, что хотите сбросить весь прогресс?')) {
        this.leitner.resetProgress();
        this.updateStats();
        this.showNextCard();
      }
    });
  }



  updateStats() {
    const stats = this.leitner.getStats('mixed');
    const statsHtml = `
      <div class="stats-display">
        <div class="stat-item">
          <span class="stat-label">К изучению:</span>
          <span class="stat-value">${stats.due}</span>
        </div>
        <div class="boxes-stats">
          ${Object.entries(stats.boxes).map(([box, count]) => 
            `<div class="box-stat">
              <span class="box-name">${this.leitner.boxes[box].name}:</span>
              <span class="box-count">${count}</span>
            </div>`
          ).join('')}
        </div>
      </div>
    `;
    
    const statsContainer = document.getElementById('boxes-stats');
    if (statsContainer) {
      statsContainer.innerHTML = statsHtml.replace('<div class="stats-display">', '').replace('</div>', '');
    }
  }

  showNextCard() {
    this.clearUI();
    
    const dueCards = this.leitner.getDueCards('mixed');
    
    if (dueCards.length === 0) {
      this.elements.symbol.textContent = 'Нет карточек для изучения!';
      this.elements.feedback.innerHTML = '<p>Все карточки изучены. Возвращайтесь позже!</p>';
      return;
    }
    
    this.currentCard = dueCards[Math.floor(Math.random() * dueCards.length)];
    this.startTime = Date.now();
    
    this.questionMode = Math.random() < 0.5 ? 'symbol-to-reading' : 'reading-to-symbol';
    
    if (this.questionMode === 'symbol-to-reading') {
      this.elements.symbol.textContent = this.currentCard.symbol;
      this.generateReadingOptions();
    } else {
      this.elements.symbol.textContent = this.currentCard.reading;
      this.generateSymbolOptions();
    }
  }

  generateReadingOptions() {
    const correctReading = this.currentCard.reading;
    const allCards = Object.values(this.leitner.progress);
    
    const options = [correctReading];
    const usedReadings = new Set([correctReading]);
    
    while (options.length < 4 && usedReadings.size < allCards.length) {
      const randomCard = allCards[Math.floor(Math.random() * allCards.length)];
      if (!usedReadings.has(randomCard.reading)) {
        options.push(randomCard.reading);
        usedReadings.add(randomCard.reading);
      }
    }
    
    options.sort(() => Math.random() - 0.5);
    options.forEach(option => this.createOptionElement(option, correctReading));
  }

  generateSymbolOptions() {
    const correctSymbol = this.currentCard.symbol;
    const allCards = Object.values(this.leitner.progress);
    
    const options = [correctSymbol];
    const usedSymbols = new Set([correctSymbol]);
    
    while (options.length < 4 && usedSymbols.size < allCards.length) {
      const randomCard = allCards[Math.floor(Math.random() * allCards.length)];
      if (!usedSymbols.has(randomCard.symbol)) {
        options.push(randomCard.symbol);
        usedSymbols.add(randomCard.symbol);
      }
    }
    
    options.sort(() => Math.random() - 0.5);
    options.forEach(option => this.createOptionElement(option, correctSymbol));
  }

  createOptionElement(option, correctAnswer) {
    const element = document.createElement('div');
    element.className = 'option';
    element.textContent = option;
    element.addEventListener('click', () => this.checkAnswer(option, correctAnswer, element));
    this.elements.options.appendChild(element);
  }

  checkAnswer(selectedOption, correctAnswer, clickedElement) {
    const isCorrect = selectedOption === correctAnswer;
    const responseTime = Date.now() - this.startTime;
    
    clickedElement.innerHTML = isCorrect ? '✓ Правильно' : '✗ Неправильно';
    clickedElement.className = `option ${isCorrect ? 'correct' : 'incorrect'}`;
    
    if (!isCorrect) {
      const correctElement = Array.from(this.elements.options.children)
        .find(el => el.textContent === correctAnswer || el.innerHTML === correctAnswer);
      if (correctElement) {
        correctElement.className = 'option correct-answer';
        correctElement.innerHTML = `✓ ${correctAnswer}`;
      }
    }
    
    this.leitner.reviewCard(this.currentCard.id, isCorrect, responseTime);
    this.updateStats();
    
    setTimeout(() => this.showNextCard(), 1500);
  }

  clearUI() {
    this.elements.options.innerHTML = '';
    this.elements.feedback.innerHTML = '';
    this.elements.feedback.className = 'feedback';
  }
}