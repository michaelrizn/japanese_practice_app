let hiraganaMap = {
  'あ': { ru: 'а', en: 'a' },
  'い': { ru: 'и', en: 'i' },
  'う': { ru: 'у', en: 'u' },
  'え': { ru: 'э', en: 'e' },
  'お': { ru: 'о', en: 'o' },
  'か': { ru: 'ка', en: 'ka' },
  'が': { ru: 'га', en: 'ga' },
  'き': { ru: 'ки', en: 'ki' },
  'ぎ': { ru: 'ги', en: 'gi' },
  'く': { ru: 'ку', en: 'ku' },
  'ぐ': { ru: 'гу', en: 'gu' },
  'け': { ru: 'кэ', en: 'ke' },
  'げ': { ru: 'гэ', en: 'ge' },
  'こ': { ru: 'ко', en: 'ko' },
  'ご': { ru: 'го', en: 'go' },
  'さ': { ru: 'са', en: 'sa' },
  'ざ': { ru: 'дза', en: 'za' },
  'し': { ru: 'си', en: 'shi' },
  'じ': { ru: 'дзи', en: 'ji' },
  'す': { ru: 'су', en: 'su' },
  'ず': { ru: 'дзу', en: 'zu' },
  'せ': { ru: 'сэ', en: 'se' },
  'ぜ': { ru: 'дзэ', en: 'ze' },
  'そ': { ru: 'со', en: 'so' },
  'ぞ': { ru: 'дзо', en: 'zo' },
  'た': { ru: 'та', en: 'ta' },
  'だ': { ru: 'да', en: 'da' },
  'ち': { ru: 'ти', en: 'chi' },
  'ぢ': { ru: 'дзи', en: 'ji' },
  'つ': { ru: 'цу', en: 'tsu' },
  'づ': { ru: 'дзу', en: 'zu' },
  'て': { ru: 'тэ', en: 'te' },
  'で': { ru: 'дэ', en: 'de' },
  'と': { ru: 'то', en: 'to' },
  'ど': { ru: 'до', en: 'do' },
  'な': { ru: 'на', en: 'na' },
  'に': { ru: 'ни', en: 'ni' },
  'ぬ': { ru: 'ну', en: 'nu' },
  'ね': { ru: 'нэ', en: 'ne' },
  'の': { ru: 'но', en: 'no' },
  'は': { ru: 'ха', en: 'ha' },
  'ば': { ru: 'ба', en: 'ba' },
  'ぱ': { ru: 'па', en: 'pa' },
  'ひ': { ru: 'хи', en: 'hi' },
  'び': { ru: 'би', en: 'bi' },
  'ぴ': { ru: 'пи', en: 'pi' },
  'ふ': { ru: 'фу', en: 'fu' },
  'ぶ': { ru: 'бу', en: 'bu' },
  'ぷ': { ru: 'пу', en: 'pu' },
  'へ': { ru: 'хэ', en: 'he' },
  'べ': { ru: 'бэ', en: 'be' },
  'ぺ': { ru: 'пэ', en: 'pe' },
  'ほ': { ru: 'хо', en: 'ho' },
  'ぼ': { ru: 'бо', en: 'bo' },
  'ぽ': { ru: 'по', en: 'po' },
  'ま': { ru: 'ма', en: 'ma' },
  'み': { ru: 'ми', en: 'mi' },
  'む': { ru: 'му', en: 'mu' },
  'め': { ru: 'мэ', en: 'me' },
  'も': { ru: 'мо', en: 'mo' },
  'や': { ru: 'я', en: 'ya' },
  'ゆ': { ru: 'ю', en: 'yu' },
  'よ': { ru: 'ё', en: 'yo' },
  'ら': { ru: 'ра', en: 'ra' },
  'り': { ru: 'ри', en: 'ri' },
  'る': { ru: 'ру', en: 'ru' },
  'れ': { ru: 'рэ', en: 're' },
  'ろ': { ru: 'ро', en: 'ro' },
  'わ': { ru: 'ва', en: 'wa' },
  'を': { ru: 'во', en: 'wo' },
  'ん': { ru: 'н', en: 'n' },
  'っ': { ru: '(удвоение)', en: '(gemination)' }
};

