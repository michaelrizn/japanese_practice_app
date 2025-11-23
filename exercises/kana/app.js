document.addEventListener('DOMContentLoaded', () => {
  if (!Array.isArray(hiragana) || !Array.isArray(katakana)) return;

  const hiraToReContainer = document.getElementById('section-hira-to-re');
  const kataToReContainer = document.getElementById('section-kata-to-re');
  const reToHiraContainer = document.getElementById('section-re-to-hira');
  const reToKataContainer = document.getElementById('section-re-to-kata');

  createKanaGrid(hiraToReContainer, hiragana, item => item.symbol, (value, item) => {
    const v = normalize(value);
    return v === normalize(item.english) || v === normalize(item.russian);
  });

  createKanaGrid(kataToReContainer, katakana, item => item.symbol, (value, item) => {
    const v = normalize(value);
    return v === normalize(item.english) || v === normalize(item.russian);
  });

  createKanaGrid(reToHiraContainer, hiragana, item => {
    return createReadingsLabel(item);
  }, (value, item) => {
    const v = (value || '').trim();
    return v === item.symbol && isHiraganaChar(v);
  });

  createKanaGrid(reToKataContainer, katakana, item => {
    return createReadingsLabel(item);
  }, (value, item) => {
    const v = (value || '').trim();
    return v === item.symbol && isKatakanaChar(v);
  });

  const btnHiraToRe = document.getElementById('help-hira-to-re');
  const btnKataToRe = document.getElementById('help-kata-to-re');
  const btnReToHira = document.getElementById('help-re-to-hira');
  const btnReToKata = document.getElementById('help-re-to-kata');

  btnHiraToRe?.addEventListener('click', () => showHelpPopup(hiragana, 'Hiragana'));
  btnKataToRe?.addEventListener('click', () => showHelpPopup(katakana, 'Katakana'));
  btnReToHira?.addEventListener('click', () => showHelpPopup(hiragana, 'Hiragana'));
  btnReToKata?.addEventListener('click', () => showHelpPopup(katakana, 'Katakana'));
});

function createKanaGrid(container, data, getTitle, validate) {
  if (!container) return;
  container.innerHTML = '';
  data.forEach(item => {
    const cell = document.createElement('div');
    cell.className = 'char-item';

    const title = document.createElement('div');
    title.className = 'char';
    const label = getTitle(item);
    if (typeof label === 'string') {
      title.textContent = label;
    } else {
      title.appendChild(label);
    }

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'kana-input';
    input.autocomplete = 'off';
    input.spellcheck = false;

    input.addEventListener('input', () => {
      const val = String(input.value || '').trim();
      if (val.length === 0) {
        input.classList.remove('correct', 'incorrect');
        return;
      }
      const ok = validate(val, item);
      input.classList.remove('correct', 'incorrect');
      input.classList.add(ok ? 'correct' : 'incorrect');
    });

    cell.appendChild(title);
    cell.appendChild(input);
    container.appendChild(cell);
  });
}

function createReadingsLabel(item) {
  const wrap = document.createElement('div');
  wrap.className = 'readings';
  const ru = document.createElement('div');
  ru.className = 'reading ru';
  ru.textContent = item.russian;
  const en = document.createElement('div');
  en.className = 'reading en';
  en.textContent = item.english;
  wrap.appendChild(ru);
  wrap.appendChild(en);
  return wrap;
}

function normalize(str) {
  return String(str || '').trim().toLowerCase();
}

function isHiraganaChar(ch) {
  if (!ch || ch.length === 0) return false;
  const code = ch.codePointAt(0);
  return code >= 0x3040 && code <= 0x309F;
}

function isKatakanaChar(ch) {
  if (!ch || ch.length === 0) return false;
  const code = ch.codePointAt(0);
  return code >= 0x30A0 && code <= 0x30FF;
}

function showHelpPopup(data, title) {
  const overlay = document.createElement('div');
  overlay.className = 'message-overlay show';
  const content = document.createElement('div');
  content.className = 'message-content';
  const header = document.createElement('h3');
  header.textContent = title;
  const grid = document.createElement('div');
  grid.className = 'char-grid';
  data.forEach(item => {
    const cell = document.createElement('div');
    cell.className = 'char-item';
    const ch = document.createElement('div');
    ch.className = 'char';
    ch.textContent = item.symbol;
    const r = createReadingsLabel(item);
    cell.appendChild(ch);
    cell.appendChild(r);
    grid.appendChild(cell);
  });
  content.appendChild(header);
  content.appendChild(grid);
  overlay.appendChild(content);
  overlay.addEventListener('click', () => {
    overlay.remove();
  });
  content.addEventListener('click', () => {
    overlay.remove();
  });
  document.body.appendChild(overlay);
}
