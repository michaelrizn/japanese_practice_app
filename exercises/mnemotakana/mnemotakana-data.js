const MNEMOTAKANA_DATA = {
  hiragana: [
    { char: "あ", reading: "a/а", mnemonic: "Антенна" },
    { char: "い", reading: "i/и", mnemonic: "Иглы" },
    { char: "う", reading: "u/у", mnemonic: "Улитка" },
    { char: "え", reading: "e/э", mnemonic: "Этажерка" },
    { char: "お", reading: "o/о", mnemonic: "ОБруб с хвостиком" },

    { char: "か", reading: "ka/ка", mnemonic: "Каблук с ремешком" },
    { char: "き", reading: "ki/ки", mnemonic: "Киса 21 (2-き, 1-さ)" },
    { char: "く", reading: "ku/ку", mnemonic: "Кулюв" },
    { char: "け", reading: "ke/кэ", mnemonic: "Кепка" },
    { char: "こ", reading: "ko/ко", mnemonic: "Косорот" },

    { char: "さ", reading: "sa/са", mnemonic: "Саки 12 (1-さ, 2-き)" },
    { char: "し", reading: "shi/си", mnemonic: "Шило" },
    { char: "す", reading: "su/су", mnemonic: "Сушка" },
    { char: "せ", reading: "se/сэ", mnemonic: "Сетка с веревкой" },
    { char: "そ", reading: "so/со", mnemonic: "Сооснование" },

    { char: "た", reading: "ta/та", mnemonic: "Табурет с ножкой" },
    { char: "ち", reading: "chi/ти", mnemonic: "Число пять (5)" },
    { char: "つ", reading: "tsu/цу", mnemonic: "Цунами-волна" },
    { char: "て", reading: "te/тэ", mnemonic: "Тетерев" },
    { char: "と", reading: "to/то", mnemonic: "Топор томагавк" },

    { char: "な", reading: "na/на", mnemonic: "Навес" },
    { char: "に", reading: "ni/ни", mnemonic: "Нитка на иголке" },
    { char: "ぬ", reading: "nu/ну", mnemonic: "Ну баранки гну" },
    { char: "ね", reading: "ne/не", mnemonic: "Нектар в кружке" },
    { char: "の", reading: "no/но", mnemonic: "Норка" },

    { char: "は", reading: "ha/ха", mnemonic: "Ха (Ha)" },
    { char: "ひ", reading: "hi/хи", mnemonic: "Химера (плавная дуга)" },
    { char: "ふ", reading: "fu/фу", mnemonic: "Фуфырка" },
    { char: "へ", reading: "he/хе", mnemonic: "Хелы (лёд, ледяной торос)" },
    { char: "ほ", reading: "ho/хо", mnemonic: "Хо (Ho)" },

    { char: "ま", reading: "ma/ма", mnemonic: "Мачта" },
    { char: "み", reading: "mi/ми", mnemonic: "Мидия" },
    { char: "む", reading: "mu/му", mnemonic: "Му (морда коровы)" },
    { char: "め", reading: "me/ме", mnemonic: "Медуза" },
    { char: "も", reading: "mo/мо", mnemonic: "Мороженка с палочками" },

    { char: "や", reading: "ya/я", mnemonic: "Ястреб" },
    { char: "ゆ", reading: "yu/ю", mnemonic: "Юла" },
    { char: "よ", reading: "yo/ё", mnemonic: "Йогурт" },

    { char: "ら", reading: "ra/ра", mnemonic: "Раф (кофе)" },
    { char: "り", reading: "ri/ри", mnemonic: "Рисинка" },
    { char: "る", reading: "ru/ру", mnemonic: "Рулетка" },
    { char: "れ", reading: "re/ре", mnemonic: "Рельс" },
    { char: "ろ", reading: "ro/ро", mnemonic: "Ром (бутылка)" },

    { char: "わ", reading: "wa/ва", mnemonic: "Ваза с ручкой" },
    { char: "を", reading: "wo/во", mnemonic: "Вок" },
    { char: "ん", reading: "n/н", mnemonic: 'Наклоненная "и"' },

    { char: "が", reading: "ga/га", mnemonic: "Гарпун с гвоздём" },
    { char: "ぎ", reading: "gi/ги", mnemonic: "Гитара" },
    { char: "ぐ", reading: "gu/гу", mnemonic: "Гусеница с гвоздиками" },
    { char: "げ", reading: "ge/гэ", mnemonic: "Герб" },
    { char: "ご", reading: "go/го", mnemonic: "Гонг" },

    { char: "ざ", reading: "za/дза", mnemonic: "дЗаклёпки" },
    { char: "じ", reading: "ji/дзи", mnemonic: "дЖираф" },
    { char: "ず", reading: "zu/дзу", mnemonic: "дЗубастая змея" },
    { char: "ぜ", reading: "ze/дзэ", mnemonic: "дЗуркало" },
    { char: "ぞ", reading: "zo/дзо", mnemonic: "дЗонт" },

    { char: "だ", reading: "da/да", mnemonic: "Дамба" },
    { char: "ぢ", reading: "ji/дзи", mnemonic: "Джинсы" },
    { char: "づ", reading: "zu/дзу", mnemonic: "дЗуб" },
    { char: "で", reading: "de/дэ", mnemonic: "Дерево с ветками" },
    { char: "ど", reading: "do/до", mnemonic: "Домкрат" },

    { char: "ば", reading: "ba/ба", mnemonic: "Барабан с палочкой" },
    { char: "び", reading: "bi/би", mnemonic: "Бинокль" },
    { char: "ぶ", reading: "bu/бу", mnemonic: "Бухер" },
    { char: "べ", reading: "be/бэ", mnemonic: "Бейдж" },
    { char: "ぼ", reading: "bo/бо", mnemonic: "Бочка" },

    { char: "ぱ", reading: "pa/па", mnemonic: "Парус на ветру" },
    { char: "ぴ", reading: "pi/пи", mnemonic: "Пикули" },
    { char: "ぷ", reading: "pu/пу", mnemonic: "Пузырёк" },
    { char: "ぺ", reading: "pe/пэ", mnemonic: "Перо" },
    { char: "ぽ", reading: "po/по", mnemonic: "Помпон" },
  ],

  katakana: [
    { char: "ア", reading: "a/а", mnemonic: "Антенна" },
    { char: "イ", reading: "i/и", mnemonic: "Игла" },
    { char: "ウ", reading: "u/у", mnemonic: "Утёс" },
    { char: "エ", reading: "e/э", mnemonic: "Этажи" },
    { char: "オ", reading: "o/о", mnemonic: "Орла клюв" },

    { char: "カ", reading: "ka/ка", mnemonic: "Карниз" },
    { char: "キ", reading: "ki/ки", mnemonic: "Киоск с двумя полками" },
    { char: "ク", reading: "ku/ку", mnemonic: "Кулёк" },
    { char: "ケ", reading: "ke/кэ", mnemonic: "Кегля" },
    { char: "コ", reading: "ko/ко", mnemonic: "Коробка" },

    { char: "サ", reading: "sa/са", mnemonic: "Сабля" },
    { char: "シ", reading: "shi/си", mnemonic: "Широкая улыбка" },
    { char: "ス", reading: "su/су", mnemonic: "Стремя всадника" },
    { char: "セ", reading: "se/сэ", mnemonic: "Сектант" },
    { char: "ソ", reading: "so/со", mnemonic: "Сосулька" },

    { char: "タ", reading: "ta/та", mnemonic: "Табурет угловатый" },
    { char: "チ", reading: "chi/ти", mnemonic: "Чип" },
    { char: "ツ", reading: "tsu/цу", mnemonic: "Цунами" },
    { char: "テ", reading: "te/тэ", mnemonic: "Телескоп" },
    { char: "ト", reading: "to/то", mnemonic: "Тотем" },

    { char: "ナ", reading: "na/на", mnemonic: "Навесная балка" },
    { char: "ニ", reading: "ni/ни", mnemonic: "Нитки" },
    { char: "ヌ", reading: "nu/ну", mnemonic: "Нуга" },
    { char: "ネ", reading: "ne/не", mnemonic: "Невероятно сложная цепочка" },
    { char: "ノ", reading: "no/но", mnemonic: "Нож" },

    { char: "ハ", reading: "ha/ха", mnemonic: "Хата" },
    { char: "ヒ", reading: "hi/хи", mnemonic: "Химик" },
    { char: "フ", reading: "fu/фу", mnemonic: "Футляр открытый" },
    { char: "ヘ", reading: "he/хе", mnemonic: "Холм" },
    { char: "ホ", reading: "ho/хо", mnemonic: "Хобот" },

    { char: "マ", reading: "ma/ма", mnemonic: "Мачта корабельная" },
    { char: "ミ", reading: "mi/ми", mnemonic: "Мигалки огни" },
    { char: "ム", reading: "mu/му", mnemonic: "Муравейник" },
    { char: "メ", reading: "me/ме", mnemonic: "Метка крестиком" },
    { char: "モ", reading: "mo/мо", mnemonic: "Мост подвесной" },

    { char: "ヤ", reading: "ya/я", mnemonic: "Ятаган" },
    { char: "ユ", reading: "yu/ю", mnemonic: "Юла" },
    { char: "ヨ", reading: "yo/ё", mnemonic: "Ёршик для мытья»" },

    { char: "ラ", reading: "ra/ра", mnemonic: "Ракета стартует" },
    { char: "リ", reading: "ri/ри", mnemonic: "Рисовые всходы" },
    { char: "ル", reading: "ru/ру", mnemonic: "Рубанок строгает" },
    { char: "レ", reading: "re/ре", mnemonic: "Рейка наклонная" },
    { char: "ロ", reading: "ro/ро", mnemonic: "Ров с водой" },

    { char: "ワ", reading: "wa/ва", mnemonic: "Ваза треугольная" },
    { char: "ヲ", reading: "wo/во", mnemonic: "Волжские волны" },
    { char: "ン", reading: "n/н", mnemonic: "Носик загнутый" },

    { char: "ガ", reading: "ga/га", mnemonic: "Галоши" },
    { char: "ギ", reading: "gi/ги", mnemonic: "Гильза стрелянная" },
    { char: "グ", reading: "gu/гу", mnemonic: "Гудок паравоза" },
    { char: "ゲ", reading: "ge/гэ", mnemonic: "Герб рыцарский" },
    { char: "ゴ", reading: "go/го", mnemonic: "Горшок перевёрнутый" },

    { char: "ザ", reading: "za/дза", mnemonic: "Зарница" },
    { char: "ジ", reading: "ji/дзи", mnemonic: "Джина лицо" },
    { char: "ズ", reading: "zu/дзу", mnemonic: "дЗуб мудрости" },
    { char: "ゼ", reading: "ze/дзэ", mnemonic: "дЗебры морда" },
    { char: "ゾ", reading: "zo/дзо", mnemonic: "дЗонт" },

    { char: "ダ", reading: "da/да", mnemonic: "Дартс" },
    { char: "ヂ", reading: "ji/дзи", mnemonic: "Дипломная лента" },
    { char: "ヅ", reading: "zu/дзу", mnemonic: "Дуэль палка" },
    { char: "デ", reading: "de/дэ", mnemonic: "Дерево могучее" },
    { char: "ド", reading: "do/до", mnemonic: "Домен" },

    { char: "バ", reading: "ba/ба", mnemonic: "Барабан" },
    { char: "ビ", reading: "bi/би", mnemonic: "Бита с гвоздём" },
    { char: "ブ", reading: "bu/бу", mnemonic: "Бук вековой" },
    { char: "ベ", reading: "be/бэ", mnemonic: "Бегония" },
    { char: "ボ", reading: "bo/бо", mnemonic: "Болт с гайкой" },

    { char: "パ", reading: "pa/па", mnemonic: "Парус" },
    { char: "ピ", reading: "pi/пи", mnemonic: "Пила столярная и сучок" },
    { char: "プ", reading: "pu/пу", mnemonic: "Пульт" },
    { char: "ペ", reading: "pe/пэ", mnemonic: "Пена на вершине" },
    { char: "ポ", reading: "po/по", mnemonic: "Поляна с грибом" },
  ],
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