let katakanaMap = {
  'ア': { ru: 'а', en: 'a' },
  'イ': { ru: 'и', en: 'i' },
  'ウ': { ru: 'у', en: 'u' },
  'エ': { ru: 'э', en: 'e' },
  'オ': { ru: 'о', en: 'o' },
  'カ': { ru: 'ка', en: 'ka' },
  'ガ': { ru: 'га', en: 'ga' },
  'キ': { ru: 'ки', en: 'ki' },
  'ギ': { ru: 'ги', en: 'gi' },
  'ク': { ru: 'ку', en: 'ku' },
  'グ': { ru: 'гу', en: 'gu' },
  'ケ': { ru: 'кэ', en: 'ke' },
  'ゲ': { ru: 'гэ', en: 'ge' },
  'コ': { ru: 'ко', en: 'ko' },
  'ゴ': { ru: 'го', en: 'go' },
  'サ': { ru: 'са', en: 'sa' },
  'ザ': { ru: 'дза', en: 'za' },
  'シ': { ru: 'си', en: 'shi' },
  'ジ': { ru: 'дзи', en: 'ji' },
  'ス': { ru: 'су', en: 'su' },
  'ズ': { ru: 'дзу', en: 'zu' },
  'セ': { ru: 'сэ', en: 'se' },
  'ゼ': { ru: 'дзэ', en: 'ze' },
  'ソ': { ru: 'со', en: 'so' },
  'ゾ': { ru: 'дзо', en: 'zo' },
  'タ': { ru: 'та', en: 'ta' },
  'ダ': { ru: 'да', en: 'da' },
  'チ': { ru: 'ти', en: 'chi' },
  'ヂ': { ru: 'дзи', en: 'ji' },
  'ツ': { ru: 'цу', en: 'tsu' },
  'ヅ': { ru: 'дзу', en: 'zu' },
  'テ': { ru: 'тэ', en: 'te' },
  'デ': { ru: 'дэ', en: 'de' },
  'ト': { ru: 'то', en: 'to' },
  'ド': { ru: 'до', en: 'do' },
  'ナ': { ru: 'на', en: 'na' },
  'ニ': { ru: 'ни', en: 'ni' },
  'ヌ': { ru: 'ну', en: 'nu' },
  'ネ': { ru: 'нэ', en: 'ne' },
  'ノ': { ru: 'но', en: 'no' },
  'ハ': { ru: 'ха', en: 'ha' },
  'バ': { ru: 'ба', en: 'ba' },
  'パ': { ru: 'па', en: 'pa' },
  'ヒ': { ru: 'хи', en: 'hi' },
  'ビ': { ru: 'би', en: 'bi' },
  'ピ': { ru: 'пи', en: 'pi' },
  'フ': { ru: 'фу', en: 'fu' },
  'ブ': { ru: 'бу', en: 'bu' },
  'プ': { ru: 'пу', en: 'pu' },
  'ヘ': { ru: 'хэ', en: 'he' },
  'ベ': { ru: 'бэ', en: 'be' },
  'ペ': { ru: 'пэ', en: 'pe' },
  'ホ': { ru: 'хо', en: 'ho' },
  'ボ': { ru: 'бо', en: 'bo' },
  'ポ': { ru: 'по', en: 'po' },
  'マ': { ru: 'ма', en: 'ma' },
  'ミ': { ru: 'ми', en: 'mi' },
  'ム': { ru: 'му', en: 'mu' },
  'メ': { ru: 'мэ', en: 'me' },
  'モ': { ru: 'мо', en: 'mo' },
  'ヤ': { ru: 'я', en: 'ya' },
  'ユ': { ru: 'ю', en: 'yu' },
  'ヨ': { ru: 'ё', en: 'yo' },
  'ラ': { ru: 'ра', en: 'ra' },
  'リ': { ru: 'ри', en: 'ri' },
  'ル': { ru: 'ру', en: 'ru' },
  'レ': { ru: 'рэ', en: 're' },
  'ロ': { ru: 'ро', en: 'ro' },
  'ワ': { ru: 'ва', en: 'wa' },
  'ヲ': { ru: 'во', en: 'wo' },
  'ン': { ru: 'н', en: 'n' },
  'ッ': { ru: '(удвоение)', en: '(gemination)' }
};

