class LeitnerSystem {
  constructor() {
    this.boxes = {
      0: { interval: 0, name: 'Новые' },
      1: { interval: 1, name: '1 день' },
      2: { interval: 3, name: '3 дня' },
      3: { interval: 7, name: '1 неделя' },
      4: { interval: 30, name: '1 месяц' }
    };
    this.storageKey = 'leitner-hiragana-katakana';
    this.loadProgress();
  }

  loadProgress() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      this.progress = JSON.parse(saved);
    } else {
      this.initializeProgress();
    }
  }

  saveProgress() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.progress));
  }

  initializeProgress() {
    this.progress = {};
    hiraganaData.forEach((item, index) => {
      this.progress[`hiragana-${index}`] = {
        id: `hiragana-${index}`,
        symbol: item.symbol,
        reading: item.reading,
        box: 0,
        lastReview: null,
        nextReview: Date.now(),
        correctStreak: 0,
        totalReviews: 0,
        correctReviews: 0,
        type: 'hiragana'
      };
      this.progress[`katakana-${index}`] = {
        id: `katakana-${index}`,
        symbol: item.katakana,
        reading: item.reading,
        box: 0,
        lastReview: null,
        nextReview: Date.now(),
        correctStreak: 0,
        totalReviews: 0,
        correctReviews: 0,
        type: 'katakana'
      };
    });
    this.saveProgress();
  }

  getDueCards(type = 'mixed') {
    const now = Date.now();
    const allCards = Object.values(this.progress);
    
    let filteredCards = allCards;
    if (type === 'hiragana') {
      filteredCards = allCards.filter(card => card.type === 'hiragana');
    } else if (type === 'katakana') {
      filteredCards = allCards.filter(card => card.type === 'katakana');
    }
    
    return filteredCards.filter(card => card.nextReview <= now);
  }

  getCardsInBox(boxNumber, type = 'mixed') {
    const allCards = Object.values(this.progress);
    
    let filteredCards = allCards;
    if (type === 'hiragana') {
      filteredCards = allCards.filter(card => card.type === 'hiragana');
    } else if (type === 'katakana') {
      filteredCards = allCards.filter(card => card.type === 'katakana');
    }
    
    return filteredCards.filter(card => card.box === boxNumber);
  }

  reviewCard(cardId, correct, responseTime = 0) {
    const card = this.progress[cardId];
    if (!card) return;

    card.totalReviews++;
    card.lastReview = Date.now();
    
    if (correct) {
      card.correctReviews++;
      card.correctStreak++;
      
      if (card.box < 4) {
        card.box++;
      }
      
      const baseInterval = this.boxes[card.box].interval;
      let adjustedInterval = baseInterval;
      
      if (responseTime > 0) {
        const speedFactor = Math.max(0.5, Math.min(2, 3000 / responseTime));
        adjustedInterval = Math.floor(baseInterval * speedFactor);
      }
      
      card.nextReview = Date.now() + (adjustedInterval * 24 * 60 * 60 * 1000);
    } else {
      card.correctStreak = 0;
      card.box = 0;
      card.nextReview = Date.now();
    }
    
    this.saveProgress();
  }

  moveCardToBox(cardId, boxNumber) {
    const card = this.progress[cardId];
    if (!card || boxNumber < 0 || boxNumber > 4) return;
    
    card.box = boxNumber;
    const interval = this.boxes[boxNumber].interval;
    card.nextReview = Date.now() + (interval * 24 * 60 * 60 * 1000);
    
    this.saveProgress();
  }

  getStats(type = 'mixed') {
    const allCards = Object.values(this.progress);
    
    let filteredCards = allCards;
    if (type === 'hiragana') {
      filteredCards = allCards.filter(card => card.type === 'hiragana');
    } else if (type === 'katakana') {
      filteredCards = allCards.filter(card => card.type === 'katakana');
    }
    
    const stats = {
      total: filteredCards.length,
      due: this.getDueCards(type).length,
      boxes: {}
    };
    
    for (let i = 0; i <= 4; i++) {
      stats.boxes[i] = this.getCardsInBox(i, type).length;
    }
    
    return stats;
  }

  resetProgress() {
    this.initializeProgress();
  }
}