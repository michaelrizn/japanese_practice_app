class MnemotakanaManager {
    constructor() {
        this.characters = [];
        this.currentIndex = 0;
        this.isShowingMnemonic = false;
        this.isShowingReading = false;
        this.init();
    }

    init() {
        this.characters = shuffleArray(getAllCharacters());
        this.currentIndex = 0;
        this.setupEventListeners();
        this.updateDisplay();
    }

    setupEventListeners() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const showMnemonicBtn = document.getElementById('show-mnemonic-btn');
        const showReadingBtn = document.getElementById('show-reading-btn');
        const shuffleBtn = document.getElementById('shuffle-btn');
        const resetBtn = document.getElementById('reset-btn');

        prevBtn.addEventListener('click', () => this.previousCard());
        nextBtn.addEventListener('click', () => this.nextCard());
        showMnemonicBtn.addEventListener('click', () => this.toggleMnemonic());
        showReadingBtn.addEventListener('click', () => this.toggleReading());
        shuffleBtn.addEventListener('click', () => this.shuffleCards());
        resetBtn.addEventListener('click', () => this.resetCards());

        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    this.previousCard();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.nextCard();
                    break;
                case ' ':
                    e.preventDefault();
                    this.toggleMnemonic();
                    break;
                case 'Enter':
                    e.preventDefault();
                    this.toggleReading();
                    break;
                case 'r':
                case 'R':
                    e.preventDefault();
                    this.shuffleCards();
                    break;
            }
        });
    }

    updateDisplay() {
        const currentChar = this.characters[this.currentIndex];
        
        document.getElementById('character-display').textContent = currentChar.char;
        document.getElementById('progress-text').textContent = `${this.currentIndex + 1} / ${this.characters.length}`;
        
        const progressPercent = ((this.currentIndex + 1) / this.characters.length) * 100;
        document.getElementById('progress-fill').style.width = `${progressPercent}%`;

        document.getElementById('prev-btn').disabled = this.currentIndex === 0;
        document.getElementById('next-btn').disabled = this.currentIndex === this.characters.length - 1;

        this.hideAllHints();
        this.updateButtonStates();
    }

    hideAllHints() {
        document.getElementById('mnemonic-display').style.display = 'none';
        document.getElementById('reading-display').style.display = 'none';
        this.isShowingMnemonic = false;
        this.isShowingReading = false;
    }

    updateButtonStates() {
        const showMnemonicBtn = document.getElementById('show-mnemonic-btn');
        const showReadingBtn = document.getElementById('show-reading-btn');
        
        showMnemonicBtn.textContent = this.isShowingMnemonic ? 'Скрыть подсказку' : 'Показать подсказку';
        showReadingBtn.textContent = this.isShowingReading ? 'Скрыть чтение' : 'Показать чтение';
        
        showMnemonicBtn.classList.toggle('active', this.isShowingMnemonic);
        showReadingBtn.classList.toggle('active', this.isShowingReading);
    }

    toggleMnemonic() {
        const currentChar = this.characters[this.currentIndex];
        const mnemonicDisplay = document.getElementById('mnemonic-display');
        const mnemonicText = document.getElementById('mnemonic-text');
        
        this.isShowingMnemonic = !this.isShowingMnemonic;
        
        if (this.isShowingMnemonic) {
            mnemonicText.textContent = currentChar.mnemonic;
            mnemonicDisplay.style.display = 'block';
        } else {
            mnemonicDisplay.style.display = 'none';
        }
        
        this.updateButtonStates();
    }

    toggleReading() {
        const currentChar = this.characters[this.currentIndex];
        const readingDisplay = document.getElementById('reading-display');
        const readingText = document.getElementById('reading-text');
        
        this.isShowingReading = !this.isShowingReading;
        
        if (this.isShowingReading) {
            readingText.textContent = currentChar.reading;
            readingDisplay.style.display = 'block';
        } else {
            readingDisplay.style.display = 'none';
        }
        
        this.updateButtonStates();
    }

    previousCard() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateDisplay();
        }
    }

    nextCard() {
        if (this.currentIndex < this.characters.length - 1) {
            this.currentIndex++;
            this.updateDisplay();
        } else {
            this.showCompletionMessage();
        }
    }

    shuffleCards() {
        this.characters = shuffleArray(getAllCharacters());
        this.currentIndex = 0;
        this.updateDisplay();
        this.showMessage('Карточки перемешаны!', 'success');
    }

    resetCards() {
        this.currentIndex = 0;
        this.updateDisplay();
        this.showMessage('Сброшено к началу', 'info');
    }

    showCompletionMessage() {
        const message = `
            <div class="completion-message">
                <h3>🎉 Поздравляем!</h3>
                <p>Вы просмотрели все ${this.characters.length} карточек!</p>
                <button class="btn btn-accent" onclick="mnemotakanaManager.shuffleCards()">🔀 Перемешать и начать заново</button>
            </div>
        `;
        this.showMessage(message, 'success', 5000);
    }

    showMessage(message, type = 'info', duration = 3000) {
        const existingMessage = document.querySelector('.message-overlay');
        if (existingMessage) {
            existingMessage.remove();
        }

        const messageDiv = document.createElement('div');
        messageDiv.className = `message-overlay message-${type}`;
        messageDiv.innerHTML = `
            <div class="message-content">
                ${message}
            </div>
        `;

        document.body.appendChild(messageDiv);

        setTimeout(() => {
            messageDiv.classList.add('show');
        }, 10);

        if (duration > 0) {
            setTimeout(() => {
                messageDiv.classList.remove('show');
                setTimeout(() => {
                    if (messageDiv.parentNode) {
                        messageDiv.parentNode.removeChild(messageDiv);
                    }
                }, 300);
            }, duration);
        }

        messageDiv.addEventListener('click', (e) => {
            if (e.target === messageDiv) {
                messageDiv.classList.remove('show');
                setTimeout(() => {
                    if (messageDiv.parentNode) {
                        messageDiv.parentNode.removeChild(messageDiv);
                    }
                }, 300);
            }
        });
    }

    getCurrentCharacter() {
        return this.characters[this.currentIndex];
    }

    getProgress() {
        return {
            current: this.currentIndex + 1,
            total: this.characters.length,
            percentage: ((this.currentIndex + 1) / this.characters.length) * 100
        };
    }
}

let mnemotakanaManager;