// Объединяем все словари кандзи
const kanjiReadings = {
  ...(typeof kanjiN5 !== 'undefined' ? kanjiN5 : {}),
  ...(typeof kanjiN4 !== 'undefined' ? kanjiN4 : {})
};

// Функция для преобразования русской транскрипции в хирагану
function convertRussianToHiragana(russianText) {
  const ruToHiragana = {
    'а': 'あ', 'и': 'い', 'у': 'う', 'э': 'え', 'о': 'お',
    'ка': 'か', 'ки': 'き', 'ку': 'く', 'кэ': 'け', 'ко': 'こ',
    'га': 'が', 'ги': 'ぎ', 'гу': 'ぐ', 'гэ': 'げ', 'го': 'ご',
    'са': 'さ', 'си': 'し', 'су': 'す', 'сэ': 'せ', 'со': 'そ',
    'дза': 'ざ', 'дзи': 'じ', 'дзу': 'ず', 'дзэ': 'ぜ', 'дзо': 'ぞ',
    'та': 'た', 'ти': 'ち', 'цу': 'つ', 'тэ': 'て', 'то': 'と',
    'да': 'だ', 'дэ': 'で', 'до': 'ど',
    'на': 'な', 'ни': 'に', 'ну': 'ぬ', 'нэ': 'ね', 'но': 'の',
    'ха': 'は', 'хи': 'ひ', 'фу': 'ふ', 'хэ': 'へ', 'хо': 'ほ',
    'ба': 'ば', 'би': 'び', 'бу': 'ぶ', 'бэ': 'べ', 'бо': 'ぼ',
    'па': 'ぱ', 'пи': 'ぴ', 'пу': 'ぷ', 'пэ': 'ぺ', 'по': 'ぽ',
    'ма': 'ま', 'ми': 'み', 'му': 'む', 'мэ': 'め', 'мо': 'も',
    'я': 'や', 'ю': 'ゆ', 'ё': 'よ',
    'ра': 'ら', 'ри': 'り', 'ру': 'る', 'рэ': 'れ', 'ро': 'ろ',
    'ва': 'わ', 'во': 'を', 'н': 'ん',
    'дзю': 'じゅ', 'сю': 'しゅ', 'тю': 'ちゅ', 'ню': 'にゅ',
    'хю': 'ひゅ', 'мю': 'みゅ', 'рю': 'りゅ', 'гю': 'ぎゅ',
    'дзё': 'じょ', 'сё': 'しょ', 'тё': 'ちょ', 'нё': 'にょ',
    'хё': 'ひょ', 'мё': 'みょ', 'рё': 'りょ', 'гё': 'ぎょ',
    'дзя': 'じゃ', 'ся': 'しゃ', 'тя': 'ちゃ', 'ня': 'にゃ',
    'хя': 'ひゃ', 'мя': 'みゃ', 'ря': 'りゃ', 'гя': 'ぎゃ',
    'кю': 'きゅ', 'бю': 'びゅ', 'пю': 'ぴゅ',
    'кё': 'きょ', 'бё': 'びょ', 'пё': 'ぴょ',
    'кя': 'きゃ', 'бя': 'びゃ', 'пя': 'ぴゃ',
    'хито': 'ひと', 'дзин': 'じん', 'мото': 'もと', 'хон': 'ほん',
    'мидзу': 'みず', 'суй': 'すい', 'кава': 'かわ', 'сэн': 'せん',
    'яма': 'やま', 'сан': 'さん', 'нака': 'なか', 'тю': 'ちゅ',
    'оо': 'おお', 'дай': 'だい', 'тии': 'ちい', 'сё': 'しょ',
    'уэ': 'うえ', 'дзё': 'じょ', 'сита': 'した', 'хидари': 'ひだり',
    'миги': 'みぎ', 'аси': 'あし', 'соку': 'そく', 'мэ': 'め',
    'моку': 'もく', 'кути': 'くち', 'мими': 'みみ', 'кокоро': 'こころ',
    'син': 'しん', 'нэн': 'ねん', 'тоси': 'とし', 'гэцу': 'げつ',
    'цуки': 'つき', 'токи': 'とき', 'ваку': 'わく', 'коку': 'こく',
    'куни': 'くに', 'иэ': 'いえ', 'курума': 'くるま', 'дэн': 'でん',
    'ханаси': 'はなし', 'сёку': 'しょく', 'ин': 'いん', 'кэн': 'けん',
    'бун': 'ぶん', 'доку': 'どく', 'ё': 'よ', 'каэ': 'かえ',
    'бай': 'ばい', 'саку': 'さく', 'цуку': 'つく', 'цука': 'つか',
    'омо': 'おも', 'канга': 'かんが', 'дан': 'だん', 'отоко': 'おとこ',
    'онна': 'おんな', 'хаха': 'はは', 'бо': 'ぼ', 'тити': 'ちち',
    'фу': 'ふ', 'томо': 'とも', 'гаку': 'がく', 'сэй': 'せい',
    'нама': 'なま', 'саки': 'さき', 'кото': 'こと', 'буцу': 'ぶつ',
    'моно': 'もの', 'ся': 'しゃ', 'ба': 'ば', 'токоро': 'ところ',
    'ката': 'かた', 'маэ': 'まえ', 'дзэн': 'ぜん', 'ато': 'あと',
    'ути': 'うち', 'най': 'ない', 'сото': 'そと', 'гай': 'がい',
    'така': 'たか', 'нага': 'なが', 'тё': 'ちょ', 'суку': 'すく',
    'они': 'おに', 'тада': 'ただ', 'гэн': 'げん', 'рёку': 'りょく',
    'тикара': 'ちから', 'тай': 'たい', 'карада': 'からだ', 'атама': 'あたま',
    'гао': 'がお', 'као': 'かお', 'коэ': 'こえ', 'ото': 'おと',
    'иро': 'いろ', 'катати': 'かたち', 'адзи': 'あじ', 'кан': 'かん',
    'атара': 'あたら', 'фуру': 'ふる', 'хаку': 'はく', 'сиро': 'しろ',
    'коку': 'こく', 'куро': 'くろ', 'сэки': 'せき', 'ака': 'あか',
    'ао': 'あお', 'ити': 'いち', 'фута': 'ふた', 'ми': 'み',
    'ён': 'よん', 'ицу': 'いつ', 'року': 'ろく', 'му': 'む',
    'сити': 'しち', 'нана': 'なな', 'хати': 'はち', 'кю': 'きゅ',
    'коконо': 'ここの', 'дзю': 'じゅ', 'хяку': 'ひゃく', 'ман': 'まん',
    'эн': 'えん', 'кон': 'こん', 'има': 'いま', 'май': 'まい',
    'нани': 'なに', 'сюцу': 'しゅつ', 'дэ': 'で', 'ню': 'にゅ',
    'хай': 'はい', 'рицу': 'りつ', 'ясу': 'やす', 'су': 'す',
    'ан': 'あん', 'хая': 'はや', 'осо': 'おそ', 'кин': 'きん',
    'тика': 'ちか', 'то': 'と', 'эки': 'えき', 'сора': 'そら',
    'минато': 'みなと', 'фунэ': 'ふね', 'хата': 'はた', 'таби': 'たび',
    'ядо': 'やど', 'сюку': 'しゅく', 'яку': 'やく', 'тава': 'たわ',
    'хака': 'はか', 'га': 'が', 'дзюн': 'じゅん', 'сонаэ': 'そなえ',
    'би': 'び', 'моти': 'もち', 'хицу': 'ひつ', 'канара': 'かなら',
    'футо': 'ふと', 'хосо': 'ほそ', 'ацу': 'あつ', 'усу': 'うす',
    'фука': 'ふか', 'аса': 'あさ', 'хиро': 'ひろ', 'сэма': 'せま',
    'цуё': 'つよ', 'ёва': 'よわ', 'дзяку': 'じゃく', 'ява': 'やわ',
    'абу': 'あぶ', 'мата': 'また', 'току': 'とく', 'вакэ': 'わけ',
    'бэцу': 'べつ', 'хока': 'ほか', 'оно': 'おの', 'каку': 'かく',
    'субэ': 'すべ', 'бу': 'ぶ', 'хан': 'はん', 'рё': 'りょ',
    'хэн': 'へん', 'гава': 'がわ', 'атари': 'あたり', 'мавари': 'まわり',
    'како': 'かこ', 'сэки': 'せき', 'какари': 'かかり', 'кэй': 'けい',
    'рэн': 'れん', 'цура': 'つら', 'раку': 'らく', 'кара': 'から',
    'кэцу': 'けつ', 'мусу': 'むす', 'ку': 'く', 'утсува': 'うつわ',
    'дзай': 'ざい', 'сицу': 'しつ', 'кадзу': 'かず', 'мава': 'まわ',
    'бан': 'ばん', 'нара': 'なら', 'рэцу': 'れつ', 'хэй': 'へい',
    'кура': 'くら', 'цуи': 'つい', 'тан': 'たん', 'сака': 'さか',
    'гяку': 'ぎゃく', 'хё': 'ひょ', 'омотэ': 'おもて', 'ура': 'うら',
    'мэн': 'めん', 'цуно': 'つの', 'тэн': 'てん', 'ган': 'がん',
    'мару': 'まる'
  };
  
  if (russianText.includes('/')) {
    return russianText.split('/').map(part => {
      let result = part.trim();
      const sortedKeys = Object.keys(ruToHiragana).sort((a, b) => b.length - a.length);
      
      for (const key of sortedKeys) {
        const regex = new RegExp(key, 'g');
        result = result.replace(regex, ruToHiragana[key]);
      }
      
      return result;
    }).join('/');
  }
  
  let result = russianText;
  const sortedKeys = Object.keys(ruToHiragana).sort((a, b) => b.length - a.length);
  
  for (const key of sortedKeys) {
    const regex = new RegExp(key, 'g');
    result = result.replace(regex, ruToHiragana[key]);
  }
  
  return result;
}

