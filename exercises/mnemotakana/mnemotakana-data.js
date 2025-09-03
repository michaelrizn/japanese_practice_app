const MNEMOTAKANA_DATA = {
    hiragana: [
        { char: 'あ', reading: 'a', mnemonic: 'Антенна на крыше' },
        { char: 'い', reading: 'i', mnemonic: 'Игла вертикальная' },
        { char: 'う', reading: 'u', mnemonic: 'Улитка с завитком' },
        { char: 'え', reading: 'e', mnemonic: 'Этажерка трехэтажная' },
        { char: 'お', reading: 'o', mnemonic: 'Обруч с хвостиком' },
        
        { char: 'か', reading: 'ka', mnemonic: 'Каблук с ремешком' },
        { char: 'き', reading: 'ki', mnemonic: 'Ключ с бородкой' },
        { char: 'く', reading: 'ku', mnemonic: 'Клюв птицы' },
        { char: 'け', reading: 'ke', mnemonic: 'Кепка набок' },
        { char: 'こ', reading: 'ko', mnemonic: 'Коробка без крышки' },
        
        { char: 'さ', reading: 'sa', mnemonic: 'Сабля с одной заточкой' },
        { char: 'し', reading: 'shi', mnemonic: 'Шило кривое' },
        { char: 'す', reading: 'su', mnemonic: 'Суслик сидит' },
        { char: 'せ', reading: 'se', mnemonic: 'Сетка с веревкой' },
        { char: 'そ', reading: 'so', mnemonic: 'Сова с хвостом' },
        
        { char: 'た', reading: 'ta', mnemonic: 'Табурет с ножкой' },
        { char: 'ち', reading: 'chi', mnemonic: 'Число пять (5)' },
        { char: 'つ', reading: 'tsu', mnemonic: 'Цунами-волна' },
        { char: 'て', reading: 'te', mnemonic: 'Телега с оглоблей' },
        { char: 'と', reading: 'to', mnemonic: 'Топор с рукояткой' },
        
        { char: 'な', reading: 'na', mnemonic: 'Наклон с крючком' },
        { char: 'に', reading: 'ni', mnemonic: 'Нитка на иголке' },
        { char: 'ぬ', reading: 'nu', mnemonic: 'Нудлс в тарелке' },
        { char: 'ね', reading: 'ne', mnemonic: 'Неваляшка с петлей' },
        { char: 'の', reading: 'no', mnemonic: 'Носик чайника' },
        
        { char: 'は', reading: 'ha', mnemonic: 'Халат на вешалке' },
        { char: 'ひ', reading: 'hi', mnemonic: 'Хитрый крючок' },
        { char: 'ふ', reading: 'fu', mnemonic: 'Фуражка с козырьком' },
        { char: 'へ', reading: 'he', mnemonic: 'Холм невысокий' },
        { char: 'ほ', reading: 'ho', mnemonic: 'Холм с крестом' },
        
        { char: 'ま', reading: 'ma', mnemonic: 'Мачта с флагом' },
        { char: 'み', reading: 'mi', mnemonic: 'Мидия с усиками' },
        { char: 'む', reading: 'mu', mnemonic: 'Музыкальная нота (си)' },
        { char: 'め', reading: 'me', mnemonic: 'Мешок завязанный' },
        { char: 'も', reading: 'mo', mnemonic: 'Мостик с опорой' },
        
        { char: 'や', reading: 'ya', mnemonic: 'Якорь с цепью' },
        { char: 'ゆ', reading: 'yu', mnemonic: 'Юла крутится' },
        { char: 'よ', reading: 'yo', mnemonic: 'Йогурт в стакане' },
        
        { char: 'ら', reading: 'ra', mnemonic: 'Рак с клешней' },
        { char: 'り', reading: 'ri', mnemonic: 'Река извилистая' },
        { char: 'る', reading: 'ru', mnemonic: 'Рука с кольцом' },
        { char: 'れ', reading: 're', mnemonic: 'Рельс изогнутый' },
        { char: 'ろ', reading: 'ro', mnemonic: 'Рот квадратный' },
        
        { char: 'わ', reading: 'wa', mnemonic: 'Ваза с ручкой' },
        { char: 'を', reading: 'wo', mnemonic: 'Волна с пеной' },
        { char: 'ん', reading: 'n', mnemonic: 'Наклоненная "и"' },
        
        { char: 'が', reading: 'ga', mnemonic: 'Гантель с грузом' },
        { char: 'ぎ', reading: 'gi', mnemonic: 'Гиря на цепи' },
        { char: 'ぐ', reading: 'gu', mnemonic: 'Гусь плывет' },
        { char: 'げ', reading: 'ge', mnemonic: 'Герб с короной' },
        { char: 'ご', reading: 'go', mnemonic: 'Гонг круглый' },
        
        { char: 'ざ', reading: 'za', mnemonic: 'Заяц с ушами' },
        { char: 'じ', reading: 'ji', mnemonic: 'Жираф с пятнами' },
        { char: 'ず', reading: 'zu', mnemonic: 'Зуб острый' },
        { char: 'ぜ', reading: 'ze', mnemonic: 'Зебра полосатая' },
        { char: 'ぞ', reading: 'zo', mnemonic: 'Зонт раскрытый' },
        
        { char: 'だ', reading: 'da', mnemonic: 'Дача с трубой' },
        { char: 'ぢ', reading: 'ji', mnemonic: 'Джинсы модные' },
        { char: 'づ', reading: 'zu', mnemonic: 'Дуга с точкой' },
        { char: 'で', reading: 'de', mnemonic: 'Дерево с веткой' },
        { char: 'ど', reading: 'do', mnemonic: 'Дом с окном' },
        
        { char: 'ば', reading: 'ba', mnemonic: 'Барабан с палочкой' },
        { char: 'び', reading: 'bi', mnemonic: 'Бинокль театральный' },
        { char: 'ぶ', reading: 'bu', mnemonic: 'Бублик с маком' },
        { char: 'べ', reading: 'be', mnemonic: 'Берет набекрень' },
        { char: 'ぼ', reading: 'bo', mnemonic: 'Бочка дубовая' },
        
        { char: 'ぱ', reading: 'pa', mnemonic: 'Парус на ветру' },
        { char: 'ぴ', reading: 'pi', mnemonic: 'Пика острая' },
        { char: 'ぷ', reading: 'pu', mnemonic: 'Пуговица круглая' },
        { char: 'ぺ', reading: 'pe', mnemonic: 'Перо павлина' },
        { char: 'ぽ', reading: 'po', mnemonic: 'Пончик глазурованный' }
    ],
    
    katakana: [
        { char: 'ア', reading: 'a', mnemonic: 'Антенна телевизионная' },
        { char: 'イ', reading: 'i', mnemonic: 'Игла швейная' },
        { char: 'ウ', reading: 'u', mnemonic: 'Угол с крышей' },
        { char: 'エ', reading: 'e', mnemonic: 'Этажи многоэтажки' },
        { char: 'オ', reading: 'o', mnemonic: 'Орел расправил крылья' },
        
        { char: 'カ', reading: 'ka', mnemonic: 'Карниз с украшением' },
        { char: 'キ', reading: 'ki', mnemonic: 'Кисть малярная' },
        { char: 'ク', reading: 'ku', mnemonic: 'Клин деревянный' },
        { char: 'ケ', reading: 'ke', mnemonic: 'Кегля для боулинга' },
        { char: 'コ', reading: 'ko', mnemonic: 'Коробка открытая' },
        
        { char: 'サ', reading: 'sa', mnemonic: 'Сабля изогнутая' },
        { char: 'シ', reading: 'shi', mnemonic: 'Широкая улыбка' },
        { char: 'ス', reading: 'su', mnemonic: 'Стремя всадника' },
        { char: 'セ', reading: 'se', mnemonic: 'Сетка рыболовная' },
        { char: 'ソ', reading: 'so', mnemonic: 'Сосулька, свисающая с крыши' },
        
        { char: 'タ', reading: 'ta', mnemonic: 'Табурет угловатый' },
        { char: 'チ', reading: 'chi', mnemonic: 'Чайка в полете' },
        { char: 'ツ', reading: 'tsu', mnemonic: 'Цапли в воде' },
        { char: 'テ', reading: 'te', mnemonic: 'Телескоп старинный' },
        { char: 'ト', reading: 'to', mnemonic: 'Тотем индейский' },
        
        { char: 'ナ', reading: 'na', mnemonic: 'Наклон с палкой' },
        { char: 'ニ', reading: 'ni', mnemonic: 'Ни (два по-японски)' },
        { char: 'ヌ', reading: 'nu', mnemonic: 'Нуга тягучая' },
        { char: 'ネ', reading: 'ne', mnemonic: 'Нектар сладкий' },
        { char: 'ノ', reading: 'no', mnemonic: 'Нож кухонный' },
        
        { char: 'ハ', reading: 'ha', mnemonic: 'Хата с крышей' },
        { char: 'ヒ', reading: 'hi', mnemonic: 'Хитрый изгиб' },
        { char: 'フ', reading: 'fu', mnemonic: 'Футляр открытый' },
        { char: 'ヘ', reading: 'he', mnemonic: 'Холм невысокий' },
        { char: 'ホ', reading: 'ho', mnemonic: 'Хоккуист под деревом' },
        
        { char: 'マ', reading: 'ma', mnemonic: 'Мачта корабельная' },
        { char: 'ミ', reading: 'mi', mnemonic: 'Мина морская' },
        { char: 'ム', reading: 'mu', mnemonic: 'Муравейник конусом' },
        { char: 'メ', reading: 'me', mnemonic: 'Метка крестиком' },
        { char: 'モ', reading: 'mo', mnemonic: 'Мост подвесной' },
        
        { char: 'ヤ', reading: 'ya', mnemonic: 'Ятаган кривой' },
        { char: 'ユ', reading: 'yu', mnemonic: 'Юла с осью' },
        { char: 'ヨ', reading: 'yo', mnemonic: 'Йогурт слоями' },
        
        { char: 'ラ', reading: 'ra', mnemonic: 'Ракета стартует' },
        { char: 'リ', reading: 'ri', mnemonic: 'Рельсы двойные' },
        { char: 'ル', reading: 'ru', mnemonic: 'Рубанок строгает' },
        { char: 'レ', reading: 're', mnemonic: 'Рейка наклонная' },
        { char: 'ロ', reading: 'ro', mnemonic: 'Рот прямоугольный' },
        
        { char: 'ワ', reading: 'wa', mnemonic: 'Ваза треугольная' },
        { char: 'ヲ', reading: 'wo', mnemonic: 'Ворота в храм' },
        { char: 'ン', reading: 'n', mnemonic: 'Носик загнутый' },
        
        { char: 'ガ', reading: 'ga', mnemonic: 'Галочка с точкой' },
        { char: 'ギ', reading: 'gi', mnemonic: 'Гиря тяжелая' },
        { char: 'グ', reading: 'gu', mnemonic: 'Гусь белый' },
        { char: 'ゲ', reading: 'ge', mnemonic: 'Герб рыцарский' },
        { char: 'ゴ', reading: 'go', mnemonic: 'Голубь сизый' },
        
        { char: 'ザ', reading: 'za', mnemonic: 'Замок старинный' },
        { char: 'ジ', reading: 'ji', mnemonic: 'Жираф пятнистый' },
        { char: 'ズ', reading: 'zu', mnemonic: 'Зуб мудрости' },
        { char: 'ゼ', reading: 'ze', mnemonic: 'Зеркало волшебное' },
        { char: 'ゾ', reading: 'zo', mnemonic: 'Зоопарк большой' },
        
        { char: 'ダ', reading: 'da', mnemonic: 'Дача загородная' },
        { char: 'ヂ', reading: 'ji', mnemonic: 'Джинсы синие' },
        { char: 'ヅ', reading: 'zu', mnemonic: 'Дуга радужная' },
        { char: 'デ', reading: 'de', mnemonic: 'Дерево могучее' },
        { char: 'ド', reading: 'do', mnemonic: 'Дом кирпичный' },
        
        { char: 'バ', reading: 'ba', mnemonic: 'Бабочка яркая' },
        { char: 'ビ', reading: 'bi', mnemonic: 'Бизон могучий' },
        { char: 'ブ', reading: 'bu', mnemonic: 'Бук вековой' },
        { char: 'ベ', reading: 'be', mnemonic: 'Белка рыжая' },
        { char: 'ボ', reading: 'bo', mnemonic: 'Бобр трудолюбивый' },
        
        { char: 'パ', reading: 'pa', mnemonic: 'Парус белоснежный' },
        { char: 'ピ', reading: 'pi', mnemonic: 'Пика стальная' },
        { char: 'プ', reading: 'pu', mnemonic: 'Пуговица перламутровая' },
        { char: 'ペ', reading: 'pe', mnemonic: 'Перо золотое' },
        { char: 'ポ', reading: 'po', mnemonic: 'Пончик воздушный' }
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