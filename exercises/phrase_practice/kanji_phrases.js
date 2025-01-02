// exercises/phrase_practice/kanji.js

const kanjiPhrases = [
  // --- 1. ---
  {
    phrase: "私は学生です",
    transcriptionRu: "ва~та~си ва га~ку~сэ~й дэ~с",
    translationRu: "Я студент",
    transcriptionEn: "wa~ta~shi wa ga~ku~se~i de~su",
    translationEn: "I am a student",
    wordsRu: [
      "私 (watashi) - я",
      "は (wa) - частица темы",
      "学生 (gakusei) - студент",
      "です (desu) - глагол-связка",
    ],
    wordsEn: [
      "私 (watashi) - I",
      "は (wa) - topic particle",
      "学生 (gakusei) - student",
      "です (desu) - am/is",
    ],
  },

  // --- 2. ---
  {
    phrase: "これは本です",
    transcriptionRu: "ко~рэ ва хон дэ~с",
    translationRu: "Это книга",
    transcriptionEn: "ko~re wa hon de~su",
    translationEn: "This is a book",
    wordsRu: [
      "これ (kore) - это",
      "は (wa) - частица темы",
      "本 (hon) - книга",
      "です (desu) - глагол-связка",
    ],
    wordsEn: [
      "これ (kore) - this",
      "は (wa) - topic particle",
      "本 (hon) - book",
      "です (desu) - is",
    ],
  },

  // --- 3. ---
  {
    phrase: "寿司を食べますか",
    transcriptionRu: "су~си о та~бэ~ма~с ка",
    translationRu: "Будешь есть суши?",
    transcriptionEn: "su~shi o ta~be~ma~su ka",
    translationEn: "Will you eat sushi?",
    wordsRu: [
      "寿司 (sushi) - суши",
      "を (o) - частица вин. падежа",
      "食べます (tabemasu) - есть (вежл.)",
      "か (ka) - вопрос",
    ],
    wordsEn: [
      "寿司 (sushi) - sushi",
      "を (o) - object marker",
      "食べます (tabemasu) - eat (polite)",
      "か (ka) - question",
    ],
  },

  // --- 4. ---
  {
    phrase: "いただきます（頂きます）",
    transcriptionRu: "и~та~да~ки~ма~с",
    translationRu: "Приятного аппетита (перед едой)",
    transcriptionEn: "i~ta~da~ki~ma~su",
    translationEn: "Let's eat / bon appétit",
    wordsRu: [
      "いただきます (itadakimasu) - (формула перед едой)",
      // 頂きます в скобках — каноничная форма.
    ],
    wordsEn: ["いただきます (itadakimasu) - (phrase before eating)"],
  },

  // --- 5. ---
  {
    phrase: "ごちそうさまでした（ご馳走様でした）",
    transcriptionRu: "го~ти~со~у~са~ма~дэ~си~та",
    translationRu: "Спасибо за угощение (после еды)",
    transcriptionEn: "go~chi~so~u~sa~ma~de~shi~ta",
    translationEn: "Thank you for the meal",
    wordsRu: [
      "ごちそうさまでした (gochisousama deshita) - (формула после еды)",
    ],
    wordsEn: [
      "ごちそうさまでした (gochisousama deshita) - (phrase after eating)",
    ],
  },

  // --- 6. ---
  {
    phrase: "私の名前は桜です",
    transcriptionRu: "ва~та~си но на~ма~э ва са~ку~ра дэ~с",
    translationRu: "Меня зовут Сакура",
    transcriptionEn: "wa~ta~shi no na~ma~e wa sa~ku~ra de~su",
    translationEn: "My name is Sakura",
    wordsRu: [
      "私 (watashi) - я",
      "の (no) - частица принадлежности",
      "名前 (namae) - имя",
      "は (wa) - частица темы",
      "桜 (Sakura) - Сакура",
      "です (desu) - глагол-связка",
    ],
    wordsEn: [
      "私 (watashi) - I",
      "の (no) - possessive particle",
      "名前 (namae) - name",
      "は (wa) - topic particle",
      "桜 (Sakura) - Sakura",
      "です (desu) - am/is",
    ],
  },

  // --- 7. ---
  {
    phrase: "おはようございます（お早うございます）",
    transcriptionRu: "о~ха~йо~у го~за~й~ма~с",
    translationRu: "Доброе утро",
    transcriptionEn: "o~ha~yo~u go~za~i~ma~su",
    translationEn: "Good morning",
    wordsRu: [
      "おはよう (ohayou) - доброе утро (неформ.)",
      "ございます (gozaimasu) - вежливое окончание",
    ],
    wordsEn: [
      "おはよう (ohayou) - good morning (casual)",
      "ございます (gozaimasu) - polite suffix",
    ],
  },

  // --- 8. ---
  {
    phrase: "こんにちは（今日は）",
    transcriptionRu: "ко~н~ни~чи~ва",
    translationRu: "Добрый день",
    transcriptionEn: "ko~n~ni~chi~wa",
    translationEn: "Hello / Good afternoon",
    wordsRu: [
      "こんにちは (konnichiwa) - добрый день",
      // 今日は (kyou wa) — вариант написания, но редко используется именно так в речи.
    ],
    wordsEn: ["こんにちは (konnichiwa) - hello / good afternoon"],
  },

  // --- 9. ---
  {
    phrase: "こんばんは（今晩は）",
    transcriptionRu: "ко~н~ба~н~ва",
    translationRu: "Добрый вечер",
    transcriptionEn: "ko~n~ban~wa",
    translationEn: "Good evening",
    wordsRu: ["こんばんは (konbanwa) - добрый вечер"],
    wordsEn: ["こんばんは (konbanwa) - good evening"],
  },

  // --- 10. ---
  {
    phrase: "さようなら",
    transcriptionRu: "са~йо~у~на~ра",
    translationRu: "До свидания",
    transcriptionEn: "sa~yo~u~na~ra",
    translationEn: "Goodbye",
    wordsRu: ["さようなら (sayounara) - до свидания"],
    wordsEn: ["さようなら (sayounara) - goodbye"],
  },

  // --- 11. ---
  {
    phrase: "ありがとう（有難う）",
    transcriptionRu: "а~ри~га~то",
    translationRu: "Спасибо",
    transcriptionEn: "a~ri~ga~to",
    translationEn: "Thank you",
    wordsRu: ["ありがとう (arigatou) - спасибо"],
    wordsEn: ["ありがとう (arigatou) - thank you"],
  },

  // --- 12. ---
  {
    phrase: "すみません（済みません）",
    transcriptionRu: "су~ми~ма~сэн",
    translationRu: "Извините / Простите",
    transcriptionEn: "su~mi~ma~sen",
    translationEn: "Excuse me / I'm sorry",
    wordsRu: ["すみません (sumimasen) - извините / простите"],
    wordsEn: ["すみません (sumimasen) - excuse me / I'm sorry"],
  },

  // --- 13. ---
  {
    phrase: "頑張ってください",
    transcriptionRu: "ган~ба~ттэ ку~да~са~й",
    translationRu: "Удачи / Постарайся!",
    transcriptionEn: "gan~ba~tte ku~da~sa~i",
    translationEn: "Do your best / Good luck",
    wordsRu: [
      "頑張って (ganbatte) - старайся / держись",
      "ください (kudasai) - пожалуйста (вежл.)",
    ],
    wordsEn: [
      "頑張って (ganbatte) - do your best / hang in there",
      "ください (kudasai) - please (polite request)",
    ],
  },

  // --- 14. ---
  {
    phrase: "大丈夫ですか",
    transcriptionRu: "да~й~дзё~у~бу дэ~с ка",
    translationRu: "Всё в порядке?",
    transcriptionEn: "da~i~jo~u~bu de~su ka",
    translationEn: "Are you okay?",
    wordsRu: [
      "大丈夫 (daijoubu) - всё в порядке",
      "です (desu) - глагол-связка",
      "か (ka) - вопрос",
    ],
    wordsEn: [
      "大丈夫 (daijoubu) - all right / ok",
      "です (desu) - is",
      "か (ka) - question",
    ],
  },

  // --- 15. ---
  {
    phrase: "いってきます（行ってきます）",
    transcriptionRu: "и~ттэ~ки~ма~с",
    translationRu: "Я пошёл (говорят, уходя из дома)",
    transcriptionEn: "i~tte~ki~ma~su",
    translationEn: "I'm off / I'll go and come back",
    wordsRu: ["いってきます (ittekimasu) - (дословно «уйду и вернусь»)"],
    wordsEn: ["いってきます (ittekimasu) - (lit. 'I will go and come back')"],
  },

  // ===== НИЖЕ НОВЫЕ 30 ФРАЗ ДЛЯ НАЧАЛЬНОГО УРОВНЯ =====

  // --- 16. ---
  {
    phrase: "おやすみなさい（お休みなさい）",
    transcriptionRu: "о~я~су~ми на~са~й",
    translationRu: "Спокойной ночи",
    transcriptionEn: "o~ya~su~mi na~sa~i",
    translationEn: "Good night",
    wordsRu: [
      "おやすみなさい (oyasuminasai) - спокойной ночи",
      // お休みなさい - формальное написание с кандзи 休
    ],
    wordsEn: ["おやすみなさい (oyasuminasai) - good night"],
  },

  // --- 17. ---
  {
    phrase: "もしもし",
    transcriptionRu: "мо~си~мо~си",
    translationRu: "Алло (приветствие по телефону)",
    transcriptionEn: "mo~shi~mo~shi",
    translationEn: "Hello (on the phone)",
    wordsRu: ["もしもし (moshi moshi) - алло / привет по телефону"],
    wordsEn: ["もしもし (moshi moshi) - hello (phone greeting)"],
  },

  // --- 18. ---
  {
    phrase: "はじめまして（初めまして）",
    transcriptionRu: "ха~дзи~мэ~ма~с~тэ",
    translationRu: "Приятно познакомиться",
    transcriptionEn: "ha~ji~me~ma~shi~te",
    translationEn: "Nice to meet you",
    wordsRu: [
      "はじめまして (hajimemashite) - рад познакомиться",
      // 初めまして - каноничная запись
    ],
    wordsEn: ["はじめまして (hajimemashite) - nice to meet you"],
  },

  // --- 19. ---
  {
    phrase: "どうぞ",
    transcriptionRu: "до~у~дзо",
    translationRu: "Пожалуйста (при передаче предмета / приглашении)",
    transcriptionEn: "do~u~zo",
    translationEn: "Here you are / Please (go ahead)",
    wordsRu: ["どうぞ (douzo) - пожалуйста (угощайтесь / возьмите)"],
    wordsEn: ["どうぞ (douzo) - here you are / please go ahead"],
  },

  // --- 20. ---
  {
    phrase: "どこですか",
    transcriptionRu: "до~ко дэ~с ка",
    translationRu: "Где это?",
    transcriptionEn: "do~ko de~su ka",
    translationEn: "Where is it?",
    wordsRu: [
      "どこ (doko) - где",
      "です (desu) - глагол-связка",
      "か (ka) - вопрос",
    ],
    wordsEn: ["どこ (doko) - where", "です (desu) - is", "か (ka) - question"],
  },

  // --- 21. ---
  {
    phrase: "いくらですか",
    transcriptionRu: "и~ку~ра дэ~с ка",
    translationRu: "Сколько это стоит?",
    transcriptionEn: "i~ku~ra de~su ka",
    translationEn: "How much is it?",
    wordsRu: [
      "いくら (ikura) - сколько (о цене)",
      "です (desu) - глагол-связка",
      "か (ka) - вопрос",
    ],
    wordsEn: [
      "いくら (ikura) - how much",
      "です (desu) - is",
      "か (ka) - question",
    ],
  },

  // --- 22. ---
  {
    phrase: "わかりません（分かりません）",
    transcriptionRu: "ва~ка~ри~ма~сэ~н",
    translationRu: "Я не понимаю / Не знаю",
    transcriptionEn: "wa~ka~ri~ma~sen",
    translationEn: "I don't understand / I don't know",
    wordsRu: [
      "わかりません (wakarimasen) - не понимаю / не знаю",
      // 分かりません — вариант с кандзи
    ],
    wordsEn: ["わかりません (wakarimasen) - I don't understand / I don't know"],
  },

  // --- 23. ---
  {
    phrase: "ゆっくりお願いします（ゆっくりお願いします）",
    transcriptionRu: "ю~кку~ри о~не~га~й~ши~ма~с",
    translationRu: "Помедленнее, пожалуйста",
    transcriptionEn: "yu~kku~ri o~ne~ga~i~shi~ma~su",
    translationEn: "Please speak slowly",
    wordsRu: [
      "ゆっくり (yukkuri) - медленно",
      "お願いします (onegaishimasu) - пожалуйста",
    ],
    wordsEn: [
      "ゆっくり (yukkuri) - slowly",
      "お願いします (onegaishimasu) - please",
    ],
  },

  // --- 24. ---
  {
    phrase: "もう一度お願いします（もう一度お願いします）",
    transcriptionRu: "мо~у и~ти~до о~не~га~й~ши~ма~с",
    translationRu: "Повторите, пожалуйста",
    transcriptionEn: "mo~u i~chi~do o~ne~ga~i~shi~ma~su",
    translationEn: "Please say it again",
    wordsRu: [
      "もう一度 (mou ichido) - ещё раз",
      "お願いします (onegaishimasu) - пожалуйста",
    ],
    wordsEn: [
      "もう一度 (mou ichido) - one more time",
      "お願いします (onegaishimasu) - please",
    ],
  },

  // --- 25. ---
  {
    phrase: "これは何ですか",
    transcriptionRu: "ко~рэ ва нан дэ~с ка",
    translationRu: "Что это?",
    transcriptionEn: "ko~re wa nan de~su ka",
    translationEn: "What is this?",
    wordsRu: [
      "これ (kore) - это",
      "は (wa) - частица темы",
      "何 (nan) - что",
      "です (desu) - глагол-связка",
      "か (ka) - вопрос",
    ],
    wordsEn: [
      "これ (kore) - this",
      "は (wa) - topic particle",
      "何 (nan) - what",
      "です (desu) - is",
      "か (ka) - question",
    ],
  },

  // --- 26. ---
  {
    phrase: "英語が話せますか",
    transcriptionRu: "эй~го га ха~на~сэ~ма~с ка",
    translationRu: "Вы говорите по-английски?",
    transcriptionEn: "e~i~go ga ha~na~se~ma~su ka",
    translationEn: "Can you speak English?",
    wordsRu: [
      "英語 (eigo) - английский язык",
      "が (ga) - частица (подлежащего/объекта)",
      "話せます (hanasemasu) - уметь говорить (вежл.)",
      "か (ka) - вопрос",
    ],
    wordsEn: [
      "英語 (eigo) - English",
      "が (ga) - subject marker",
      "話せます (hanasemasu) - can speak (polite)",
      "か (ka) - question",
    ],
  },

  // --- 27. ---
  {
    phrase: "日本語が話せません",
    transcriptionRu: "ни~хон~го га ха~на~сэ~ма~сэ~н",
    translationRu: "Я не говорю по-японски",
    transcriptionEn: "ni~hon~go ga ha~na~se~ma~sen",
    translationEn: "I can't speak Japanese",
    wordsRu: [
      "日本語 (nihongo) - японский язык",
      "が (ga) - частица (подлежащего/объекта)",
      "話せません (hanasemasen) - не могу говорить / не говорю",
    ],
    wordsEn: [
      "日本語 (nihongo) - Japanese (language)",
      "が (ga) - subject marker",
      "話せません (hanasemasen) - can't speak",
    ],
  },

  // --- 28. ---
  {
    phrase: "失礼します",
    transcriptionRu: "си~цу~рэй ши~ма~с",
    translationRu: "Извините (за беспокойство) / До свидания (вежливо)",
    transcriptionEn: "shi~tsu~rei shi~ma~su",
    translationEn: "Excuse me / I'll be leaving (polite)",
    wordsRu: [
      "失礼 (shitsurei) - невежливость, неудобство",
      "します (shimasu) - делать",
    ],
    wordsEn: [
      "失礼 (shitsurei) - rudeness / excuse",
      "します (shimasu) - to do",
    ],
  },

  // --- 29. ---
  {
    phrase: "はい / いいえ",
    transcriptionRu: "ха~й / и~и~э",
    translationRu: "Да / Нет",
    transcriptionEn: "hai / i~i~e",
    translationEn: "Yes / No",
    wordsRu: ["はい (hai) - да", "いいえ (iie) - нет"],
    wordsEn: ["はい (hai) - yes", "いいえ (iie) - no"],
  },

  // --- 30. ---
  {
    phrase: "大きい / 小さい",
    transcriptionRu: "о~о~ки~й / ти~са~й",
    translationRu: "Большой / Маленький",
    transcriptionEn: "oo~kii / chi~sai",
    translationEn: "Big / Small",
    wordsRu: ["大きい (ookii) - большой", "小さい (chiisai) - маленький"],
    wordsEn: ["大きい (ookii) - big", "小さい (chiisai) - small"],
  },

  // --- 31. ---
  {
    phrase: "暑いですね",
    transcriptionRu: "а~цу~и дэс нэ",
    translationRu: "Жарко, да?",
    transcriptionEn: "a~tsu~i desu ne",
    translationEn: "It's hot, isn't it?",
    wordsRu: [
      "暑い (atsui) - жарко (о погоде / температуре)",
      "ですね (desu ne) - не правда ли?",
    ],
    wordsEn: ["暑い (atsui) - hot", "ですね (desu ne) - isn't it?"],
  },

  // --- 32. ---
  {
    phrase: "寒いですね",
    transcriptionRu: "са~му~и дэс нэ",
    translationRu: "Холодно, да?",
    transcriptionEn: "sa~mu~i desu ne",
    translationEn: "It's cold, isn't it?",
    wordsRu: [
      "寒い (samui) - холодно (о погоде)",
      "ですね (desu ne) - не правда ли?",
    ],
    wordsEn: ["寒い (samui) - cold", "ですね (desu ne) - isn't it?"],
  },

  // --- 33. ---
  {
    phrase: "いい天気ですね",
    transcriptionRu: "и~и тэн~ки дэс нэ",
    translationRu: "Хорошая погода, да?",
    transcriptionEn: "i~i ten~ki desu ne",
    translationEn: "Nice weather, isn't it?",
    wordsRu: [
      "いい (ii) - хороший",
      "天気 (tenki) - погода",
      "ですね (desu ne) - не правда ли?",
    ],
    wordsEn: [
      "いい (ii) - good",
      "天気 (tenki) - weather",
      "ですね (desu ne) - isn't it?",
    ],
  },

  // --- 34. ---
  {
    phrase: "お願いします（お願いします）",
    transcriptionRu: "о~не~га~й~ши~ма~с",
    translationRu: "Пожалуйста (при просьбе) / Прошу вас",
    transcriptionEn: "o~ne~ga~i~shi~ma~su",
    translationEn: "Please / I beg of you",
    wordsRu: ["お願いします (onegaishimasu) - пожалуйста, прошу"],
    wordsEn: ["お願いします (onegaishimasu) - please"],
  },

  // --- 35. ---
  {
    phrase: "ありがとうございます（有難うございます）",
    transcriptionRu: "а~ри~га~то~у го~за~й~ма~с",
    translationRu: "Спасибо (вежливо)",
    transcriptionEn: "a~ri~ga~tou go~za~i~ma~su",
    translationEn: "Thank you (polite)",
    wordsRu: ["ありがとうございます (arigatou gozaimasu) - спасибо (вежливо)"],
    wordsEn: ["ありがとうございます (arigatou gozaimasu) - thank you (polite)"],
  },

  // --- 36. ---
  {
    phrase: "分かります",
    transcriptionRu: "ва~ка~ри~ма~с",
    translationRu: "Понимаю",
    transcriptionEn: "wa~ka~ri~ma~su",
    translationEn: "I understand",
    wordsRu: [
      "分かる (wakaru) - понимать",
      "ます (masu) - вежливое окончание глагола",
    ],
    wordsEn: ["分かる (wakaru) - to understand", "ます (masu) - polite suffix"],
  },

  // --- 37. ---
  {
    phrase: "友達になりましょう",
    transcriptionRu: "то~мо~да~чи ни на~ри~ма~шо~у",
    translationRu: "Давай будем друзьями",
    transcriptionEn: "to~mo~da~chi ni na~ri~ma~shou",
    translationEn: "Let's be friends",
    wordsRu: [
      "友達 (tomodachi) - друзья",
      "に (ni) - частица направления/назначения",
      "なりましょう (narimashou) - давай станем (вежл. форма призыва)",
    ],
    wordsEn: [
      "友達 (tomodachi) - friends",
      "に (ni) - to / into",
      "なりましょう (narimashou) - let's become",
    ],
  },

  // --- 38. ---
  {
    phrase: "どうしましたか",
    transcriptionRu: "до~у~ши~ма~ши~та ка",
    translationRu: "Что случилось? / Что такое?",
    transcriptionEn: "do~u shi~ma~shi~ta ka",
    translationEn: "What's wrong? / What happened?",
    wordsRu: [
      "どう (dou) - как / что",
      "しました (shimashita) - сделали / произошло (прош. форма)",
      "か (ka) - вопрос",
    ],
    wordsEn: [
      "どう (dou) - how / what",
      "しました (shimashita) - did / happened (past tense)",
      "か (ka) - question",
    ],
  },

  // --- 39. ---
  {
    phrase: "少々お待ちください",
    transcriptionRu: "шо~о~шо~о о~ма~чи ку~да~са~й",
    translationRu: "Подождите, пожалуйста",
    transcriptionEn: "sho~u~sho~u o~ma~chi ku~da~sa~i",
    translationEn: "Please wait a moment",
    wordsRu: [
      "少々 (shoushou) - немного / чуть-чуть",
      "お待ちください (o-machi kudasai) - подождите, пожалуйста",
    ],
    wordsEn: [
      "少々 (shoushou) - a little / a moment",
      "お待ちください (o-machi kudasai) - please wait",
    ],
  },

  // --- 40. ---
  {
    phrase: "おめでとうございます",
    transcriptionRu: "о~мэ~дэ~то~у го~за~й~ма~с",
    translationRu: "Поздравляю",
    transcriptionEn: "o~me~de~tou go~za~i~ma~su",
    translationEn: "Congratulations",
    wordsRu: [
      "おめでとう (omedetou) - поздравляю",
      "ございます (gozaimasu) - вежливое окончание",
    ],
    wordsEn: [
      "おめでとう (omedetou) - congratulations",
      "ございます (gozaimasu) - polite suffix",
    ],
  },

  // --- 41. ---
  {
    phrase: "行ってらっしゃい",
    transcriptionRu: "и~ттэ ра~щ~ша~й",
    translationRu: "Счастливо (тем, кто уходит)",
    transcriptionEn: "i~tte ra~ssha~i",
    translationEn: "Have a good day / Take care",
    wordsRu: [
      "行って (itte) - иди, отправляйся",
      "らっしゃい (rasshai) - (уважительная форма «будь добр идти»)",
    ],
    wordsEn: [
      "行って (itte) - go",
      "らっしゃい (rasshai) - polite/honorific way to say 'please go'",
    ],
  },

  // --- 42. ---
  {
    phrase: "ただいま",
    transcriptionRu: "та~да~и~ма",
    translationRu: "Я дома (говорят, вернувшись домой)",
    transcriptionEn: "ta~da~i~ma",
    translationEn: "I'm home",
    wordsRu: [
      "ただいま (tadaima) - (дословно «сейчас») - формула «Я вернулся»",
    ],
    wordsEn: ["ただいま (tadaima) - literally 'just now' / I'm home"],
  },

  // --- 43. ---
  {
    phrase: "おかえりなさい",
    transcriptionRu: "о~ка~э~ри на~са~й",
    translationRu: "С возвращением (ответ на «Я дома»)",
    transcriptionEn: "o~ka~e~ri na~sa~i",
    translationEn: "Welcome back",
    wordsRu: ["おかえりなさい (okaerinasai) - добро пожаловать обратно"],
    wordsEn: ["おかえりなさい (okaerinasai) - welcome back"],
  },

  // --- 44. ---
  {
    phrase: "大好きです",
    transcriptionRu: "да~й~су~ки дэ~с",
    translationRu: "Очень люблю",
    transcriptionEn: "da~i~su~ki de~su",
    translationEn: "I really like (you / it)",
    wordsRu: [
      "大好き (daisuki) - очень нравится / люблю",
      "です (desu) - глагол-связка",
    ],
    wordsEn: ["大好き (daisuki) - really like / love", "です (desu) - is"],
  },

  // --- 45. ---
  {
    phrase: "気をつけてください",
    transcriptionRu: "ки о цу~кэ~тэ ку~да~са~й",
    translationRu: "Берегите себя / Будьте осторожны",
    transcriptionEn: "ki o tsu~ke~te ku~da~sa~i",
    translationEn: "Take care / Be careful",
    wordsRu: [
      "気をつける (ki o tsukeru) - быть осторожным",
      "ください (kudasai) - пожалуйста (вежл. просьба)",
    ],
    wordsEn: [
      "気をつける (ki o tsukeru) - to be careful",
      "ください (kudasai) - please (polite request)",
    ],
  },
];