function transliterateText(text) {
  const result = [];
  
  for (let char of text) {
    let item = {
      char: char,
      ru: char,
      en: char,
      jp: char,
      hiraganaChars: [],
      type: 'other'
    };
    
    if (hiraganaMap[char]) {
      item.ru = hiraganaMap[char].ru;
      item.en = hiraganaMap[char].en;
      item.jp = char;
      item.hiraganaChars = [{
        char: char,
        ru: hiraganaMap[char].ru,
        en: hiraganaMap[char].en
      }];
      item.type = 'hiragana';
    } else if (katakanaMap[char]) {
      item.ru = katakanaMap[char].ru;
      item.en = katakanaMap[char].en;
      item.jp = char;
      item.hiraganaChars = [{
        char: char,
        ru: katakanaMap[char].ru,
        en: katakanaMap[char].en
      }];
      item.type = 'katakana';
    } else if (kanjiReadings[char]) {
      item.ru = kanjiReadings[char].ru;
      item.en = kanjiReadings[char].en;
      const convertedJp = convertRussianToHiragana(kanjiReadings[char].ru);
      item.jp = convertedJp;
      item.hiraganaChars = parseHiraganaReadings(convertedJp, kanjiReadings[char].ru, kanjiReadings[char].en);
      item.type = 'kanji';
    }
    
    result.push(item);
  }
  
  return result;
}

