document.addEventListener('DOMContentLoaded', () => {
  initFontSize();
  
  const japaneseInput = document.getElementById('japanese-input');
  const pasteButton = document.getElementById('paste-button');
  const clearButton = document.getElementById('clear-button');

  const resultContainer = document.getElementById('transliteration-result');

  function autoResizeTextarea() {
    // Получаем базовую высоту в зависимости от размера экрана (такую же как у кнопок)
    function getBaseHeight() {
      const isMobile = window.innerWidth <= 600;
      if (isMobile) {
        const vw = window.innerWidth / 100;
        return Math.max(35, Math.min(8 * vw, 45));
      } else {
        const vw = window.innerWidth / 100;
        return Math.max(35.2, Math.min(4.34 * vw, 40.64));
      }
    }
    
    const baseHeight = getBaseHeight();
    
    // Временно сбрасываем высоту для правильного расчета scrollHeight
    japaneseInput.style.height = baseHeight + 'px';
    
    // Если содержимое больше базовой высоты, растягиваем
    if (japaneseInput.scrollHeight > baseHeight) {
      japaneseInput.style.height = japaneseInput.scrollHeight + 'px';
    } else {
      japaneseInput.style.height = baseHeight + 'px';
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
  
  if (pasteButton) {
    pasteButton.addEventListener('click', () => {
      pasteFromClipboard();
      // Небольшая задержка для обработки вставленного текста
      setTimeout(autoResizeTextarea, 10);
    });
  }
  
  if (clearButton) {
    clearButton.addEventListener('click', () => {
      japaneseInput.value = '';
      autoResizeTextarea();
      processText();
      japaneseInput.focus();
    });
  }

  // Обработчик изменения размера окна
  window.addEventListener('resize', autoResizeTextarea);
  
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
  
  if (!decreaseBtn || !increaseBtn) {
    console.warn('Font size buttons not found');
    return;
  }
  
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