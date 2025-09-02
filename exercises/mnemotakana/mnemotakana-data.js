const MNEMOTAKANA_DATA = {
    hiragana: [
        { char: 'あ', reading: 'a', mnemonic: 'Армада деревянных кораблей плывет по морю' },
        { char: 'い', reading: 'i', mnemonic: 'Игла с ниткой для шитья' },
        { char: 'う', reading: 'u', mnemonic: 'Улитка ползет по листу' },
        { char: 'え', reading: 'e', mnemonic: 'Енот показывает лапки' },
        { char: 'お', reading: 'o', mnemonic: 'Осьминог с щупальцами' },
        
        { char: 'か', reading: 'ka', mnemonic: 'Каратист наносит удар' },
        { char: 'き', reading: 'ki', mnemonic: 'Ключ открывает замок' },
        { char: 'く', reading: 'ku', mnemonic: 'Курица клюет зерно' },
        { char: 'け', reading: 'ke', mnemonic: 'Кенгуру прыгает высоко' },
        { char: 'こ', reading: 'ko', mnemonic: 'Кот свернулся калачиком' },
        
        { char: 'さ', reading: 'sa', mnemonic: 'Самурай держит меч' },
        { char: 'し', reading: 'shi', mnemonic: 'Шило острое и тонкое' },
        { char: 'す', reading: 'su', mnemonic: 'Суп варится в кастрюле' },
        { char: 'せ', reading: 'se', mnemonic: 'Сено сохнет на солнце' },
        { char: 'そ', reading: 'so', mnemonic: 'Сова сидит на ветке' },
        
        { char: 'た', reading: 'ta', mnemonic: 'Танцор кружится в танце' },
        { char: 'ち', reading: 'chi', mnemonic: 'Чирикает маленькая птичка' },
        { char: 'つ', reading: 'tsu', mnemonic: 'Цунами накрывает берег' },
        { char: 'て', reading: 'te', mnemonic: 'Телефон звонит громко' },
        { char: 'と', reading: 'to', mnemonic: 'Топор рубит дрова' },
        
        { char: 'な', reading: 'na', mnemonic: 'Нарцисс цветет весной' },
        { char: 'に', reading: 'ni', mnemonic: 'Нитки запутались в клубок' },
        { char: 'ぬ', reading: 'nu', mnemonic: 'Нудный дождь идет весь день' },
        { char: 'ね', reading: 'ne', mnemonic: 'Нежный котенок мурлычет' },
        { char: 'の', reading: 'no', mnemonic: 'Ноты играют мелодию' },
        
        { char: 'は', reading: 'ha', mnemonic: 'Хата стоит на холме' },
        { char: 'ひ', reading: 'hi', mnemonic: 'Хитрая лиса в лесу' },
        { char: 'ふ', reading: 'fu', mnemonic: 'Фуга звучит торжественно' },
        { char: 'へ', reading: 'he', mnemonic: 'Хек плавает в море' },
        { char: 'ほ', reading: 'ho', mnemonic: 'Хобот слона длинный' },
        
        { char: 'ま', reading: 'ma', mnemonic: 'Мама готовит обед' },
        { char: 'み', reading: 'mi', mnemonic: 'Мишка ест мед' },
        { char: 'む', reading: 'mu', mnemonic: 'Муха жужжит назойливо' },
        { char: 'め', reading: 'me', mnemonic: 'Мел пишет на доске' },
        { char: 'も', reading: 'mo', mnemonic: 'Можно поймать рыбу на крючок' },
        
        { char: 'や', reading: 'ya', mnemonic: 'Яблоко висит на ветке' },
        { char: 'ゆ', reading: 'yu', mnemonic: 'Юла крутится быстро' },
        { char: 'よ', reading: 'yo', mnemonic: 'Йогурт вкусный и полезный' },
        
        { char: 'ら', reading: 'ra', mnemonic: 'Радуга после дождя' },
        { char: 'り', reading: 'ri', mnemonic: 'Рис растет на поле' },
        { char: 'る', reading: 'ru', mnemonic: 'Рука держит карандаш' },
        { char: 'れ', reading: 're', mnemonic: 'Река течет к морю' },
        { char: 'ろ', reading: 'ro', mnemonic: 'Робот работает без устали' },
        
        { char: 'わ', reading: 'wa', mnemonic: 'Ваза стоит на столе' },
        { char: 'を', reading: 'wo', mnemonic: 'Волк воет на луну' },
        { char: 'ん', reading: 'n', mnemonic: 'Нос чувствует запахи' },
        
        { char: 'が', reading: 'ga', mnemonic: 'Гагара плавает в озере' },
        { char: 'ぎ', reading: 'gi', mnemonic: 'Гитара играет мелодию' },
        { char: 'ぐ', reading: 'gu', mnemonic: 'Гусь гогочет громко' },
        { char: 'げ', reading: 'ge', mnemonic: 'Гепард бежит быстро' },
        { char: 'ご', reading: 'go', mnemonic: 'Гора высокая и крутая' },
        
        { char: 'ざ', reading: 'za', mnemonic: 'Заяц прыгает по полю' },
        { char: 'じ', reading: 'ji', mnemonic: 'Жираф ест листья' },
        { char: 'ず', reading: 'zu', mnemonic: 'Зубы белые и крепкие' },
        { char: 'ぜ', reading: 'ze', mnemonic: 'Зебра полосатая красивая' },
        { char: 'ぞ', reading: 'zo', mnemonic: 'Зонт защищает от дождя' },
        
        { char: 'だ', reading: 'da', mnemonic: 'Дача стоит в саду' },
        { char: 'ぢ', reading: 'ji', mnemonic: 'Джинсы модные и удобные' },
        { char: 'づ', reading: 'zu', mnemonic: 'Дуб растет много лет' },
        { char: 'で', reading: 'de', mnemonic: 'Дерево зеленое летом' },
        { char: 'ど', reading: 'do', mnemonic: 'Дом построен из кирпича' },
        
        { char: 'ば', reading: 'ba', mnemonic: 'Бабочка летает в саду' },
        { char: 'び', reading: 'bi', mnemonic: 'Бизон сильный и мощный' },
        { char: 'ぶ', reading: 'bu', mnemonic: 'Бук растет в лесу' },
        { char: 'べ', reading: 'be', mnemonic: 'Белка грызет орехи' },
        { char: 'ぼ', reading: 'bo', mnemonic: 'Бобр строит плотину' },
        
        { char: 'ぱ', reading: 'pa', mnemonic: 'Папа читает газету' },
        { char: 'ぴ', reading: 'pi', mnemonic: 'Пингвин ходит важно' },
        { char: 'ぷ', reading: 'pu', mnemonic: 'Пуля летит быстро' },
        { char: 'ぺ', reading: 'pe', mnemonic: 'Перо легкое как пух' },
        { char: 'ぽ', reading: 'po', mnemonic: 'Пони маленькая лошадка' }
    ],
    
    katakana: [
        { char: 'ア', reading: 'a', mnemonic: 'Антенна ловит сигнал' },
        { char: 'イ', reading: 'i', mnemonic: 'Игрек - математический символ' },
        { char: 'ウ', reading: 'u', mnemonic: 'Утка плавает в пруду' },
        { char: 'エ', reading: 'e', mnemonic: 'Эскалатор поднимается вверх' },
        { char: 'オ', reading: 'o', mnemonic: 'Окно открыто настежь' },
        
        { char: 'カ', reading: 'ka', mnemonic: 'Карандаш острый и длинный' },
        { char: 'キ', reading: 'ki', mnemonic: 'Кинжал блестит на солнце' },
        { char: 'ク', reading: 'ku', mnemonic: 'Крест стоит на холме' },
        { char: 'ケ', reading: 'ke', mnemonic: 'Кепка защищает от солнца' },
        { char: 'コ', reading: 'ko', mnemonic: 'Коробка квадратная и прочная' },
        
        { char: 'サ', reading: 'sa', mnemonic: 'Сабля изогнута красиво' },
        { char: 'シ', reading: 'shi', mnemonic: 'Шипы острые и колючие' },
        { char: 'ス', reading: 'su', mnemonic: 'Стрела летит точно в цель' },
        { char: 'セ', reading: 'se', mnemonic: 'Сеть ловит рыбу' },
        { char: 'ソ', reading: 'so', mnemonic: 'Сосна зеленая круглый год' },
        
        { char: 'タ', reading: 'ta', mnemonic: 'Табурет стоит у стола' },
        { char: 'チ', reading: 'chi', mnemonic: 'Чемодан полон вещей' },
        { char: 'ツ', reading: 'tsu', mnemonic: 'Цыпленок желтый и пушистый' },
        { char: 'テ', reading: 'te', mnemonic: 'Телевизор показывает фильм' },
        { char: 'ト', reading: 'to', mnemonic: 'Трубка курительная старинная' },
        
        { char: 'ナ', reading: 'na', mnemonic: 'Нож режет хлеб' },
        { char: 'ニ', reading: 'ni', mnemonic: 'Нитка тонкая и прочная' },
        { char: 'ヌ', reading: 'nu', mnemonic: 'Нудист загорает на пляже' },
        { char: 'ネ', reading: 'ne', mnemonic: 'Нектар сладкий как мед' },
        { char: 'ノ', reading: 'no', mnemonic: 'Нота до звучит низко' },
        
        { char: 'ハ', reading: 'ha', mnemonic: 'Хата крыта соломой' },
        { char: 'ヒ', reading: 'hi', mnemonic: 'Хижина стоит в лесу' },
        { char: 'フ', reading: 'fu', mnemonic: 'Флаг развевается на ветру' },
        { char: 'ヘ', reading: 'he', mnemonic: 'Хек вкусная морская рыба' },
        { char: 'ホ', reading: 'ho', mnemonic: 'Хоккей играют на льду' },
        
        { char: 'マ', reading: 'ma', mnemonic: 'Мачта корабля высокая' },
        { char: 'ミ', reading: 'mi', mnemonic: 'Миска полна каши' },
        { char: 'ム', reading: 'mu', mnemonic: 'Мул везет тяжелый груз' },
        { char: 'メ', reading: 'me', mnemonic: 'Метка стоит на карте' },
        { char: 'モ', reading: 'mo', mnemonic: 'Молоток забивает гвоздь' },
        
        { char: 'ヤ', reading: 'ya', mnemonic: 'Якорь держит корабль' },
        { char: 'ユ', reading: 'yu', mnemonic: 'Юбка красивая и длинная' },
        { char: 'ヨ', reading: 'yo', mnemonic: 'Йод лечит раны' },
        
        { char: 'ラ', reading: 'ra', mnemonic: 'Ракета летит в космос' },
        { char: 'リ', reading: 'ri', mnemonic: 'Рис белый и рассыпчатый' },
        { char: 'ル', reading: 'ru', mnemonic: 'Руль поворачивает машину' },
        { char: 'レ', reading: 're', mnemonic: 'Рельсы ведут поезд' },
        { char: 'ロ', reading: 'ro', mnemonic: 'Рот открыт широко' },
        
        { char: 'ワ', reading: 'wa', mnemonic: 'Ванна полна теплой воды' },
        { char: 'ヲ', reading: 'wo', mnemonic: 'Волна накрывает берег' },
        { char: 'ン', reading: 'n', mnemonic: 'Нос длинный как у Буратино' },
        
        { char: 'ガ', reading: 'ga', mnemonic: 'Газ горит синим пламенем' },
        { char: 'ギ', reading: 'gi', mnemonic: 'Гиря тяжелая железная' },
        { char: 'グ', reading: 'gu', mnemonic: 'Гусеница ползет по листу' },
        { char: 'ゲ', reading: 'ge', mnemonic: 'Гель прозрачный и липкий' },
        { char: 'ゴ', reading: 'go', mnemonic: 'Гол забит точно в угол' },
        
        { char: 'ザ', reading: 'za', mnemonic: 'Замок стоит на горе' },
        { char: 'ジ', reading: 'ji', mnemonic: 'Жук ползет по дереву' },
        { char: 'ズ', reading: 'zu', mnemonic: 'Зуб болит и ноет' },
        { char: 'ゼ', reading: 'ze', mnemonic: 'Зеркало отражает свет' },
        { char: 'ゾ', reading: 'zo', mnemonic: 'Зоопарк полон животных' },
        
        { char: 'ダ', reading: 'da', mnemonic: 'Дача построена из дерева' },
        { char: 'ヂ', reading: 'ji', mnemonic: 'Джем сладкий и густой' },
        { char: 'ヅ', reading: 'zu', mnemonic: 'Дуэт поет красиво' },
        { char: 'デ', reading: 'de', mnemonic: 'Дерево растет медленно' },
        { char: 'ド', reading: 'do', mnemonic: 'Дом большой и уютный' },
        
        { char: 'バ', reading: 'ba', mnemonic: 'Банан желтый и сладкий' },
        { char: 'ビ', reading: 'bi', mnemonic: 'Бинт белый и чистый' },
        { char: 'ブ', reading: 'bu', mnemonic: 'Буква написана красиво' },
        { char: 'ベ', reading: 'be', mnemonic: 'Берег омывает море' },
        { char: 'ボ', reading: 'bo', mnemonic: 'Бочка полна вина' },
        
        { char: 'パ', reading: 'pa', mnemonic: 'Парус надут ветром' },
        { char: 'ピ', reading: 'pi', mnemonic: 'Пила режет доску' },
        { char: 'プ', reading: 'pu', mnemonic: 'Пуговица блестит на солнце' },
        { char: 'ペ', reading: 'pe', mnemonic: 'Перчатка теплая и мягкая' },
        { char: 'ポ', reading: 'po', mnemonic: 'Почта доставляет письма' }
    ]
};

const getAllCharacters = () => {
    return [...MNEMOTAKANA_DATA.hiragana, ...MNEMOTAKANA_DATA.katakana];
};

const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};