function parseHiraganaReadings(hiraganaText, ruText, enText) {
  const chars = [];
  const ruParts = ruText.includes('/') ? ruText.split('/') : [ruText];
  const enParts = enText.includes('/') ? enText.split('/') : [enText];
  
  if (hiraganaText.includes('/')) {
    const jpParts = hiraganaText.split('/');
    jpParts.forEach((jpPart, index) => {
      const ruPart = ruParts[index] || ruParts[0];
      const enPart = enParts[index] || enParts[0];
      
      for (let i = 0; i < jpPart.length; i++) {
        const hiraganaChar = jpPart[i];
        if (hiraganaMap[hiraganaChar]) {
          chars.push({
            char: hiraganaChar,
            ru: hiraganaMap[hiraganaChar].ru,
            en: hiraganaMap[hiraganaChar].en,
            reading: index === 0 ? 'on' : 'kun'
          });
        }
      }
    });
  } else {
    for (let i = 0; i < hiraganaText.length; i++) {
      const hiraganaChar = hiraganaText[i];
      if (hiraganaMap[hiraganaChar]) {
        chars.push({
          char: hiraganaChar,
          ru: hiraganaMap[hiraganaChar].ru,
          en: hiraganaMap[hiraganaChar].en,
          reading: 'default'
        });
      }
    }
  }
  
  return chars;
}