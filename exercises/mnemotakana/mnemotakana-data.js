const MNEMOTAKANA_DATA = {
    hiragana: [
        { char: 'あ', reading: 'a', mnemonic: 'Арка с палкой сбоку' },
        { char: 'い', reading: 'i', mnemonic: 'Иглы две рядом' },
        { char: 'う', reading: 'u', mnemonic: 'Удочка с крючком' },
        { char: 'え', reading: 'e', mnemonic: 'Этажерка с полочкой' },
        { char: 'お', reading: 'o', mnemonic: 'Обруч с узелком' },
        
        { char: 'か', reading: 'ka', mnemonic: 'Канделябр с крючком' },
        { char: 'き', reading: 'ki', mnemonic: 'Кинжал с перекладинами' },
        { char: 'く', reading: 'ku', mnemonic: 'Кукри-нож углом' },
        { char: 'け', reading: 'ke', mnemonic: 'Кепка с козырьком и ножкой' },
        { char: 'こ', reading: 'ko', mnemonic: 'Кольцо открытое слева' },
        
        { char: 'さ', reading: 'sa', mnemonic: 'Сани с хвостиком' },
        { char: 'し', reading: 'shi', mnemonic: 'Шило изогнуто вниз' },
        { char: 'す', reading: 'su', mnemonic: 'Суши с палочкой сбоку' },
        { char: 'せ', reading: 'se', mnemonic: 'Сетка с перекладиной' },
        { char: 'そ', reading: 'so', mnemonic: 'Сова с закрученным хвостом' },
        
        { char: 'た', reading: 'ta', mnemonic: 'Табурет с перекладиной' },
        { char: 'ち', reading: 'chi', mnemonic: 'Число пять с усиком' },
        { char: 'つ', reading: 'tsu', mnemonic: 'Цунами волной вверх' },
        { char: 'て', reading: 'te', mnemonic: 'Тележка с ручкой' },
        { char: 'と', reading: 'to', mnemonic: 'Топор с острым крюком' },
        
        { char: 'な', reading: 'na', mnemonic: 'Наклон с узелком' },
        { char: 'に', reading: 'ni', mnemonic: 'Нитка на игле' },
        { char: 'ぬ', reading: 'nu', mnemonic: 'Нуга с хвостиком' },
        { char: 'ね', reading: 'ne', mnemonic: 'Нейлоновый узел на веревке' },
        { char: 'の', reading: 'no', mnemonic: 'Носок-кольцо' },
        
        { char: 'は', reading: 'ha', mnemonic: 'Халат на перекладине' },
        { char: 'ひ', reading: 'hi', mnemonic: 'Хитрый крючок' },
        { char: 'ふ', reading: 'fu', mnemonic: 'Фуникулер с двумя фонарями' },
        { char: 'へ', reading: 'he', mnemonic: 'Хек-галочка вверх' },
        { char: 'ほ', reading: 'ho', mnemonic: 'Холм с крестом и кружком' },
        
        { char: 'ま', reading: 'ma', mnemonic: 'Мачта с петлей' },
        { char: 'み', reading: 'mi', mnemonic: 'Мидия с двумя хвостами' },
        { char: 'む', reading: 'mu', mnemonic: 'Муфта с узелком' },
        { char: 'め', reading: 'me', mnemonic: 'Мешок с завязкой' },
        { char: 'も', reading: 'mo', mnemonic: 'Мостик с крючком' },
        
        { char: 'や', reading: 'ya', mnemonic: 'Якорь с двумя зубьями' },
        { char: 'ゆ', reading: 'yu', mnemonic: 'Юла с хвостиком' },
        { char: 'よ', reading: 'yo', mnemonic: 'Йога-поза из трех черточек' },
        
        { char: 'ら', reading: 'ra', mnemonic: 'Ракушка с хвостиком' },
        { char: 'り', reading: 'ri', mnemonic: 'Речки две рядом' },
        { char: 'る', reading: 'ru', mnemonic: 'Рука с кольцом' },
        { char: 'れ', reading: 're', mnemonic: 'Рельс с петлей' },
        { char: 'ろ', reading: 'ro', mnemonic: 'Рот-кольцо' },
        
        { char: 'わ', reading: 'wa', mnemonic: 'Ваза с ручкой' },
        { char: 'を', reading: 'wo', mnemonic: 'Воинское знамя с узелком' },
        { char: 'ん', reading: 'n', mnemonic: 'Нос согнут крючком' },
        
        { char: 'が', reading: 'ga', mnemonic: 'Гаечный ключ с точкой' },
        { char: 'ぎ', reading: 'gi', mnemonic: 'Гиря с перекладинами' },
        { char: 'ぐ', reading: 'gu', mnemonic: 'Гусь-уголок с точкой' },
        { char: 'げ', reading: 'ge', mnemonic: 'Герб с перекладиной и точкой' },
        { char: 'ご', reading: 'go', mnemonic: 'Гонг-кольцо с точкой' },
        
        { char: 'ざ', reading: 'za', mnemonic: 'Заяц с точкой на ухе' },
        { char: 'じ', reading: 'ji', mnemonic: 'Джин с точкой над шапкой' },
        { char: 'ず', reading: 'zu', mnemonic: 'Зубец с точкой' },
        { char: 'ぜ', reading: 'ze', mnemonic: 'Зебра с полоской и точкой' },
        { char: 'ぞ', reading: 'zo', mnemonic: 'Зонт с точкой' },
        
        { char: 'だ', reading: 'da', mnemonic: 'Дверца-табурет с точкой' },
        { char: 'ぢ', reading: 'ji', mnemonic: 'Джинсы с точкой' },
        { char: 'づ', reading: 'zu', mnemonic: 'Зуб с волной и точкой' },
        { char: 'で', reading: 'de', mnemonic: 'Деревянная полка с точкой' },
        { char: 'ど', reading: 'do', mnemonic: 'Домик с точкой' },
        
        { char: 'ば', reading: 'ba', mnemonic: 'Барабан с точкой' },
        { char: 'び', reading: 'bi', mnemonic: 'Бинокль с точкой' },
        { char: 'ぶ', reading: 'bu', mnemonic: 'Бутыль с точкой' },
        { char: 'べ', reading: 'be', mnemonic: 'Берет с точкой' },
        { char: 'ぼ', reading: 'bo', mnemonic: 'Бублик с точкой' },
        
        { char: 'ぱ', reading: 'pa', mnemonic: 'Парус с кружочком' },
        { char: 'ぴ', reading: 'pi', mnemonic: 'Пика с кружочком' },
        { char: 'ぷ', reading: 'pu', mnemonic: 'Пуговица с кружочком' },
        { char: 'ぺ', reading: 'pe', mnemonic: 'Перо с кружочком' },
        { char: 'ぽ', reading: 'po', mnemonic: 'Пончик с кружочком' }
    ],
    
    katakana: [
        { char: 'ア', reading: 'a', mnemonic: 'Антенна на стойке' },
        { char: 'イ', reading: 'i', mnemonic: 'Иголка-уголок' },
        { char: 'ウ', reading: 'u', mnemonic: 'Угол с крюком сверху' },
        { char: 'エ', reading: 'e', mnemonic: 'Этажи три и стойка слева' },
        { char: 'オ', reading: 'o', mnemonic: 'Обод с палочкой сверху' },
        
        { char: 'カ', reading: 'ka', mnemonic: 'Карниз с клювом' },
        { char: 'キ', reading: 'ki', mnemonic: 'Кисть с двумя перекладинами' },
        { char: 'ク', reading: 'ku', mnemonic: 'Кунай углом' },
        { char: 'ケ', reading: 'ke', mnemonic: 'Кегля с полкой' },
        { char: 'コ', reading: 'ko', mnemonic: 'Коробка без левой стенки' },
        
        { char: 'サ', reading: 'sa', mnemonic: 'Сабля с полкой' },
        { char: 'シ', reading: 'shi', mnemonic: 'Шипы три справа' },
        { char: 'ス', reading: 'su', mnemonic: 'Сушилка в виде зигзага' },
        { char: 'セ', reading: 'se', mnemonic: 'Сетка из двух палок' },
        { char: 'ソ', reading: 'so', mnemonic: 'Соха из двух черт' },
        
        { char: 'タ', reading: 'ta', mnemonic: 'Табурет из углов' },
        { char: 'チ', reading: 'chi', mnemonic: 'Чип угловатый' },
        { char: 'ツ', reading: 'tsu', mnemonic: 'Цуцик — две точки сверху' },
        { char: 'テ', reading: 'te', mnemonic: 'Телескоп с перекладиной' },
        { char: 'ト', reading: 'to', mnemonic: 'Тотем без крыши' },
        
        { char: 'ナ', reading: 'na', mnemonic: 'Наклон и перекладина' },
        { char: 'ニ', reading: 'ni', mnemonic: 'Низ две полоски' },
        { char: 'ヌ', reading: 'nu', mnemonic: 'Нугет с хвостиком' },
        { char: 'ネ', reading: 'ne', mnemonic: 'Нектар с крючком' },
        { char: 'ノ', reading: 'no', mnemonic: 'Ножка одна' },
        
        { char: 'ハ', reading: 'ha', mnemonic: 'Хамак галочкой' },
        { char: 'ヒ', reading: 'hi', mnemonic: 'Хитрый крюк' },
        { char: 'フ', reading: 'fu', mnemonic: 'Футляр-скоба' },
        { char: 'ヘ', reading: 'he', mnemonic: 'Хелм — галка' },
        { char: 'ホ', reading: 'ho', mnemonic: 'Холм с крестом' },
        
        { char: 'マ', reading: 'ma', mnemonic: 'Мачта с крышей' },
        { char: 'ミ', reading: 'mi', mnemonic: 'Микс из трех линий' },
        { char: 'ム', reading: 'mu', mnemonic: 'Мугар — угол с хвостом' },
        { char: 'メ', reading: 'me', mnemonic: 'Метка из двух линий' },
        { char: 'モ', reading: 'mo', mnemonic: 'Мост с балкой' },
        
        { char: 'ヤ', reading: 'ya', mnemonic: 'Ятаган с полкой' },
        { char: 'ユ', reading: 'yu', mnemonic: 'Юла с вилкой' },
        { char: 'ヨ', reading: 'yo', mnemonic: 'Йогурт — три полки' },
        
        { char: 'ラ', reading: 'ra', mnemonic: 'Ракета галочкой' },
        { char: 'リ', reading: 'ri', mnemonic: 'Рельсы две' },
        { char: 'ル', reading: 'ru', mnemonic: 'Рубка с углом' },
        { char: 'レ', reading: 're', mnemonic: 'Рейка наклонная' },
        { char: 'ロ', reading: 'ro', mnemonic: 'Рот — прямоугольник' },
        
        { char: 'ワ', reading: 'wa', mnemonic: 'Варежка-галочка' },
        { char: 'ヲ', reading: 'wo', mnemonic: 'Воля — прямоугольник с усом' },
        { char: 'ン', reading: 'n', mnemonic: 'Носик крючком' },
        
        { char: 'ガ', reading: 'ga', mnemonic: 'Галка с точкой' },
        { char: 'ギ', reading: 'gi', mnemonic: 'Гиря с точкой' },
        { char: 'グ', reading: 'gu', mnemonic: 'Гусь-угол с точкой' },
        { char: 'ゲ', reading: 'ge', mnemonic: 'Герб с точкой' },
        { char: 'ゴ', reading: 'go', mnemonic: 'Голик — коробка с точкой' },
        
        { char: 'ザ', reading: 'za', mnemonic: 'Замок стоит на горе' },
        { char: 'ジ', reading: 'ji', mnemonic: 'Джин с точкой' },
        { char: 'ズ', reading: 'zu', mnemonic: 'Зуб болит и ноет' },
        { char: 'ゼ', reading: 'ze', mnemonic: 'Зеркало отражает свет' },
        { char: 'ゾ', reading: 'zo', mnemonic: 'Зоопарк полон животных' },
        
        { char: 'ダ', reading: 'da', mnemonic: 'Дача стоит в саду' },
        { char: 'ヂ', reading: 'ji', mnemonic: 'Джинсы модные и удобные' },
        { char: 'ヅ', reading: 'zu', mnemonic: 'Зуб с точками сверху' },
        { char: 'デ', reading: 'de', mnemonic: 'Дерево зеленое летом' },
        { char: 'ド', reading: 'do', mnemonic: 'Дом построен из кирпича' },
        
        { char: 'バ', reading: 'ba', mnemonic: 'Бабочка летает в саду' },
        { char: 'ビ', reading: 'bi', mnemonic: 'Бизон сильный и мощный' },
        { char: 'ブ', reading: 'bu', mnemonic: 'Бук растет в лесу' },
        { char: 'ベ', reading: 'be', mnemonic: 'Белка грызет орехи' },
        { char: 'ボ', reading: 'bo', mnemonic: 'Бобр строит плотину' },
        
        { char: 'パ', reading: 'pa', mnemonic: 'Парус с кружочком' },
        { char: 'ピ', reading: 'pi', mnemonic: 'Пика с кружочком' },
        { char: 'プ', reading: 'pu', mnemonic: 'Пуговица с кружочком' },
        { char: 'ペ', reading: 'pe', mnemonic: 'Перо с кружочком' },
        { char: 'ポ', reading: 'po', mnemonic: 'Пончик с кружочком' }
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