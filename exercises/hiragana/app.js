document.addEventListener('DOMContentLoaded', () => {
  if (typeof hiragana !== 'undefined' && hiragana.length) {
    new ExerciseManager(hiragana);
  } else {
    console.error('Массив hiragana не найден');
  }
});
