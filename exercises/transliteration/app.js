document.addEventListener('DOMContentLoaded', () => {
  initFontSize();
  
  const japaneseInput = document.getElementById('japanese-input');
  const pasteButton = document.getElementById('paste-button');

  const resultContainer = document.getElementById('transliteration-result');

  function autoResizeTextarea() {
    japaneseInput.style.height = 'auto';
    
    const computedStyle = window.getComputedStyle(japaneseInput);
    const fontSize = parseFloat(computedStyle.fontSize);
    const lineHeight = parseFloat(computedStyle.lineHeight) || fontSize * 1.4;
    const paddingTop = parseFloat(computedStyle.paddingTop);
    const paddingBottom = parseFloat(computedStyle.paddingBottom);
    const borderTop = parseFloat(computedStyle.borderTopWidth);
    const borderBottom = parseFloat(computedStyle.borderBottomWidth);
    
    const minHeight = fontSize * 1.5;
    const maxHeight = window.innerHeight * 0.6;
    
    const scrollHeight = japaneseInput.scrollHeight;
    const contentHeight = scrollHeight - paddingTop - paddingBottom;
    const newHeight = Math.max(minHeight, Math.min(maxHeight, scrollHeight));
    
    japaneseInput.style.height = newHeight + 'px';
    
    if (scrollHeight > maxHeight) {
      japaneseInput.style.overflowY = 'auto';
    } else {
      japaneseInput.style.overflowY = 'hidden';
    }
  }



  function processText() {
    const text = japaneseInput.value.trim();
    if (!text) {
      resultContainer.innerHTML = '';
      return;
    }

    const transliterations = transliterateText(text);
    displayResults(transliterations);
  }

  function displayResults(transliterations) {
    resultContainer.innerHTML = '';
    
    if (transliterations.length === 0) return;

    const charGrid = document.createElement('div');
    charGrid.className = 'char-grid';

    transliterations.forEach(item => {
      if (item.type === 'kanji' && item.hiraganaChars && item.hiraganaChars.length > 0) {
        // Создаем дерево для кандзи
        const kanjiTree = document.createElement('div');
        kanjiTree.className = 'kanji-tree';
        
        // Иконка кандзи сверху
        const kanjiIcon = document.createElement('div');
        kanjiIcon.className = 'kanji-icon';
        kanjiIcon.textContent = item.char;
        kanjiTree.appendChild(kanjiIcon);
        
        // Контейнер для слогов хираганы
        const hiraganaContainer = document.createElement('div');
        hiraganaContainer.className = 'hiragana-syllables';
        
        item.hiraganaChars.forEach(hiraganaChar => {
          const syllableItem = document.createElement('div');
          syllableItem.className = 'syllable-item';
          
          const syllableChar = document.createElement('div');
          syllableChar.className = 'syllable-char';
          syllableChar.textContent = hiraganaChar.char;
          
          const syllableReadings = document.createElement('div');
          syllableReadings.className = 'syllable-readings';
          
          const ruReading = document.createElement('div');
          ruReading.className = 'reading ru';
          ruReading.textContent = hiraganaChar.ru;
          
          const enReading = document.createElement('div');
          enReading.className = 'reading en';
          enReading.textContent = hiraganaChar.en;
          
          syllableReadings.appendChild(ruReading);
          syllableReadings.appendChild(enReading);
          
          syllableItem.appendChild(syllableChar);
          syllableItem.appendChild(syllableReadings);
          
          hiraganaContainer.appendChild(syllableItem);
        });
        
        kanjiTree.appendChild(hiraganaContainer);
        charGrid.appendChild(kanjiTree);
      } else {
        const charItem = document.createElement('div');
        charItem.className = `char-item ${item.type}`;
        
        const charElement = document.createElement('div');
        charElement.className = 'char';
        charElement.textContent = item.char;
        
        const readingsElement = document.createElement('div');
        readingsElement.className = 'readings';
        
        if (item.type === 'kanji' && item.jp && item.jp !== item.char) {
          const jpReading = document.createElement('div');
          jpReading.className = 'reading jp';
          jpReading.textContent = item.jp;
          readingsElement.appendChild(jpReading);
        }
        
        const ruReading = document.createElement('div');
        ruReading.className = 'reading ru';
        ruReading.textContent = item.ru;
        
        const enReading = document.createElement('div');
        enReading.className = 'reading en';
        enReading.textContent = item.en;
        
        readingsElement.appendChild(ruReading);
        readingsElement.appendChild(enReading);
        
        charItem.appendChild(charElement);
        charItem.appendChild(readingsElement);
        
        charGrid.appendChild(charItem);
      }
    });

    resultContainer.appendChild(charGrid);
  }

  async function pasteFromClipboard() {
    try {
      if (navigator.clipboard && navigator.clipboard.readText) {
        const text = await navigator.clipboard.readText();
        japaneseInput.value = text;
        autoResizeTextarea();
        processText();
      } else {
        alert('Функция вставки из буфера обмена не поддерживается в этом браузере');
      }
    } catch (err) {
      console.error('Ошибка при вставке из буфера обмена:', err);
      alert('Не удалось вставить текст из буфера обмена');
    }
  }



  japaneseInput.addEventListener('input', () => {
    autoResizeTextarea();
    processText();
  });
  
  japaneseInput.addEventListener('paste', () => {
    setTimeout(autoResizeTextarea, 0);
  });
  
  japaneseInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      setTimeout(autoResizeTextarea, 0);
    }
  });
  
  window.addEventListener('resize', autoResizeTextarea);
  
  const observer = new ResizeObserver(() => {
    autoResizeTextarea();
  });
  observer.observe(japaneseInput);
  
  if (pasteButton) {
    pasteButton.addEventListener('click', pasteFromClipboard);
  }

  // Инициализация
  autoResizeTextarea();
  japaneseInput.focus();
});

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