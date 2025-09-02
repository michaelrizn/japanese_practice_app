document.addEventListener('DOMContentLoaded', function() {
    mnemotakanaManager = new MnemotakanaManager();
    
    const pwaupdater = new PWAUpdater();
    pwaupdater.init();
    
    console.log('Mnemotakana упражнение инициализировано');
    console.log(`Загружено ${getAllCharacters().length} символов`);
});

window.addEventListener('beforeunload', function() {
    console.log('Mnemotakana упражнение завершено');
});