export type LessonPoint = {
  title: string;
  explanation: string;
};

export type PracticeQuestion = {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

export type Chapter = {
  id: string;
  order: number;
  title: string;
  description: string;
  estimatedMinutes: number;
  lesson: {
    introduction: string;
    points: LessonPoint[];
    example?: string;
  };
  practice: PracticeQuestion[];
};

export type LearningPath = {
  id: string;
  title: string;
  category: string;
  icon: string;
  description: string;
  estimatedMinutes: number;
  chapters: Chapter[];
};

export const learningPaths: LearningPath[] = [
  // ============================================================
  // LANGUAGES
  // ============================================================

  {
    id: "japanese-foundation",
    title: "Japanese Foundation",
    category: "Languages",
    icon: "🇯🇵",
    description:
      "Build a strong beginner foundation in Japanese from scripts and greetings to basic sentences.",
    estimatedMinutes: 20,
    chapters: [
      {
        id: "jp-01",
        order: 1,
        title: "Hiragana & Pronunciation",
        description: "Learn the basic Japanese writing system and pronunciation.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Hiragana is one of the main Japanese writing systems and is essential for beginners.",
          points: [
            {
              title: "Hiragana",
              explanation: "Represents Japanese sounds and is widely used for native words and grammar.",
            },
            {
              title: "Five vowels",
              explanation: "Japanese has five basic vowel sounds: a, i, u, e and o.",
            },
            {
              title: "Pronunciation",
              explanation: "Kana sounds are generally regular, making them useful for reading new words.",
            },
          ],
          example: "あ = a, い = i, う = u, え = e, お = o",
        },
        practice: [
          {
            question: "Which Japanese script is commonly learned first?",
            options: ["Hiragana", "Kanji", "Arabic", "Hangul"],
            correctAnswer: "Hiragana",
            explanation:
              "Hiragana is one of the first scripts beginners normally learn.",
          },
        ],
      },
      {
        id: "jp-02",
        order: 2,
        title: "Hiragana Vowels",
        description: "Master the five basic hiragana vowels and their sounds.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "The five basic vowel sounds form the foundation for reading hiragana rows.",
          points: [
            {
              title: "あ (a)",
              explanation: "Read as a.",
            },
            {
              title: "い (i)",
              explanation: "Read as i.",
            },
            {
              title: "う (u)",
              explanation: "Read as u.",
            },
            {
              title: "え (e)",
              explanation: "Read as e.",
            },
          ],
          example: "お (o) is read o.",
        },
        practice: [
          {
            question: "Which hiragana represents the sound \"e\"?",
            options: ["あ", "い", "え", "お"],
            correctAnswer: "え",
            explanation:
              "え represents the basic e sound.",
          },
        ],
      },
      {
        id: "jp-03",
        order: 3,
        title: "K-Row Hiragana",
        description: "Learn the か・き・く・け・こ row.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "The K-row adds k sounds to the five vowel patterns.",
          points: [
            {
              title: "か",
              explanation: "ka",
            },
            {
              title: "き",
              explanation: "ki",
            },
            {
              title: "く",
              explanation: "ku",
            },
            {
              title: "け・こ",
              explanation: "ke and ko",
            },
          ],
          example: "か・き・く・け・こ = ka, ki, ku, ke, ko",
        },
        practice: [
          {
            question: "Which kana is read \"ki\"?",
            options: ["か", "き", "く", "こ"],
            correctAnswer: "き",
            explanation:
              "き is read ki.",
          },
        ],
      },
      {
        id: "jp-04",
        order: 4,
        title: "S-Row Hiragana",
        description: "Learn the さ・し・す・せ・そ row.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "The S-row has mostly s sounds, with し pronounced shi.",
          points: [
            {
              title: "さ",
              explanation: "sa",
            },
            {
              title: "し",
              explanation: "shi",
            },
            {
              title: "す",
              explanation: "su",
            },
            {
              title: "せ・そ",
              explanation: "se and so",
            },
          ],
          example: "さ・し・す・せ・そ = sa, shi, su, se, so",
        },
        practice: [
          {
            question: "Which kana is read \"shi\"?",
            options: ["さ", "し", "す", "せ"],
            correctAnswer: "し",
            explanation:
              "し is read shi.",
          },
        ],
      },
      {
        id: "jp-05",
        order: 5,
        title: "T-Row Hiragana",
        description: "Learn the た・ち・つ・て・と row.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "The T-row includes the important chi and tsu sounds.",
          points: [
            {
              title: "た",
              explanation: "ta",
            },
            {
              title: "ち",
              explanation: "chi",
            },
            {
              title: "つ",
              explanation: "tsu",
            },
            {
              title: "て・と",
              explanation: "te and to",
            },
          ],
          example: "た・ち・つ・て・と = ta, chi, tsu, te, to",
        },
        practice: [
          {
            question: "Which kana is read \"tsu\"?",
            options: ["た", "ち", "つ", "て"],
            correctAnswer: "つ",
            explanation:
              "つ is read tsu.",
          },
        ],
      },
      {
        id: "jp-06",
        order: 6,
        title: "N-Row Hiragana",
        description: "Learn the な・に・ぬ・ね・の row.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "The N-row follows a regular beginner-friendly pattern.",
          points: [
            {
              title: "な",
              explanation: "na",
            },
            {
              title: "に",
              explanation: "ni",
            },
            {
              title: "ぬ",
              explanation: "nu",
            },
            {
              title: "ね・の",
              explanation: "ne and no",
            },
          ],
          example: "な・に・ぬ・ね・の = na, ni, nu, ne, no",
        },
        practice: [
          {
            question: "Which kana is read \"ne\"?",
            options: ["な", "に", "ね", "の"],
            correctAnswer: "ね",
            explanation:
              "ね is read ne.",
          },
        ],
      },
      {
        id: "jp-07",
        order: 7,
        title: "H-Row Hiragana",
        description: "Learn the は・ひ・ふ・へ・ほ row.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "The H-row mostly uses h sounds, while ふ is commonly romanized fu.",
          points: [
            {
              title: "は",
              explanation: "ha",
            },
            {
              title: "ひ",
              explanation: "hi",
            },
            {
              title: "ふ",
              explanation: "fu",
            },
            {
              title: "へ・ほ",
              explanation: "he and ho",
            },
          ],
          example: "は・ひ・ふ・へ・ほ = ha, hi, fu, he, ho",
        },
        practice: [
          {
            question: "Which kana is commonly read \"fu\"?",
            options: ["は", "ひ", "ふ", "ほ"],
            correctAnswer: "ふ",
            explanation:
              "ふ is commonly romanized fu.",
          },
        ],
      },
      {
        id: "jp-08",
        order: 8,
        title: "M-Row Hiragana",
        description: "Learn the ま・み・む・め・も row.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "The M-row follows the ma-mi-mu-me-mo pattern.",
          points: [
            {
              title: "ま",
              explanation: "ma",
            },
            {
              title: "み",
              explanation: "mi",
            },
            {
              title: "む",
              explanation: "mu",
            },
            {
              title: "め・も",
              explanation: "me and mo",
            },
          ],
          example: "ま・み・む・め・も = ma, mi, mu, me, mo",
        },
        practice: [
          {
            question: "Which kana is read \"mu\"?",
            options: ["ま", "み", "む", "も"],
            correctAnswer: "む",
            explanation:
              "む is read mu.",
          },
        ],
      },
      {
        id: "jp-09",
        order: 9,
        title: "Y/R/W Hiragana",
        description: "Learn the remaining basic Y, R and W sounds plus ん.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "These final basic kana include fewer characters and some sounds that need extra attention.",
          points: [
            {
              title: "や・ゆ・よ",
              explanation: "ya, yu and yo",
            },
            {
              title: "ら・り・る・れ・ろ",
              explanation: "ra, ri, ru, re and ro",
            },
            {
              title: "わ・を",
              explanation: "wa and o when を is a particle",
            },
            {
              title: "ん",
              explanation: "The standalone n sound.",
            },
          ],
          example: "ん = n",
        },
        practice: [
          {
            question: "Which kana represents the standalone n sound?",
            options: ["や", "ら", "を", "ん"],
            correctAnswer: "ん",
            explanation:
              "ん represents the standalone n sound.",
          },
        ],
      },
      {
        id: "jp-10",
        order: 10,
        title: "Dakuten & Handakuten",
        description: "Learn how marks change hiragana sounds.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Dakuten and handakuten add marks to certain kana to create new sounds.",
          points: [
            {
              title: "Dakuten",
              explanation: "Two marks can voice sounds such as か → が.",
            },
            {
              title: "Handakuten",
              explanation: "A small circle changes H-row sounds into P sounds.",
            },
            {
              title: "Examples",
              explanation: "さ → ざ and は → ぱ show sound changes.",
            },
          ],
          example: "が = ga, ぱ = pa",
        },
        practice: [
          {
            question: "Which kana represents \"ga\"?",
            options: ["か", "が", "さ", "ぱ"],
            correctAnswer: "が",
            explanation:
              "が is read ga.",
          },
        ],
      },
      {
        id: "jp-11",
        order: 11,
        title: "Small ゃ・ゅ・ょ & っ",
        description: "Learn combination sounds and the small tsu.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Small kana create contracted sounds, while small っ changes the rhythm of pronunciation.",
          points: [
            {
              title: "ゃ・ゅ・ょ",
              explanation: "Combine with certain kana to form sounds like kya, kyu and kyo.",
            },
            {
              title: "Small っ",
              explanation: "Indicates a short consonant pause or doubled consonant.",
            },
            {
              title: "Combination",
              explanation: "きゃ is read kya.",
            },
          ],
          example: "きゃ = kya",
        },
        practice: [
          {
            question: "How is きゃ commonly read?",
            options: ["ka", "kya", "kiya", "kyo"],
            correctAnswer: "kya",
            explanation:
              "きゃ forms the contracted sound kya.",
          },
        ],
      },
      {
        id: "jp-12",
        order: 12,
        title: "Hiragana Reading Practice",
        description: "Use the hiragana you learned to read simple words.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Reading short words turns kana recognition into actual reading ability.",
          points: [
            {
              title: "Blend sounds",
              explanation: "Read kana together rather than separately.",
            },
            {
              title: "Simple words",
              explanation: "すし and ねこ are useful beginner words.",
            },
            {
              title: "Accuracy",
              explanation: "Focus on correct recognition before speed.",
            },
          ],
          example: "ねこ = neko = cat",
        },
        practice: [
          {
            question: "What does ねこ mean?",
            options: ["Cat", "Dog", "Book", "Water"],
            correctAnswer: "Cat",
            explanation:
              "ねこ (neko) means cat.",
          },
        ],
      },
      {
        id: "jp-13",
        order: 13,
        title: "Basic Greetings",
        description: "Learn common polite greetings for different situations.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Japanese greetings depend on time of day and situation.",
          points: [
            {
              title: "Ohayou gozaimasu",
              explanation: "Polite good morning.",
            },
            {
              title: "Konnichiwa",
              explanation: "Common daytime greeting.",
            },
            {
              title: "Konbanwa",
              explanation: "Common evening greeting.",
            },
            {
              title: "Arigatou gozaimasu",
              explanation: "Polite thank you.",
            },
          ],
          example: "Konnichiwa = hello / good afternoon",
        },
        practice: [
          {
            question: "Which expression means thank you?",
            options: ["Ohayou gozaimasu", "Arigatou gozaimasu", "Konbanwa", "Sumimasen"],
            correctAnswer: "Arigatou gozaimasu",
            explanation:
              "It is a polite expression meaning thank you.",
          },
        ],
      },
      {
        id: "jp-14",
        order: 14,
        title: "Everyday Expressions",
        description: "Learn useful phrases for simple daily interactions.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "A beginner needs practical expressions that can be used immediately.",
          points: [
            {
              title: "Sumimasen",
              explanation: "Excuse me / sorry in common situations.",
            },
            {
              title: "Wakarimasen",
              explanation: "I do not understand.",
            },
            {
              title: "Daijoubu",
              explanation: "Okay / all right.",
            },
            {
              title: "Dou itashimashite",
              explanation: "A polite response to thank you.",
            },
          ],
          example: "Wakarimasen = I do not understand",
        },
        practice: [
          {
            question: "What does wakarimasen mean?",
            options: ["I understand", "I do not understand", "Thank you", "Good morning"],
            correctAnswer: "I do not understand",
            explanation:
              "Wakarimasen means I do not understand.",
          },
        ],
      },
      {
        id: "jp-15",
        order: 15,
        title: "Self-Introduction",
        description: "Build a simple Japanese self-introduction.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Self-introduction is one of the most useful beginner conversations.",
          points: [
            {
              title: "Watashi wa",
              explanation: "Used to introduce yourself or state something about yourself.",
            },
            {
              title: "Name",
              explanation: "Watashi wa [name] desu is a basic pattern.",
            },
            {
              title: "Desu",
              explanation: "Common polite ending for beginner noun sentences.",
            },
            {
              title: "Yoroshiku onegaishimasu",
              explanation: "Often used at the end of a self-introduction.",
            },
          ],
          example: "Watashi wa Jeevitha desu.",
        },
        practice: [
          {
            question: "Which pattern means \"I am ...\"?",
            options: ["Watashi wa ... desu", "Watashi o ... desu", "Watashi ni ...", "Watashi de ..."],
            correctAnswer: "Watashi wa ... desu",
            explanation:
              "It is a basic pattern for introducing yourself.",
          },
        ],
      },
      {
        id: "jp-16",
        order: 16,
        title: "Numbers",
        description: "Learn basic Japanese numbers from one to ten.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Numbers are used in prices, ages, quantities and everyday situations.",
          points: [
            {
              title: "1–5",
              explanation: "ichi, ni, san, yon/shi, go.",
            },
            {
              title: "6–10",
              explanation: "roku, nana/shichi, hachi, kyuu, juu.",
            },
            {
              title: "Practice",
              explanation: "Learn both sound and written form.",
            },
          ],
          example: "san = 3",
        },
        practice: [
          {
            question: "What does san mean?",
            options: ["One", "Two", "Three", "Five"],
            correctAnswer: "Three",
            explanation:
              "San is the Japanese number three.",
          },
        ],
      },
      {
        id: "jp-17",
        order: 17,
        title: "Days & Dates",
        description: "Learn basic words for days, dates and calendar talk.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Japanese calendar expressions combine numbers with words for days and months.",
          points: [
            {
              title: "Weekdays",
              explanation: "Getsuyoubi, kayoubi and other weekday names.",
            },
            {
              title: "Dates",
              explanation: "Some dates have special readings.",
            },
            {
              title: "Months",
              explanation: "Months are commonly number + gatsu.",
            },
          ],
          example: "Getsuyoubi = Monday",
        },
        practice: [
          {
            question: "Which day is getsuyoubi?",
            options: ["Monday", "Tuesday", "Friday", "Sunday"],
            correctAnswer: "Monday",
            explanation:
              "Getsuyoubi means Monday.",
          },
        ],
      },
      {
        id: "jp-18",
        order: 18,
        title: "Time Expressions",
        description: "Learn how to say hours and simple time expressions.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Time expressions are useful for schedules and appointments.",
          points: [
            {
              title: "Ji",
              explanation: "Used for hours.",
            },
            {
              title: "Fun / pun",
              explanation: "Used for minutes, with pronunciation changes in some numbers.",
            },
            {
              title: "Gozen / gogo",
              explanation: "AM and PM expressions.",
            },
          ],
          example: "San-ji = 3 o’clock",
        },
        practice: [
          {
            question: "What does san-ji mean?",
            options: ["3 o’clock", "3 minutes", "3 days", "3 people"],
            correctAnswer: "3 o’clock",
            explanation:
              "San-ji means three o’clock.",
          },
        ],
      },
      {
        id: "jp-19",
        order: 19,
        title: "Basic Sentence Structure",
        description: "Understand the order of simple Japanese sentences.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Japanese sentence structure differs from English, so the basic pattern is important.",
          points: [
            {
              title: "Topic",
              explanation: "Often marked with は.",
            },
            {
              title: "Predicate",
              explanation: "Generally comes at the end.",
            },
            {
              title: "Politeness",
              explanation: "Beginner polite sentences often end with desu or polite verbs.",
            },
          ],
          example: "Watashi wa gakusei desu.",
        },
        practice: [
          {
            question: "What generally comes at the end of a basic Japanese sentence?",
            options: ["The predicate", "The topic only", "The greeting", "The subject always"],
            correctAnswer: "The predicate",
            explanation:
              "The predicate generally comes at the end.",
          },
        ],
      },
      {
        id: "jp-20",
        order: 20,
        title: "は Particle",
        description: "Learn how は marks the topic of a sentence.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "The particle は tells the listener what the sentence is mainly about.",
          points: [
            {
              title: "Topic marker",
              explanation: "は commonly marks the topic.",
            },
            {
              title: "Pronunciation",
              explanation: "As a particle, は is pronounced wa.",
            },
            {
              title: "Contrast",
              explanation: "It can also create contrast depending on context.",
            },
          ],
          example: "Watashi wa gakusei desu.",
        },
        practice: [
          {
            question: "What is the main role of は?",
            options: ["Mark the topic", "Mark the object", "Mark the location", "Mark past tense"],
            correctAnswer: "Mark the topic",
            explanation:
              "は commonly marks the topic.",
          },
        ],
      },
      {
        id: "jp-21",
        order: 21,
        title: "を & に Particles",
        description: "Learn two important particles for beginner sentences.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "を and に have different jobs and appear frequently.",
          points: [
            {
              title: "を",
              explanation: "Commonly marks the direct object and is pronounced o.",
            },
            {
              title: "に",
              explanation: "Can mark destinations, times and other relationships.",
            },
            {
              title: "Examples",
              explanation: "Hon o yomimasu; gakkou ni ikimasu.",
            },
          ],
          example: "Hon o yomimasu.",
        },
        practice: [
          {
            question: "Which particle commonly marks the direct object?",
            options: ["を", "に", "は", "で"],
            correctAnswer: "を",
            explanation:
              "を commonly marks the direct object.",
          },
        ],
      },
      {
        id: "jp-22",
        order: 22,
        title: "で・と・も Particles",
        description: "Learn three more useful particles for everyday sentences.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "These particles express location of an action, connection and addition.",
          points: [
            {
              title: "で",
              explanation: "Can mark the place where an action occurs.",
            },
            {
              title: "と",
              explanation: "Can connect nouns or mean with in some contexts.",
            },
            {
              title: "も",
              explanation: "Can mean also or too.",
            },
          ],
          example: "Gakkou de benkyou shimasu.",
        },
        practice: [
          {
            question: "Which particle can mark where an action happens?",
            options: ["で", "と", "も", "を"],
            correctAnswer: "で",
            explanation:
              "で commonly marks the place where an action occurs.",
          },
        ],
      },
      {
        id: "jp-23",
        order: 23,
        title: "です & じゃないです",
        description: "Learn polite positive and negative noun sentences.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Desu and ja nai desu help beginners say what something is or is not.",
          points: [
            {
              title: "です",
              explanation: "Makes many noun sentences polite.",
            },
            {
              title: "じゃないです",
              explanation: "A polite beginner negative form.",
            },
            {
              title: "Contrast",
              explanation: "Gakusei desu vs. gakusei ja nai desu.",
            },
          ],
          example: "Gakusei ja nai desu.",
        },
        practice: [
          {
            question: "Which sentence means \"I am not a student\"?",
            options: ["Gakusei desu.", "Gakusei ja nai desu.", "Gakusei o desu.", "Gakusei ni desu."],
            correctAnswer: "Gakusei ja nai desu.",
            explanation:
              "It is a basic polite negative noun sentence.",
          },
        ],
      },
      {
        id: "jp-24",
        order: 24,
        title: "Basic Verbs",
        description: "Learn common verbs and basic polite verb sentences.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Verbs are central to Japanese sentences and usually appear toward the end.",
          points: [
            {
              title: "Tabemasu",
              explanation: "To eat.",
            },
            {
              title: "Nomimasu",
              explanation: "To drink.",
            },
            {
              title: "Ikimasu",
              explanation: "To go.",
            },
            {
              title: "Yomimasu",
              explanation: "To read.",
            },
          ],
          example: "Nomimasu = to drink",
        },
        practice: [
          {
            question: "Which verb means to drink?",
            options: ["Tabemasu", "Nomimasu", "Ikimasu", "Yomimasu"],
            correctAnswer: "Nomimasu",
            explanation:
              "Nomimasu means to drink.",
          },
        ],
      },
      {
        id: "jp-25",
        order: 25,
        title: "Foundation Review & Conversation",
        description: "Bring the foundation together in a simple beginner conversation.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "A strong foundation combines scripts, greetings, introductions, particles and polite forms.",
          points: [
            {
              title: "Greeting",
              explanation: "Choose an appropriate greeting.",
            },
            {
              title: "Introduction",
              explanation: "Use watashi wa ... desu.",
            },
            {
              title: "Simple response",
              explanation: "Use familiar expressions and basic sentence patterns.",
            },
            {
              title: "Conversation flow",
              explanation: "Move naturally from greeting to introduction and a simple question.",
            },
          ],
          example: "Greeting → introduction → simple question",
        },
        practice: [
          {
            question: "Which sequence fits a simple beginner conversation?",
            options: ["Greeting → introduction → simple question", "Advanced grammar → debate", "Random words only", "Numbers only"],
            correctAnswer: "Greeting → introduction → simple question",
            explanation:
              "That sequence creates a natural beginner conversation.",
          },
        ],
      },
    ],
  },

  {
    id: "english-communication",
    title: "English Communication",
    category: "Languages",
    icon: "🗣️",
    description:
      "Build practical English communication skills for everyday conversations.",
    estimatedMinutes: 15,
    chapters: [
      {
        id: "eng-01",
        order: 1,
        title: "Starting a Conversation",
        description: "Learn simple ways to begin conversations naturally.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "Good conversations often begin with a simple greeting and an easy question.",
          points: [
            {
              title: "Greeting",
              explanation:
                "Start with a simple greeting appropriate to the situation.",
            },
            {
              title: "Open question",
              explanation:
                "Questions such as 'How are you?' or 'How was your day?' encourage conversation.",
            },
            {
              title: "Follow-up",
              explanation:
                "A follow-up question keeps the conversation moving.",
            },
          ],
        },
        practice: [
          {
            question: "Which is a natural conversation starter?",
            options: [
              "How was your day?",
              "Give me your phone.",
              "Leave now.",
              "I don't care.",
            ],
            correctAnswer: "How was your day?",
            explanation:
              "Open and friendly questions are useful conversation starters.",
          },
        ],
      },

      {
        id: "eng-02",
        order: 2,
        title: "Everyday Vocabulary",
        description: "Build useful vocabulary for daily conversations.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "Strong communication depends more on useful vocabulary than on memorizing complicated words.",
          points: [
            {
              title: "Learn words in context",
              explanation:
                "Learning vocabulary through sentences makes it easier to remember and use.",
            },
            {
              title: "Use simple words",
              explanation:
                "Clear simple English is often more effective than unnecessarily complicated vocabulary.",
            },
          ],
        },
        practice: [
          {
            question: "What is the best way to make new vocabulary useful?",
            options: [
              "Use it in sentences",
              "Only read the word",
              "Never repeat it",
              "Memorize random letters",
            ],
            correctAnswer: "Use it in sentences",
            explanation:
              "Using new words in context helps connect meaning with real communication.",
          },
        ],
      },

      {
        id: "eng-03",
        order: 3,
        title: "Speaking Clearly",
        description: "Learn how to organize your thoughts while speaking.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "Clear speaking is not about using difficult English. It is about expressing one idea at a time.",
          points: [
            {
              title: "Think before speaking",
              explanation:
                "Taking a short pause can help organize your thoughts.",
            },
            {
              title: "Short sentences",
              explanation:
                "Short sentences can make your meaning easier to understand.",
            },
            {
              title: "Practice aloud",
              explanation:
                "Speaking aloud helps develop confidence and fluency.",
            },
          ],
        },
        practice: [
          {
            question: "Which habit can improve speaking clarity?",
            options: [
              "Organizing ideas before speaking",
              "Speaking without thinking",
              "Using only difficult words",
              "Avoiding practice",
            ],
            correctAnswer: "Organizing ideas before speaking",
            explanation:
              "Organizing your thoughts helps you communicate more clearly.",
          },
        ],
      },

      {
        id: "eng-04",
        order: 4,
        title: "Real Conversation Practice",
        description: "Combine your skills in simple conversations.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "The best way to improve communication is to use what you learn in realistic situations.",
          points: [
            {
              title: "Ask",
              explanation: "Ask a simple question related to the situation.",
            },
            {
              title: "Listen",
              explanation:
                "Good communication requires understanding the other person's response.",
            },
            {
              title: "Respond",
              explanation:
                "Answer naturally and continue the conversation with another question when appropriate.",
            },
          ],
        },
        practice: [
          {
            question: "What completes a good basic conversation?",
            options: ["Ask, listen and respond", "Only speak", "Only listen", "Ignore"],
            correctAnswer: "Ask, listen and respond",
            explanation:
              "Conversation is an interaction, so asking, listening and responding all matter.",
          },
        ],
      },
    ],
  },

  // ============================================================
  // ENGINEERING & TECHNOLOGY
  // ============================================================

  {
    id: "dsa-foundation",
    title: "DSA Foundation",
    category: "Engineering & Technology",
    icon: "🧠",
    description:
      "Build a strong foundation in data structures, algorithms, complexity and problem-solving patterns step by step.",
    estimatedMinutes: 300,
    chapters: [
      {
        id: "dsa-01",
        order: 1,
        title: "What Is DSA?",
        description: "Understand what data structures and algorithms are and how they work together.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Data structures organize data; algorithms process that data to solve problems.",
          points: [
            { title: "Data Structure", explanation: "A way of organizing and storing data so it can be used efficiently." },
            { title: "Algorithm", explanation: "A step-by-step method for solving a problem." },
            { title: "Problem solving", explanation: "Good DSA starts by understanding the problem, inputs, outputs and constraints." },
          ],
          example: "Choosing an array to store a fixed ordered collection of marks.",
        },
        practice: [
          {
            question: "What does DSA combine?",
            options: ["Data structures and algorithms", "Only databases", "Only programming languages", "Only hardware"],
            correctAnswer: "Data structures and algorithms",
            explanation: "Data structures organize data while algorithms provide ways to process it.",
          },
        ],
      },
      {
        id: "dsa-02",
        order: 2,
        title: "Problem-Solving Basics",
        description: "Learn how to translate a problem into inputs, outputs and clear steps.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Before choosing a data structure, understand exactly what the problem asks you to compute.",
          points: [
            { title: "Input", explanation: "The values supplied to a solution." },
            { title: "Output", explanation: "The result the solution must produce." },
            { title: "Constraints", explanation: "Limits such as input size, time or memory that guide solution choices." },
          ],
          example: "For a maximum-value problem, input is a list of numbers and output is the largest number.",
        },
        practice: [
          {
            question: "What should you identify first when solving a programming problem?",
            options: ["The input, output and constraints", "The UI color", "The database password", "The CPU brand"],
            correctAnswer: "The input, output and constraints",
            explanation: "Understanding inputs, outputs and constraints gives direction to the solution.",
          },
        ],
      },
      {
        id: "dsa-03",
        order: 3,
        title: "Algorithms & Pseudocode",
        description: "Learn to describe a solution before writing code.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Pseudocode expresses logic in a simple, language-independent form.",
          points: [
            { title: "Sequence", explanation: "Steps are performed in a defined order." },
            { title: "Selection", explanation: "A condition chooses between different actions." },
            { title: "Iteration", explanation: "A loop repeats a step while a condition or range requires it." },
          ],
          example: "Pseudocode for finding a maximum: set max to the first value, then compare each remaining value.",
        },
        practice: [
          {
            question: "Why use pseudocode?",
            options: ["To plan logic before implementation", "To replace all programming languages", "To store files", "To compile a program"],
            correctAnswer: "To plan logic before implementation",
            explanation: "Pseudocode helps you reason about the algorithm without focusing on programming syntax.",
          },
        ],
      },
      {
        id: "dsa-04",
        order: 4,
        title: "Time Complexity",
        description: "Understand how running time grows with input size.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Time complexity focuses on growth rather than measuring seconds on one machine.",
          points: [
            { title: "Input size", explanation: "n commonly represents the amount of input." },
            { title: "Growth rate", explanation: "We compare how the number of operations changes as n grows." },
            { title: "Big O", explanation: "Big O describes an upper-bound style growth classification commonly used in DSA." },
          ],
          example: "Checking one array element by index is O(1).",
        },
        practice: [
          {
            question: "Which notation represents constant time?",
            options: ["O(1)", "O(n)", "O(n²)", "O(2ⁿ)"],
            correctAnswer: "O(1)",
            explanation: "O(1) stays constant as the input size grows.",
          },
        ],
      },
      {
        id: "dsa-05",
        order: 5,
        title: "Space Complexity",
        description: "Learn how algorithms use extra memory.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Space complexity considers how additional memory requirements grow with input size.",
          points: [
            { title: "Auxiliary space", explanation: "Extra memory used by the algorithm apart from the input itself." },
            { title: "Constant space", explanation: "A fixed number of variables can be O(1) extra space." },
            { title: "Growing space", explanation: "Creating an additional array of n elements generally requires O(n) space." },
          ],
          example: "Using a few variables to track a running sum uses constant extra space.",
        },
        practice: [
          {
            question: "Which situation usually requires O(n) extra space?",
            options: ["Creating an additional array of n elements", "Using three integer variables", "Reading one value", "Swapping two values"],
            correctAnswer: "Creating an additional array of n elements",
            explanation: "An additional array with n elements grows with the input size.",
          },
        ],
      },
      {
        id: "dsa-06",
        order: 6,
        title: "Arrays: Basics",
        description: "Understand arrays, indexes and traversal.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Arrays store elements in an ordered sequence and are commonly accessed by index.",
          points: [
            { title: "Index", explanation: "A position used to access an element; many languages use zero-based indexing." },
            { title: "Access", explanation: "Direct index access is typically O(1) for an array." },
            { title: "Traversal", explanation: "Visiting elements sequentially, usually O(n)." },
          ],
          example: "In [10,20,30], index 0 refers to 10 in a zero-based language.",
        },
        practice: [
          {
            question: "How is an array element commonly accessed?",
            options: ["By index", "By IP address", "By file extension", "By port number"],
            correctAnswer: "By index",
            explanation: "Indexes identify positions in an array.",
          },
        ],
      },
      {
        id: "dsa-07",
        order: 7,
        title: "Array Operations",
        description: "Learn insertion, deletion, update and traversal costs.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Array operations have different costs depending on where elements are changed.",
          points: [
            { title: "Update", explanation: "Changing an existing indexed element is typically O(1)." },
            { title: "Insertion", explanation: "Inserting near the beginning may require shifting many elements." },
            { title: "Deletion", explanation: "Deleting from the middle may also require shifting later elements." },
          ],
          example: "Inserting 5 at the start of [10,20,30] requires moving existing elements.",
        },
        practice: [
          {
            question: "Why can inserting at the beginning of an array be expensive?",
            options: ["Existing elements may need to shift", "Arrays cannot store numbers", "Indexes disappear", "The CPU must restart"],
            correctAnswer: "Existing elements may need to shift",
            explanation: "Elements after the insertion point may need to shift.",
          },
        ],
      },
      {
        id: "dsa-08",
        order: 8,
        title: "Strings",
        description: "Understand strings as sequences and learn common operations.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Strings are sequences of characters and many string problems can be approached like array problems.",
          points: [
            { title: "Characters", explanation: "A string is made from individual characters." },
            { title: "Traversal", explanation: "Characters can be processed one by one." },
            { title: "Comparison", explanation: "String problems often involve matching, counting or comparing characters." },
          ],
          example: "Counting vowels by scanning each character once is O(n).",
        },
        practice: [
          {
            question: "What is a string?",
            options: ["A sequence of characters", "A network protocol", "A database table", "A CPU instruction"],
            correctAnswer: "A sequence of characters",
            explanation: "A string represents an ordered sequence of characters.",
          },
        ],
      },
      {
        id: "dsa-09",
        order: 9,
        title: "Linear Search",
        description: "Learn to search an unsorted collection sequentially.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Linear search checks elements from one end until the target is found or the collection ends.",
          points: [
            { title: "Process", explanation: "Compare the target with each element in order." },
            { title: "Best case", explanation: "The target is at the first position, giving O(1) work." },
            { title: "Worst case", explanation: "The target is last or absent, giving O(n) work." },
          ],
          example: "Searching [7,4,9,2] for 9 checks 7, then 4, then 9.",
        },
        practice: [
          {
            question: "What is the worst-case time complexity of linear search?",
            options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
            correctAnswer: "O(n)",
            explanation: "In the worst case, linear search examines every element.",
          },
        ],
      },
      {
        id: "dsa-10",
        order: 10,
        title: "Binary Search",
        description: "Learn the divide-and-search method for sorted data.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Binary search compares with the middle element and discards half of the remaining search space.",
          points: [
            { title: "Sorted input", explanation: "The collection must be ordered for the standard binary search method." },
            { title: "Middle", explanation: "The middle value determines which half may contain the target." },
            { title: "Complexity", explanation: "Binary search runs in O(log n) time on a sorted array." },
          ],
          example: "Searching a sorted list of 16 values repeatedly halves the remaining range.",
        },
        practice: [
          {
            question: "What is required for standard binary search?",
            options: ["Sorted data", "Encrypted data", "A linked list only", "Exactly two elements"],
            correctAnswer: "Sorted data",
            explanation: "Binary search relies on order to eliminate half the candidates each step.",
          },
        ],
      },
      {
        id: "dsa-11",
        order: 11,
        title: "Sorting Fundamentals",
        description: "Understand why sorting helps and compare basic sorting ideas.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Sorting arranges values according to an order such as ascending or descending.",
          points: [
            { title: "Why sort?", explanation: "Sorted data can make searching and later processing easier." },
            { title: "Stability", explanation: "A stable sort preserves the relative order of equal-key elements." },
            { title: "In-place", explanation: "An in-place algorithm uses little additional memory for the rearrangement." },
          ],
          example: "Sorting marks from lowest to highest creates an ordered sequence.",
        },
        practice: [
          {
            question: "What is the main purpose of sorting?",
            options: ["To arrange data according to an order", "To encrypt data", "To remove all duplicates automatically", "To create a database"],
            correctAnswer: "To arrange data according to an order",
            explanation: "Sorting arranges elements according to a chosen ordering.",
          },
        ],
      },
      {
        id: "dsa-12",
        order: 12,
        title: "Bubble Sort",
        description: "Learn bubble sort and its repeated adjacent comparisons.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Bubble sort repeatedly compares neighboring elements and swaps them when they are out of order.",
          points: [
            { title: "Adjacent comparison", explanation: "Each step compares neighboring elements." },
            { title: "Passes", explanation: "Multiple passes move larger values toward the end." },
            { title: "Complexity", explanation: "Basic bubble sort has O(n²) worst-case time." },
          ],
          example: "For [3,1,2], comparing 3 and 1 causes a swap.",
        },
        practice: [
          {
            question: "What does bubble sort repeatedly compare?",
            options: ["Adjacent elements", "Only the first and last elements", "Random files", "Tree nodes only"],
            correctAnswer: "Adjacent elements",
            explanation: "Bubble sort is based on repeated comparisons of adjacent elements.",
          },
        ],
      },
      {
        id: "dsa-13",
        order: 13,
        title: "Selection Sort",
        description: "Learn how selection sort repeatedly chooses the next minimum or maximum.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Selection sort divides the array conceptually into sorted and unsorted regions.",
          points: [
            { title: "Selection", explanation: "Find the smallest remaining element for ascending order." },
            { title: "Swap", explanation: "Place the selected element at the next sorted position." },
            { title: "Complexity", explanation: "Selection sort performs O(n²) comparisons in its basic form." },
          ],
          example: "For [4,2,3], the first minimum is 2 and is placed at index 0.",
        },
        practice: [
          {
            question: "What does selection sort select in an ascending pass?",
            options: ["The smallest remaining element", "The largest file", "A random element only", "The middle element always"],
            correctAnswer: "The smallest remaining element",
            explanation: "Selection sort selects the smallest remaining value for the next position.",
          },
        ],
      },
      {
        id: "dsa-14",
        order: 14,
        title: "Insertion Sort",
        description: "Learn insertion sort by growing a sorted prefix.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Insertion sort takes one element at a time and inserts it into its correct place in the already-sorted portion.",
          points: [
            { title: "Sorted prefix", explanation: "The left part of the array remains sorted after each insertion." },
            { title: "Shifting", explanation: "Larger elements may shift right to make space." },
            { title: "Best case", explanation: "Already sorted data can be handled in O(n) time with the usual implementation." },
          ],
          example: "In [1,3,2], 2 is inserted between 1 and 3.",
        },
        practice: [
          {
            question: "What does insertion sort maintain during processing?",
            options: ["A sorted prefix", "A sorted tree", "Only the last element", "A hash table"],
            correctAnswer: "A sorted prefix",
            explanation: "Insertion sort grows a sorted prefix one element at a time.",
          },
        ],
      },
      {
        id: "dsa-15",
        order: 15,
        title: "Recursion",
        description: "Understand functions that solve a problem through smaller versions of itself.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "A recursive function calls itself with a smaller or simpler input.",
          points: [
            { title: "Base case", explanation: "Stops recursion and prevents infinite calls." },
            { title: "Recursive case", explanation: "Moves the problem toward the base case." },
            { title: "Call stack", explanation: "Each active recursive call uses stack space." },
          ],
          example: "Factorial can be defined as n × factorial(n-1), with factorial(0)=1.",
        },
        practice: [
          {
            question: "What prevents a recursive function from continuing forever?",
            options: ["A base case", "A larger input", "A random loop", "A database"],
            correctAnswer: "A base case",
            explanation: "The base case provides the stopping condition.",
          },
        ],
      },
      {
        id: "dsa-16",
        order: 16,
        title: "Linked Lists",
        description: "Understand nodes and links in a singly linked list.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "A linked list stores data in nodes connected through references rather than requiring contiguous storage.",
          points: [
            { title: "Node", explanation: "A node contains data and a link to another node." },
            { title: "Head", explanation: "The head references the first node." },
            { title: "Traversal", explanation: "Following links one by one takes O(n) time to reach a distant node." },
          ],
          example: "A list can contain nodes 10 → 20 → 30, where each node points to the next.",
        },
        practice: [
          {
            question: "What does the head of a singly linked list represent?",
            options: ["The first node", "The last array index", "The middle node always", "The list size only"],
            correctAnswer: "The first node",
            explanation: "The head points to the first node in the list.",
          },
        ],
      },
      {
        id: "dsa-17",
        order: 17,
        title: "Linked List Operations",
        description: "Learn insertion, deletion and traversal in linked lists.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Linked lists can efficiently change links when the relevant node reference is already known.",
          points: [
            { title: "Insertion", explanation: "Adding a node can be O(1) when inserting at a known position such as the head." },
            { title: "Deletion", explanation: "Removing a known node can involve changing links rather than shifting all elements." },
            { title: "Traversal cost", explanation: "Finding a position usually requires following links from the head." },
          ],
          example: "Adding a node at the head of a singly linked list changes the head reference.",
        },
        practice: [
          {
            question: "Why can head insertion be O(1) in a linked list?",
            options: ["Only a few links need to be changed", "All nodes must be sorted", "Every node must be copied", "The list must be converted to an array"],
            correctAnswer: "Only a few links need to be changed",
            explanation: "Head insertion changes the new node link and the head reference.",
          },
        ],
      },
      {
        id: "dsa-18",
        order: 18,
        title: "Stacks",
        description: "Understand LIFO behavior and common stack operations.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "A stack follows Last In, First Out: the most recently added item is removed first.",
          points: [
            { title: "Push", explanation: "Adds an item to the top." },
            { title: "Pop", explanation: "Removes the top item." },
            { title: "Peek", explanation: "Reads the top item without removing it." },
          ],
          example: "A stack can model undo actions where the newest action is undone first.",
        },
        practice: [
          {
            question: "Which principle does a stack follow?",
            options: ["LIFO", "FIFO", "Random access only", "Priority only"],
            correctAnswer: "LIFO",
            explanation: "Stacks follow Last In, First Out.",
          },
        ],
      },
      {
        id: "dsa-19",
        order: 19,
        title: "Queues",
        description: "Understand FIFO behavior and common queue operations.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "A queue follows First In, First Out: the earliest inserted item leaves first.",
          points: [
            { title: "Enqueue", explanation: "Adds an item to the rear." },
            { title: "Dequeue", explanation: "Removes an item from the front." },
            { title: "FIFO", explanation: "The first item added is the first item removed." },
          ],
          example: "A printer queue processes print jobs in arrival order.",
        },
        practice: [
          {
            question: "Which principle does a queue follow?",
            options: ["FIFO", "LIFO", "Binary search", "Recursion"],
            correctAnswer: "FIFO",
            explanation: "Queues follow First In, First Out.",
          },
        ],
      },
      {
        id: "dsa-20",
        order: 20,
        title: "Hashing",
        description: "Understand hash tables, keys and average constant-time lookup.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Hashing maps keys to positions so values can often be found quickly.",
          points: [
            { title: "Hash function", explanation: "Transforms a key into a hash value or bucket location." },
            { title: "Collision", explanation: "Different keys can map to the same location." },
            { title: "Average lookup", explanation: "Well-designed hash tables often provide average O(1) lookup." },
          ],
          example: "A student ID can be used as a key to retrieve a stored record.",
        },
        practice: [
          {
            question: "What is a collision in hashing?",
            options: ["Two keys map to the same location", "A program crashes", "A list becomes sorted", "A tree loses its root"],
            correctAnswer: "Two keys map to the same location",
            explanation: "A collision occurs when multiple keys map to the same hash location.",
          },
        ],
      },
      {
        id: "dsa-21",
        order: 21,
        title: "Trees",
        description: "Understand hierarchical data and basic tree terminology.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "A tree is a hierarchical structure made of nodes connected by edges.",
          points: [
            { title: "Root", explanation: "The top node of a tree." },
            { title: "Parent and child", explanation: "A parent node connects downward to child nodes." },
            { title: "Leaf", explanation: "A node with no children." },
          ],
          example: "A folder structure is a common real-world example of hierarchical data.",
        },
        practice: [
          {
            question: "What is a leaf node?",
            options: ["A node with no children", "The root only", "A node with two parents", "An array index"],
            correctAnswer: "A node with no children",
            explanation: "A leaf has no child nodes.",
          },
        ],
      },
      {
        id: "dsa-22",
        order: 22,
        title: "Tree Traversals",
        description: "Learn preorder, inorder and postorder traversal ideas.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Tree traversal defines the order in which nodes are visited.",
          points: [
            { title: "Preorder", explanation: "Visit node, then left subtree, then right subtree." },
            { title: "Inorder", explanation: "Visit left subtree, node, then right subtree." },
            { title: "Postorder", explanation: "Visit left subtree, right subtree, then node." },
          ],
          example: "For a binary search tree, inorder traversal produces values in sorted order.",
        },
        practice: [
          {
            question: "Which traversal visits the root between the left and right subtrees?",
            options: ["Inorder", "Preorder", "Postorder", "Level order only"],
            correctAnswer: "Inorder",
            explanation: "Inorder visits left subtree, root, then right subtree.",
          },
        ],
      },
      {
        id: "dsa-23",
        order: 23,
        title: "Binary Search Trees",
        description: "Understand how a BST uses ordering to organize values.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "A binary search tree keeps smaller values on the left and larger values on the right under the usual rule.",
          points: [
            { title: "Binary tree", explanation: "Each node has at most two children." },
            { title: "BST property", explanation: "Values in the left subtree are smaller and values in the right subtree are larger, assuming unique keys." },
            { title: "Search", explanation: "A balanced BST can support search in O(log n) time, while a skewed tree can degrade to O(n)." },
          ],
          example: "Inserting 5 into a BST with root 8 moves left because 5 is smaller.",
        },
        practice: [
          {
            question: "Where is a value smaller than the BST root normally placed?",
            options: ["In the left subtree", "In the right subtree", "Outside the tree", "In a queue"],
            correctAnswer: "In the left subtree",
            explanation: "The BST ordering places smaller values in the left subtree.",
          },
        ],
      },
      {
        id: "dsa-24",
        order: 24,
        title: "Heaps & Priority Queues",
        description: "Understand heaps and why they are useful for priority-based processing.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "A heap is a complete binary tree commonly used to implement a priority queue.",
          points: [
            { title: "Min-heap", explanation: "The smallest value is kept at the root." },
            { title: "Max-heap", explanation: "The largest value is kept at the root." },
            { title: "Priority queue", explanation: "Elements are processed according to priority rather than arrival order alone." },
          ],
          example: "A task scheduler can use a priority queue to process the highest-priority task first.",
        },
        practice: [
          {
            question: "Which structure is commonly used to implement a priority queue?",
            options: ["Heap", "Stack only", "String", "Linked file"],
            correctAnswer: "Heap",
            explanation: "Heaps provide efficient priority-based insertion and removal.",
          },
        ],
      },
      {
        id: "dsa-25",
        order: 25,
        title: "Graphs",
        description: "Understand vertices, edges and common graph representations.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Graphs model relationships between entities using vertices and edges.",
          points: [
            { title: "Vertex", explanation: "Represents an entity or point in the graph." },
            { title: "Edge", explanation: "Represents a connection between vertices." },
            { title: "Directed graph", explanation: "Edges have a direction from one vertex to another." },
          ],
          example: "A road network can be modeled as cities connected by roads.",
        },
        practice: [
          {
            question: "What does an edge represent in a graph?",
            options: ["A connection between vertices", "A sorting algorithm", "A memory address only", "A variable type"],
            correctAnswer: "A connection between vertices",
            explanation: "Edges represent relationships or connections between vertices.",
          },
        ],
      },
      {
        id: "dsa-26",
        order: 26,
        title: "BFS & DFS",
        description: "Learn two fundamental graph/tree traversal strategies.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Breadth-first search explores level by level, while depth-first search follows a path deeply before backtracking.",
          points: [
            { title: "BFS", explanation: "Breadth-first search commonly uses a queue." },
            { title: "DFS", explanation: "Depth-first search can be implemented using recursion or an explicit stack." },
            { title: "Visited tracking", explanation: "A visited set helps avoid repeatedly processing the same node in general graph traversal." },
          ],
          example: "BFS is useful for finding the minimum number of edges in an unweighted graph.",
        },
        practice: [
          {
            question: "Which data structure is commonly associated with BFS?",
            options: ["Queue", "Stack", "Heap only", "Hash function"],
            correctAnswer: "Queue",
            explanation: "BFS processes nodes in breadth-first order using a queue.",
          },
        ],
      },
      {
        id: "dsa-27",
        order: 27,
        title: "Greedy Algorithms",
        description: "Understand the greedy strategy and when it can work.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "A greedy algorithm makes the best-looking local choice at each step.",
          points: [
            { title: "Local choice", explanation: "Choose what appears best now according to the problem rule." },
            { title: "No backtracking", explanation: "A basic greedy method usually commits to choices rather than revisiting them." },
            { title: "Correctness", explanation: "Greedy works only for problems with properties that make local choices lead to an optimal solution." },
          ],
          example: "Selecting the earliest finishing compatible activity is a classic greedy strategy for activity selection.",
        },
        practice: [
          {
            question: "What characterizes a greedy algorithm?",
            options: ["Making a locally best choice at each step", "Trying every possible solution", "Always using recursion", "Only sorting strings"],
            correctAnswer: "Making a locally best choice at each step",
            explanation: "Greedy algorithms commit to a locally optimal-looking choice at each step.",
          },
        ],
      },
      {
        id: "dsa-28",
        order: 28,
        title: "Backtracking",
        description: "Learn systematic trial, rejection and undo of choices.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Backtracking explores possible choices and abandons a partial solution when it cannot lead to a valid answer.",
          points: [
            { title: "Choice", explanation: "Select one possibility to explore." },
            { title: "Constraint", explanation: "A rule that determines whether a partial solution is valid." },
            { title: "Undo", explanation: "Remove or reverse a choice before trying another option." },
          ],
          example: "Sudoku and N-Queens are common examples where backtracking explores valid arrangements.",
        },
        practice: [
          {
            question: "What does backtracking do when a partial solution becomes invalid?",
            options: ["It undoes the choice and tries another", "It always stops the entire program", "It sorts the input", "It deletes the problem"],
            correctAnswer: "It undoes the choice and tries another",
            explanation: "Backtracking reverses the unsuitable choice and explores another possibility.",
          },
        ],
      },
      {
        id: "dsa-29",
        order: 29,
        title: "Dynamic Programming",
        description: "Understand overlapping subproblems and optimal substructure.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Dynamic programming stores results of smaller subproblems so they do not have to be recomputed.",
          points: [
            { title: "Overlapping subproblems", explanation: "The same smaller problems occur repeatedly." },
            { title: "Memoization", explanation: "Top-down recursion stores computed results." },
            { title: "Tabulation", explanation: "Bottom-up DP fills a table from smaller cases to larger cases." },
          ],
          example: "Fibonacci can be optimized by storing previously computed values.",
        },
        practice: [
          {
            question: "Why does dynamic programming store subproblem results?",
            options: ["To avoid repeated computation", "To randomize answers", "To remove all loops", "To encrypt data"],
            correctAnswer: "To avoid repeated computation",
            explanation: "Stored results let the algorithm reuse work instead of recomputing the same subproblems.",
          },
        ],
      },
      {
        id: "dsa-30",
        order: 30,
        title: "Complexity Patterns",
        description: "Recognize common complexity classes and compare their growth.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Understanding common growth rates helps choose scalable solutions.",
          points: [
            { title: "O(1)", explanation: "Constant growth." },
            { title: "O(log n) and O(n)", explanation: "Logarithmic grows slowly; linear grows proportionally with input size." },
            { title: "O(n²) and exponential", explanation: "Quadratic and exponential growth become expensive much faster as n increases." },
          ],
          example: "A nested loop over all pairs of n elements is often O(n²).",
        },
        practice: [
          {
            question: "Which usually grows faster as n becomes large?",
            options: ["O(n²)", "O(log n)", "O(1)", "O(n)"],
            correctAnswer: "O(n²)",
            explanation: "Quadratic growth eventually outpaces constant, logarithmic and linear growth.",
          },
        ],
      },
      {
        id: "dsa-31",
        order: 31,
        title: "Two Pointers & Sliding Window",
        description: "Learn reusable patterns for array and string problems.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Two pointers and sliding windows can reduce repeated work in many sequence problems.",
          points: [
            { title: "Two pointers", explanation: "Use two indexes that move through a sequence according to the problem logic." },
            { title: "Sliding window", explanation: "Maintain a changing contiguous range instead of recomputing each range from scratch." },
            { title: "Efficiency", explanation: "These patterns can turn some nested-looking solutions into O(n) scans." },
          ],
          example: "Finding whether a sorted array contains a pair with a target sum can use left and right pointers.",
        },
        practice: [
          {
            question: "What is a sliding window?",
            options: ["A maintained contiguous range of elements", "A GUI panel", "A database lock", "A tree root"],
            correctAnswer: "A maintained contiguous range of elements",
            explanation: "A sliding window represents a changing contiguous portion of a sequence.",
          },
        ],
      },
      {
        id: "dsa-32",
        order: 32,
        title: "DSA Problem-Solving Patterns",
        description: "Learn how to choose an approach from constraints and problem structure.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Strong DSA problem solving comes from recognizing patterns instead of memorizing isolated solutions.",
          points: [
            { title: "Brute force first", explanation: "A simple solution can clarify correctness before optimization." },
            { title: "Constraints guide choices", explanation: "Large n may rule out O(n²) or exponential approaches." },
            { title: "Pattern recognition", explanation: "Searching, two pointers, recursion, hashing and DP solve recurring problem shapes." },
          ],
          example: "If a problem asks for repeated fast membership checks, hashing may be a strong candidate.",
        },
        practice: [
          {
            question: "What should influence your algorithm choice most?",
            options: ["Problem structure and constraints", "Variable names only", "Screen size", "Programming font"],
            correctAnswer: "Problem structure and constraints",
            explanation: "The problem structure and constraints determine which approaches are practical.",
          },
        ],
      },
      {
        id: "dsa-33",
        order: 33,
        title: "DSA Assessment & Next Steps",
        description: "Review core DSA ideas and build a practical path toward problem solving.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "A strong foundation means you can explain structures, estimate complexity and select basic algorithms.",
          points: [
            { title: "Core structures", explanation: "Arrays, linked lists, stacks, queues, trees, heaps and graphs solve different organization problems." },
            { title: "Core techniques", explanation: "Searching, sorting, recursion, greedy, backtracking and dynamic programming cover major algorithmic ideas." },
            { title: "Practice", explanation: "Progress comes from solving problems, analyzing mistakes and revisiting weak concepts." },
          ],
          example: "A good next step is to implement each structure and solve progressively harder problems.",
        },
        practice: [
          {
            question: "What is the best way to strengthen a DSA foundation?",
            options: ["Practice implementing concepts and solving problems", "Only memorize definitions", "Avoid analyzing complexity", "Skip difficult problems"],
            correctAnswer: "Practice implementing concepts and solving problems",
            explanation: "Implementation and deliberate problem practice turn conceptual knowledge into usable DSA skill.",
          },
        ],
      },
    ],
  },

  {
    id: "python-foundation",
    title: "Python Programming",
    category: "Engineering & Technology",
    icon: "🐍",
    description:
      "Start programming with Python through simple concepts and practical examples.",
    estimatedMinutes: 20,
    chapters: [
      {
        id: "python-01",
        order: 1,
        title: "Python Basics",
        description: "Understand Python programs, variables and values.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Python is a beginner-friendly programming language used in web development, automation, data science and AI.",
          points: [
            {
              title: "Variables",
              explanation:
                "Variables are names used to store values.",
            },
            {
              title: "Data types",
              explanation:
                "Common Python types include integers, floating-point numbers, strings and booleans.",
            },
            {
              title: "print()",
              explanation:
                "The print function displays information to the console.",
            },
          ],
          example: "name = 'Jeevitha'",
        },
        practice: [
          {
            question: "Which function displays output in Python?",
            options: ["print()", "show()", "displayText()", "output()"],
            correctAnswer: "print()",
            explanation:
              "Python uses print() to display output.",
          },
        ],
      },

      {
        id: "python-02",
        order: 2,
        title: "Conditions",
        description: "Make programs respond differently to different situations.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Conditional statements allow a program to make decisions.",
          points: [
            {
              title: "if",
              explanation:
                "The if statement runs code when a condition is true.",
            },
            {
              title: "else",
              explanation:
                "else provides an alternative when the condition is false.",
            },
            {
              title: "elif",
              explanation:
                "elif lets you check additional conditions.",
            },
          ],
        },
        practice: [
          {
            question: "Which keyword begins a basic conditional statement in Python?",
            options: ["if", "when", "check", "condition"],
            correctAnswer: "if",
            explanation:
              "Python uses if to introduce a conditional statement.",
          },
        ],
      },

      {
        id: "python-03",
        order: 3,
        title: "Loops",
        description: "Repeat actions efficiently using loops.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Loops allow programs to repeat instructions without writing the same code again and again.",
          points: [
            {
              title: "for loop",
              explanation:
                "A for loop is commonly used to iterate through a sequence.",
            },
            {
              title: "while loop",
              explanation:
                "A while loop continues while its condition remains true.",
            },
            {
              title: "Iteration",
              explanation:
                "Each repetition of a loop is called an iteration.",
            },
          ],
        },
        practice: [
          {
            question: "What is the purpose of a loop?",
            options: [
              "Repeat instructions",
              "Delete a program",
              "Create a monitor",
              "Connect Wi-Fi",
            ],
            correctAnswer: "Repeat instructions",
            explanation:
              "Loops automate repeated operations.",
          },
        ],
      },

      {
        id: "python-04",
        order: 4,
        title: "Functions",
        description: "Organize reusable pieces of Python code.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Functions allow programmers to package reusable logic into named blocks.",
          points: [
            {
              title: "def",
              explanation:
                "Python uses the def keyword to define a function.",
            },
            {
              title: "Parameters",
              explanation:
                "Parameters allow functions to receive information.",
            },
            {
              title: "return",
              explanation:
                "return sends a result back from a function.",
            },
          ],
        },
        practice: [
          {
            question: "Which keyword defines a function in Python?",
            options: ["def", "function", "fun", "create"],
            correctAnswer: "def",
            explanation:
              "Python uses the def keyword to define functions.",
          },
        ],
      },
    ],
  },

  {
    id: "cpp-foundation",
    title: "C++ Programming",
    category: "Engineering & Technology",
    icon: "💻",
    description:
      "Build a strong C++ programming foundation for problem solving and DSA.",
    estimatedMinutes: 20,
    chapters: [
      {
        id: "cpp-01",
        order: 1,
        title: "C++ Basics",
        description: "Understand the structure of a simple C++ program.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "C++ is a powerful programming language widely used for competitive programming, DSA and systems programming.",
          points: [
            {
              title: "main()",
              explanation:
                "Execution of a standard C++ program begins from main().",
            },
            {
              title: "cout",
              explanation:
                "cout is commonly used to display output.",
            },
            {
              title: "Variables",
              explanation:
                "Variables store values that a program can use and modify.",
            },
          ],
        },
        practice: [
          {
            question: "Where does a typical C++ program begin execution?",
            options: ["main()", "start()", "run()", "begin()"],
            correctAnswer: "main()",
            explanation:
              "The main function is the standard entry point of a C++ program.",
          },
        ],
      },

      {
        id: "cpp-02",
        order: 2,
        title: "Conditions",
        description: "Make decisions using if, else and comparison operators.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Conditional statements let a C++ program choose what to execute.",
          points: [
            {
              title: "if",
              explanation:
                "Runs a block when a condition is true.",
            },
            {
              title: "else",
              explanation:
                "Runs when the preceding condition is false.",
            },
            {
              title: "Comparison",
              explanation:
                "Operators such as ==, < and > compare values.",
            },
          ],
        },
        practice: [
          {
            question: "Which keyword is used for a basic condition?",
            options: ["if", "check", "when", "caseif"],
            correctAnswer: "if",
            explanation:
              "C++ uses if for conditional execution.",
          },
        ],
      },

      {
        id: "cpp-03",
        order: 3,
        title: "Loops",
        description: "Repeat operations using C++ loops.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Loops are fundamental for processing collections and repeating calculations.",
          points: [
            {
              title: "for",
              explanation:
                "Useful when the number or structure of iterations is known.",
            },
            {
              title: "while",
              explanation:
                "Repeats while a condition remains true.",
            },
            {
              title: "do while",
              explanation:
                "Executes the body at least once before checking the condition.",
            },
          ],
        },
        practice: [
          {
            question: "Which loop checks its condition before each iteration?",
            options: ["while", "do while only", "repeat", "loop"],
            correctAnswer: "while",
            explanation:
              "A while loop checks its condition before executing each iteration.",
          },
        ],
      },

      {
        id: "cpp-04",
        order: 4,
        title: "Functions",
        description: "Create reusable C++ logic.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Functions make programs easier to organize, understand and reuse.",
          points: [
            {
              title: "Function declaration",
              explanation:
                "A declaration describes a function before it is used.",
            },
            {
              title: "Parameters",
              explanation:
                "Parameters allow functions to receive input values.",
            },
            {
              title: "Return value",
              explanation:
                "A function can return a result to its caller.",
            },
          ],
        },
        practice: [
          {
            question: "Why are functions useful?",
            options: [
              "They organize reusable logic",
              "They remove variables",
              "They replace the compiler",
              "They turn code into hardware",
            ],
            correctAnswer: "They organize reusable logic",
            explanation:
              "Functions help divide programs into reusable logical units.",
          },
        ],
      },
    ],
  },

  {
    id: "web-development",
    title: "Web Development",
    category: "Engineering & Technology",
    icon: "🌐",
    description:
      "Understand the building blocks of modern websites and web applications.",
    estimatedMinutes: 20,
    chapters: [
      {
        id: "web-01",
        order: 1,
        title: "How the Web Works",
        description: "Understand browsers, servers and HTTP at a basic level.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "A website involves communication between a client such as a browser and a server.",
          points: [
            {
              title: "Browser",
              explanation:
                "A browser requests and displays web resources.",
            },
            {
              title: "Server",
              explanation:
                "A server responds to requests and can provide data or web content.",
            },
            {
              title: "HTTP",
              explanation:
                "HTTP is a protocol commonly used for communication between web clients and servers.",
            },
          ],
        },
        practice: [
          {
            question: "What does a browser primarily do?",
            options: [
              "Request and display web resources",
              "Compile every programming language",
              "Replace servers",
              "Create electricity",
            ],
            correctAnswer: "Request and display web resources",
            explanation:
              "Browsers request resources and render web content for users.",
          },
        ],
      },

      {
        id: "web-02",
        order: 2,
        title: "HTML",
        description: "Learn how HTML structures web pages.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "HTML provides the structure and meaning of content on a webpage.",
          points: [
            {
              title: "Elements",
              explanation:
                "HTML documents are built from elements such as headings, paragraphs and links.",
            },
            {
              title: "Structure",
              explanation:
                "HTML provides a logical structure for webpage content.",
            },
            {
              title: "Semantic HTML",
              explanation:
                "Semantic elements communicate the purpose of content more clearly.",
            },
          ],
        },
        practice: [
          {
            question: "What is HTML mainly used for?",
            options: [
              "Structuring webpage content",
              "Storing passwords",
              "Running databases",
              "Managing cloud servers",
            ],
            correctAnswer: "Structuring webpage content",
            explanation:
              "HTML defines the structure of content displayed on webpages.",
          },
        ],
      },

      {
        id: "web-03",
        order: 3,
        title: "CSS",
        description: "Learn how CSS controls webpage presentation.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "CSS controls the visual presentation of HTML content.",
          points: [
            {
              title: "Selectors",
              explanation:
                "Selectors identify the HTML elements that should receive styles.",
            },
            {
              title: "Properties",
              explanation:
                "CSS properties control things such as spacing, size and typography.",
            },
            {
              title: "Layout",
              explanation:
                "Flexbox and Grid are commonly used for modern layouts.",
            },
          ],
        },
        practice: [
          {
            question: "What is CSS mainly responsible for?",
            options: [
              "Styling webpages",
              "Creating databases",
              "Compiling Java",
              "Managing Git repositories",
            ],
            correctAnswer: "Styling webpages",
            explanation:
              "CSS controls the presentation and layout of web content.",
          },
        ],
      },

      {
        id: "web-04",
        order: 4,
        title: "JavaScript Basics",
        description: "Add behavior and interaction to webpages.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "JavaScript allows webpages to respond to user actions and manipulate content dynamically.",
          points: [
            {
              title: "Variables",
              explanation:
                "Variables store values that JavaScript programs can work with.",
            },
            {
              title: "Functions",
              explanation:
                "Functions package reusable behavior.",
            },
            {
              title: "Events",
              explanation:
                "Events allow JavaScript to respond to actions such as clicks.",
            },
          ],
        },
        practice: [
          {
            question: "What can JavaScript add to a webpage?",
            options: [
              "Interactivity",
              "Physical hardware",
              "Internet cables",
              "A new monitor",
            ],
            correctAnswer: "Interactivity",
            explanation:
              "JavaScript enables interactive and dynamic webpage behavior.",
          },
        ],
      },
    ],
  },

  {
    id: "git-github",
    title: "Git & GitHub",
    category: "Engineering & Technology",
    icon: "🔀",
    description:
      "Learn version control and how developers collaborate using Git and GitHub.",
    estimatedMinutes: 20,
    chapters: [
      {
        id: "git-01",
        order: 1,
        title: "Why Version Control?",
        description: "Understand why developers use Git.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "Version control helps developers track changes and safely work on projects.",
          points: [
            {
              title: "History",
              explanation:
                "Git keeps a history of committed changes.",
            },
            {
              title: "Recovery",
              explanation:
                "Previous versions can help recover from mistakes.",
            },
            {
              title: "Collaboration",
              explanation:
                "Teams can work on the same project using branches and shared repositories.",
            },
          ],
        },
        practice: [
          {
            question: "What is a major purpose of Git?",
            options: [
              "Track code changes",
              "Design websites visually",
              "Host videos",
              "Replace an operating system",
            ],
            correctAnswer: "Track code changes",
            explanation:
              "Git is a distributed version control system used to track changes.",
          },
        ],
      },

      {
        id: "git-02",
        order: 2,
        title: "Repositories & Commits",
        description: "Understand repositories and commits.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "A repository contains project history, while commits record meaningful snapshots of changes.",
          points: [
            {
              title: "Repository",
              explanation:
                "A repository stores project files and version history.",
            },
            {
              title: "Commit",
              explanation:
                "A commit records a set of changes in the project history.",
            },
            {
              title: "Meaningful commits",
              explanation:
                "Small descriptive commits make project history easier to understand.",
            },
          ],
        },
        practice: [
          {
            question: "What does a Git commit represent?",
            options: [
              "A recorded set of changes",
              "A programming language",
              "A server",
              "A browser",
            ],
            correctAnswer: "A recorded set of changes",
            explanation:
              "A commit records changes in Git history.",
          },
        ],
      },

      {
        id: "git-03",
        order: 3,
        title: "Branches",
        description: "Learn how branches support parallel development.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "Branches allow developers to work on changes independently without immediately changing the main development line.",
          points: [
            {
              title: "Branch",
              explanation:
                "A branch provides an independent line of development.",
            },
            {
              title: "Feature work",
              explanation:
                "Developers commonly create branches for individual features or fixes.",
            },
            {
              title: "Merge",
              explanation:
                "Completed work can be merged into another branch.",
            },
          ],
        },
        practice: [
          {
            question: "Why are branches useful?",
            options: [
              "They isolate development work",
              "They increase monitor brightness",
              "They replace Git",
              "They remove all commits",
            ],
            correctAnswer: "They isolate development work",
            explanation:
              "Branches allow work to progress separately from other development lines.",
          },
        ],
      },

      {
        id: "git-04",
        order: 4,
        title: "GitHub Collaboration",
        description: "Understand repositories, pushes and collaboration on GitHub.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "GitHub provides a platform where Git repositories can be stored and shared.",
          points: [
            {
              title: "Remote repository",
              explanation:
                "A remote repository can store and share project history online.",
            },
            {
              title: "Push",
              explanation:
                "Push sends local commits to a remote repository.",
            },
            {
              title: "Pull",
              explanation:
                "Pull retrieves changes from a remote repository and integrates them locally.",
            },
          ],
        },
        practice: [
          {
            question: "What does git push generally do?",
            options: [
              "Sends local commits to a remote repository",
              "Deletes Git",
              "Creates HTML",
              "Starts a browser",
            ],
            correctAnswer: "Sends local commits to a remote repository",
            explanation:
              "git push uploads local commits to a configured remote repository.",
          },
        ],
      },
    ],
  },

  {
    id: "docker-fundamentals",
    title: "Docker Fundamentals",
    category: "Engineering & Technology",
    icon: "🐳",
    description:
      "Understand containers, images, Docker commands and Dockerfiles.",
    estimatedMinutes: 20,
    chapters: [
      {
        id: "docker-01",
        order: 1,
        title: "What Problem Does Docker Solve?",
        description: "Understand why containers are useful.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Docker packages applications and their dependencies into portable containers.",
          points: [
            {
              title: "Environment consistency",
              explanation:
                "Containers help reduce differences between development and deployment environments.",
            },
            {
              title: "Isolation",
              explanation:
                "Applications can run in isolated container environments.",
            },
            {
              title: "Portability",
              explanation:
                "Containers can be moved between compatible environments.",
            },
          ],
        },
        practice: [
          {
            question: "What is a major benefit of containers?",
            options: [
              "Consistent application environments",
              "Replacing all programming languages",
              "Increasing screen resolution",
              "Removing operating systems",
            ],
            correctAnswer: "Consistent application environments",
            explanation:
              "Containers help package applications with their required environment.",
          },
        ],
      },

      {
        id: "docker-02",
        order: 2,
        title: "Images vs Containers",
        description: "Understand the difference between Docker images and containers.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Images and containers are related but represent different things in Docker.",
          points: [
            {
              title: "Image",
              explanation:
                "An image is a packaged template used to create containers.",
            },
            {
              title: "Container",
              explanation:
                "A container is a running or created instance based on an image.",
            },
            {
              title: "Relationship",
              explanation:
                "One image can be used to create multiple containers.",
            },
          ],
        },
        practice: [
          {
            question: "What is a Docker container commonly based on?",
            options: ["An image", "A monitor", "A Git branch", "A browser"],
            correctAnswer: "An image",
            explanation:
              "Docker containers are created from images.",
          },
        ],
      },

      {
        id: "docker-03",
        order: 3,
        title: "Docker Commands",
        description: "Learn common commands used to work with containers.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Docker provides a command-line interface for creating, running and managing containers.",
          points: [
            {
              title: "docker pull",
              explanation:
                "Downloads an image from a registry.",
            },
            {
              title: "docker run",
              explanation:
                "Creates and starts a container from an image.",
            },
            {
              title: "docker ps",
              explanation:
                "Lists running containers.",
            },
          ],
        },
        practice: [
          {
            question: "Which command is commonly used to list running containers?",
            options: ["docker ps", "docker list-all", "docker show", "docker containers"],
            correctAnswer: "docker ps",
            explanation:
              "docker ps displays running containers.",
          },
        ],
      },

      {
        id: "docker-04",
        order: 4,
        title: "Dockerfile",
        description: "Understand how Docker images can be built from instructions.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "A Dockerfile contains instructions used to build a Docker image.",
          points: [
            {
              title: "FROM",
              explanation:
                "FROM specifies the base image.",
            },
            {
              title: "WORKDIR",
              explanation:
                "WORKDIR sets the working directory inside the image.",
            },
            {
              title: "COPY",
              explanation:
                "COPY transfers files from the build context into the image.",
            },
          ],
        },
        practice: [
          {
            question: "What does a Dockerfile contain?",
            options: [
              "Instructions for building an image",
              "Only passwords",
              "Git commits",
              "Browser history",
            ],
            correctAnswer: "Instructions for building an image",
            explanation:
              "A Dockerfile defines instructions used during image building.",
          },
        ],
      },
    ],
  },

  {
    id: "linux-fundamentals",
    title: "Linux Fundamentals",
    category: "Engineering & Technology",
    icon: "🐧",
    description:
      "Learn essential Linux concepts and commands used by developers and DevOps engineers.",
    estimatedMinutes: 20,
    chapters: [
      {
        id: "linux-01",
        order: 1,
        title: "Linux & the Terminal",
        description: "Understand Linux and command-line interaction.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "Linux is widely used in servers, cloud platforms and development environments.",
          points: [
            {
              title: "Terminal",
              explanation:
                "The terminal provides a text-based interface for interacting with the operating system.",
            },
            {
              title: "Shell",
              explanation:
                "A shell interprets commands and executes them.",
            },
            {
              title: "Commands",
              explanation:
                "Commands allow users to perform tasks such as navigating files and managing processes.",
            },
          ],
        },
        practice: [
          {
            question: "What does a terminal provide?",
            options: [
              "A command-line interface",
              "A database only",
              "A programming language",
              "A web browser",
            ],
            correctAnswer: "A command-line interface",
            explanation:
              "A terminal provides a way to interact with the system through commands.",
          },
        ],
      },

      {
        id: "linux-02",
        order: 2,
        title: "Files & Directories",
        description: "Navigate and manage files from the command line.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "Understanding the filesystem is one of the first practical Linux skills.",
          points: [
            {
              title: "pwd",
              explanation:
                "pwd shows the current working directory.",
            },
            {
              title: "ls",
              explanation:
                "ls lists files and directories.",
            },
            {
              title: "cd",
              explanation:
                "cd changes the current directory.",
            },
          ],
        },
        practice: [
          {
            question: "Which command displays the current directory?",
            options: ["pwd", "where", "dirpath", "location"],
            correctAnswer: "pwd",
            explanation:
              "pwd prints the current working directory.",
          },
        ],
      },

      {
        id: "linux-03",
        order: 3,
        title: "Permissions",
        description: "Understand basic Linux file permissions.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "Linux permissions control who can read, write or execute files.",
          points: [
            {
              title: "Read",
              explanation:
                "Read permission allows the contents of a file to be viewed.",
            },
            {
              title: "Write",
              explanation:
                "Write permission allows changes to be made.",
            },
            {
              title: "Execute",
              explanation:
                "Execute permission allows executable files or scripts to be run.",
            },
          ],
        },
        practice: [
          {
            question: "Which permission allows a file to be modified?",
            options: ["Write", "Read", "Execute only", "View"],
            correctAnswer: "Write",
            explanation:
              "Write permission allows modifications.",
          },
        ],
      },

      {
        id: "linux-04",
        order: 4,
        title: "Processes",
        description: "Understand programs running on a Linux system.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "A process is a running instance of a program.",
          points: [
            {
              title: "Process",
              explanation:
                "A process represents a running program.",
            },
            {
              title: "PID",
              explanation:
                "A process identifier uniquely identifies a process.",
            },
            {
              title: "Process management",
              explanation:
                "Linux provides commands and tools for viewing and managing processes.",
            },
          ],
        },
        practice: [
          {
            question: "What does PID usually represent?",
            options: [
              "Process ID",
              "Program Internet Domain",
              "Permission Input Data",
              "Package Installation Directory",
            ],
            correctAnswer: "Process ID",
            explanation:
              "PID stands for Process ID.",
          },
        ],
      },
    ],
  },

  {
    id: "ai-foundation",
    title: "AI Fundamentals",
    category: "Engineering & Technology",
    icon: "🤖",
    description:
      "Understand the foundations of artificial intelligence and machine learning.",
    estimatedMinutes: 20,
    chapters: [
      {
        id: "ai-01",
        order: 1,
        title: "What Is AI?",
        description: "Understand artificial intelligence at a beginner level.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "Artificial intelligence refers broadly to systems designed to perform tasks that normally require aspects of human intelligence.",
          points: [
            {
              title: "Problem solving",
              explanation:
                "AI systems can be designed to solve specific problems.",
            },
            {
              title: "Patterns",
              explanation:
                "Many AI systems identify patterns in data.",
            },
            {
              title: "Applications",
              explanation:
                "AI is used in areas such as recommendations, vision, language and automation.",
            },
          ],
        },
        practice: [
          {
            question: "What is a common capability of AI systems?",
            options: [
              "Identifying patterns",
              "Replacing electricity",
              "Creating physical matter",
              "Removing computers",
            ],
            correctAnswer: "Identifying patterns",
            explanation:
              "Pattern recognition is a common capability of AI systems.",
          },
        ],
      },

      {
        id: "ai-02",
        order: 2,
        title: "Machine Learning",
        description: "Understand how machine learning differs from traditional programming.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Machine learning enables systems to learn patterns from data rather than relying entirely on explicitly written rules.",
          points: [
            {
              title: "Data",
              explanation:
                "Machine learning systems use data to learn patterns.",
            },
            {
              title: "Training",
              explanation:
                "Training is the process of fitting a model to data.",
            },
            {
              title: "Prediction",
              explanation:
                "A trained model can be used to make predictions or decisions.",
            },
          ],
        },
        practice: [
          {
            question: "What is central to machine learning?",
            options: [
              "Learning patterns from data",
              "Only writing fixed rules",
              "Replacing databases",
              "Removing algorithms",
            ],
            correctAnswer: "Learning patterns from data",
            explanation:
              "Machine learning systems learn useful patterns from data.",
          },
        ],
      },

      {
        id: "ai-03",
        order: 3,
        title: "Generative AI",
        description: "Understand what generative AI systems do.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Generative AI systems can produce new content based on patterns learned from data.",
          points: [
            {
              title: "Generation",
              explanation:
                "Generative models can create content such as text, images, audio or code.",
            },
            {
              title: "Models",
              explanation:
                "Different models are designed for different types of generation.",
            },
            {
              title: "Prompts",
              explanation:
                "Prompts provide instructions or context to generative systems.",
            },
          ],
        },
        practice: [
          {
            question: "What is generative AI designed to do?",
            options: [
              "Generate new content",
              "Only store files",
              "Only connect cables",
              "Replace operating systems",
            ],
            correctAnswer: "Generate new content",
            explanation:
              "Generative AI creates new content based on learned patterns.",
          },
        ],
      },

      {
        id: "ai-04",
        order: 4,
        title: "Responsible AI",
        description: "Understand why responsible AI development matters.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "AI systems can affect people, so developers need to consider reliability, fairness, privacy and appropriate use.",
          points: [
            {
              title: "Bias",
              explanation:
                "Data and system design can introduce unwanted biases.",
            },
            {
              title: "Privacy",
              explanation:
                "Sensitive information should be handled carefully.",
            },
            {
              title: "Human oversight",
              explanation:
                "Important decisions may require appropriate human review.",
            },
          ],
        },
        practice: [
          {
            question: "Why is responsible AI important?",
            options: [
              "AI can affect people and decisions",
              "AI never affects anyone",
              "It makes computers heavier",
              "It replaces programming",
            ],
            correctAnswer: "AI can affect people and decisions",
            explanation:
              "AI systems can influence real-world decisions and experiences.",
          },
        ],
      },
    ],
  },

  // ============================================================
  // APTITUDE & PLACEMENT
  // ============================================================

  {
    id: "quantitative-aptitude",
    title: "Quantitative Aptitude",
    category: "Aptitude & Competitive",
    icon: "🔢",
    description:
      "Build the mathematical foundation needed for aptitude tests and placements.",
    estimatedMinutes: 15,
    chapters: [
      {
        id: "apt-01",
        order: 1,
        title: "Percentages",
        description: "Understand percentage calculations.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "Percentages are used frequently in aptitude tests for discounts, marks, profit and comparisons.",
          points: [
            {
              title: "Meaning",
              explanation:
                "Percent means per hundred.",
            },
            {
              title: "Percentage calculation",
              explanation:
                "A percentage can be calculated as part divided by whole multiplied by 100.",
            },
            {
              title: "Applications",
              explanation:
                "Percentages appear in marks, discounts, growth and many other problems.",
            },
          ],
        },
        practice: [
          {
            question: "25% means:",
            options: ["25 out of 100", "25 out of 10", "100 out of 25", "2.5 out of 100"],
            correctAnswer: "25 out of 100",
            explanation:
              "Percent means per hundred, so 25% represents 25 out of 100.",
          },
        ],
      },

      {
        id: "apt-02",
        order: 2,
        title: "Ratio & Proportion",
        description: "Learn comparison using ratios.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "Ratios compare quantities and are commonly used in aptitude problems.",
          points: [
            {
              title: "Ratio",
              explanation:
                "A ratio compares two quantities.",
            },
            {
              title: "Simplification",
              explanation:
                "Ratios can often be simplified by dividing both terms by their common factor.",
            },
            {
              title: "Proportion",
              explanation:
                "A proportion expresses equality between two ratios.",
            },
          ],
        },
        practice: [
          {
            question: "What does a ratio primarily do?",
            options: [
              "Compare quantities",
              "Multiply all numbers",
              "Find only averages",
              "Sort letters",
            ],
            correctAnswer: "Compare quantities",
            explanation:
              "Ratios express the relationship between quantities.",
          },
        ],
      },

      {
        id: "apt-03",
        order: 3,
        title: "Averages",
        description: "Learn how to calculate and interpret averages.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "The arithmetic mean is one of the most common averages used in aptitude questions.",
          points: [
            {
              title: "Formula",
              explanation:
                "Average = sum of values divided by number of values.",
            },
            {
              title: "Use",
              explanation:
                "Averages summarize a collection of numerical values.",
            },
          ],
        },
        practice: [
          {
            question: "What is the basic formula for arithmetic average?",
            options: [
              "Sum ÷ Number of values",
              "Sum × Number of values",
              "Largest − Smallest",
              "Number ÷ Sum",
            ],
            correctAnswer: "Sum ÷ Number of values",
            explanation:
              "The arithmetic mean is calculated by dividing the sum by the count.",
          },
        ],
      },

      {
        id: "apt-04",
        order: 4,
        title: "Time & Work",
        description: "Understand the basics of work-rate problems.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Time and work problems relate the amount of work completed to the time and rate involved.",
          points: [
            {
              title: "Work rate",
              explanation:
                "A person's work rate represents how much work they complete per unit of time.",
            },
            {
              title: "Combined work",
              explanation:
                "When people work together, their rates can be combined.",
            },
            {
              title: "Efficiency",
              explanation:
                "Higher efficiency generally means more work can be completed in the same amount of time.",
            },
          ],
        },
        practice: [
          {
            question: "What does work rate describe?",
            options: [
              "Work completed per unit of time",
              "Only total salary",
              "Distance travelled",
              "Number of workers only",
            ],
            correctAnswer: "Work completed per unit of time",
            explanation:
              "Work rate connects work completed with time.",
          },
        ],
      },
    ],
  },

  {
    id: "logical-reasoning",
    title: "Logical Reasoning",
    category: "Aptitude & Competitive",
    icon: "🧩",
    description:
      "Improve pattern recognition, deduction and structured reasoning.",
    estimatedMinutes: 15,
    chapters: [
      {
        id: "logic-01",
        order: 1,
        title: "Number Patterns",
        description: "Learn how to identify patterns in sequences.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "Sequence questions test your ability to identify relationships between numbers.",
          points: [
            {
              title: "Difference",
              explanation:
                "Check whether consecutive numbers change by a common difference.",
            },
            {
              title: "Multiplication",
              explanation:
                "Some sequences follow multiplication or division patterns.",
            },
            {
              title: "Alternating patterns",
              explanation:
                "Some sequences use different rules at alternating positions.",
            },
          ],
        },
        practice: [
          {
            question: "What should you look for first in a simple number sequence?",
            options: [
              "A relationship between consecutive values",
              "The color of the numbers",
              "The font",
              "The page size",
            ],
            correctAnswer: "A relationship between consecutive values",
            explanation:
              "Sequence problems are solved by identifying the relationship between values.",
          },
        ],
      },

      {
        id: "logic-02",
        order: 2,
        title: "Coding-Decoding",
        description: "Understand simple transformation patterns.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "Coding-decoding questions represent information using a particular transformation rule.",
          points: [
            {
              title: "Identify the rule",
              explanation:
                "First determine how the original information is transformed.",
            },
            {
              title: "Apply consistently",
              explanation:
                "The same rule should be applied to the new input.",
            },
          ],
        },
        practice: [
          {
            question: "What is the first step in a coding-decoding problem?",
            options: [
              "Identify the transformation rule",
              "Guess randomly",
              "Ignore the examples",
              "Change the question",
            ],
            correctAnswer: "Identify the transformation rule",
            explanation:
              "Finding the transformation rule is central to solving coding-decoding questions.",
          },
        ],
      },

      {
        id: "logic-03",
        order: 3,
        title: "Blood Relations",
        description: "Solve family relationship reasoning problems.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "Blood relation questions require you to map relationships carefully.",
          points: [
            {
              title: "Draw a relationship tree",
              explanation:
                "A small diagram can make complex relationships easier to follow.",
            },
            {
              title: "Track generations",
              explanation:
                "Parents, children and siblings belong to different relationship levels.",
            },
          ],
        },
        practice: [
          {
            question: "What can help solve complex family relationship questions?",
            options: [
              "A relationship diagram",
              "Random guessing",
              "Ignoring genders",
              "Skipping relationships",
            ],
            correctAnswer: "A relationship diagram",
            explanation:
              "A simple relationship tree can make connections easier to understand.",
          },
        ],
      },

      {
        id: "logic-04",
        order: 4,
        title: "Seating Arrangements",
        description: "Learn the basics of arrangement-based reasoning.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Seating arrangement questions require converting verbal constraints into positions.",
          points: [
            {
              title: "Draw positions",
              explanation:
                "Represent seats visually before placing people.",
            },
            {
              title: "Use fixed clues",
              explanation:
                "Start with clues that provide the most direct position information.",
            },
            {
              title: "Eliminate possibilities",
              explanation:
                "Use each clue to remove impossible arrangements.",
            },
          ],
        },
        practice: [
          {
            question: "What is a useful first step in a seating arrangement problem?",
            options: [
              "Represent the seats visually",
              "Guess immediately",
              "Ignore the clues",
              "Calculate percentages",
            ],
            correctAnswer: "Represent the seats visually",
            explanation:
              "Drawing the arrangement makes positional relationships easier to reason about.",
          },
        ],
      },
    ],
  },

  // ============================================================
  // CAREER
  // ============================================================

  {
    id: "resume-foundation",
    title: "Resume Fundamentals",
    category: "Career & Placement",
    icon: "📄",
    description:
      "Learn how to create a clear, focused and useful technical resume.",
    estimatedMinutes: 15,
    chapters: [
      {
        id: "resume-01",
        order: 1,
        title: "Resume Structure",
        description: "Understand the important sections of a resume.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "A resume should quickly communicate your relevant skills, experience and achievements.",
          points: [
            {
              title: "Contact information",
              explanation:
                "Provide appropriate contact details and professional links.",
            },
            {
              title: "Skills",
              explanation:
                "List relevant technical and professional skills clearly.",
            },
            {
              title: "Projects",
              explanation:
                "Projects demonstrate that you can apply what you have learned.",
            },
          ],
        },
        practice: [
          {
            question: "What should a technical resume communicate quickly?",
            options: [
              "Relevant skills and experience",
              "Every personal detail",
              "A long biography",
              "Random hobbies only",
            ],
            correctAnswer: "Relevant skills and experience",
            explanation:
              "A resume should make relevant qualifications easy to identify.",
          },
        ],
      },

      {
        id: "resume-02",
        order: 2,
        title: "Writing Project Descriptions",
        description: "Describe projects using meaningful technical information.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "Good project descriptions explain what you built, how you built it and what problem it addresses.",
          points: [
            {
              title: "Problem",
              explanation:
                "Briefly explain what the project aims to solve.",
            },
            {
              title: "Technology",
              explanation:
                "Mention the important technologies used.",
            },
            {
              title: "Contribution",
              explanation:
                "Explain what you personally implemented or contributed.",
            },
          ],
        },
        practice: [
          {
            question: "What makes a project description stronger?",
            options: [
              "Problem, technology and contribution",
              "Only the project name",
              "Only the color of the UI",
              "A paragraph about unrelated hobbies",
            ],
            correctAnswer: "Problem, technology and contribution",
            explanation:
              "These details help recruiters understand the project's relevance and your role.",
          },
        ],
      },

      {
        id: "resume-03",
        order: 3,
        title: "Achievements & Impact",
        description: "Present meaningful achievements clearly.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "Achievements are stronger when they show an outcome rather than simply listing an activity.",
          points: [
            {
              title: "Specific",
              explanation:
                "Use concrete information whenever appropriate.",
            },
            {
              title: "Relevant",
              explanation:
                "Prioritize achievements related to the role.",
            },
            {
              title: "Evidence",
              explanation:
                "Results, rankings, awards or measurable outcomes can strengthen a claim.",
            },
          ],
        },
        practice: [
          {
            question: "Which achievement description is generally stronger?",
            options: [
              "A specific achievement with evidence",
              "A vague statement",
              "An unrelated detail",
              "A sentence with no information",
            ],
            correctAnswer: "A specific achievement with evidence",
            explanation:
              "Specific evidence makes achievements more credible and useful.",
          },
        ],
      },

      {
        id: "resume-04",
        order: 4,
        title: "Resume Review",
        description: "Learn a simple process for improving your resume.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "A resume improves through repeated review and refinement.",
          points: [
            {
              title: "Remove unnecessary content",
              explanation:
                "Keep the document focused on relevant information.",
            },
            {
              title: "Check consistency",
              explanation:
                "Formatting, dates and section styles should be consistent.",
            },
            {
              title: "Proofread",
              explanation:
                "Grammar and spelling mistakes can reduce professionalism.",
            },
          ],
        },
        practice: [
          {
            question: "What should you do before submitting a resume?",
            options: [
              "Review and proofread it",
              "Add random information",
              "Remove all project details",
              "Ignore formatting",
            ],
            correctAnswer: "Review and proofread it",
            explanation:
              "Reviewing helps catch errors and unnecessary content.",
          },
        ],
      },
    ],
  },

  {
    id: "interview-foundation",
    title: "Interview Fundamentals",
    category: "Career & Placement",
    icon: "🎤",
    description:
      "Build confidence with common technical and HR interview situations.",
    estimatedMinutes: 15,
    chapters: [
      {
        id: "interview-01",
        order: 1,
        title: "Tell Me About Yourself",
        description: "Build a concise professional introduction.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "A good introduction gives the interviewer a quick understanding of your background and direction.",
          points: [
            {
              title: "Present",
              explanation:
                "Start with who you are and what you are currently studying or doing.",
            },
            {
              title: "Skills",
              explanation:
                "Mention a few relevant strengths.",
            },
            {
              title: "Direction",
              explanation:
                "Explain what type of opportunity or role interests you.",
            },
          ],
        },
        practice: [
          {
            question: "What should a self-introduction focus on?",
            options: [
              "Relevant background, skills and direction",
              "Your entire childhood",
              "Unrelated personal stories",
              "Only your hobbies",
            ],
            correctAnswer: "Relevant background, skills and direction",
            explanation:
              "A professional introduction should quickly establish relevant context.",
          },
        ],
      },

      {
        id: "interview-02",
        order: 2,
        title: "Project Questions",
        description: "Prepare to explain projects you have built.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "Interviewers often ask about projects to understand practical knowledge and ownership.",
          points: [
            {
              title: "Problem",
              explanation:
                "Explain the problem your project addresses.",
            },
            {
              title: "Architecture",
              explanation:
                "Be able to explain the major components and how they interact.",
            },
            {
              title: "Challenges",
              explanation:
                "Discuss real problems you encountered and how you approached them.",
            },
          ],
        },
        practice: [
          {
            question: "Why might an interviewer ask about your project?",
            options: [
              "To understand practical knowledge and ownership",
              "Only to ask about colors",
              "To test typing speed",
              "To avoid technical discussion",
            ],
            correctAnswer: "To understand practical knowledge and ownership",
            explanation:
              "Project questions can reveal how well you understand and contributed to your work.",
          },
        ],
      },

      {
        id: "interview-03",
        order: 3,
        title: "Technical Fundamentals",
        description: "Prepare to explain concepts instead of memorizing definitions.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Technical interviews often test whether you understand the ideas behind the technologies you use.",
          points: [
            {
              title: "Explain simply",
              explanation:
                "Try to explain concepts in your own words.",
            },
            {
              title: "Examples",
              explanation:
                "Examples can demonstrate deeper understanding.",
            },
            {
              title: "Why",
              explanation:
                "Understanding why a technology or approach is used is valuable.",
            },
          ],
        },
        practice: [
          {
            question: "What demonstrates stronger technical understanding?",
            options: [
              "Explaining the concept with reasoning and examples",
              "Repeating one definition",
              "Avoiding examples",
              "Memorizing without understanding",
            ],
            correctAnswer:
              "Explaining the concept with reasoning and examples",
            explanation:
              "Reasoning and examples show that you understand how and why a concept works.",
          },
        ],
      },

      {
        id: "interview-04",
        order: 4,
        title: "Handling Difficult Questions",
        description: "Learn how to respond when you do not know something.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "You will not know every interview question. A thoughtful response is better than pretending to know.",
          points: [
            {
              title: "Stay calm",
              explanation:
                "Take a moment to understand the question.",
            },
            {
              title: "Think aloud",
              explanation:
                "When appropriate, explain your reasoning.",
            },
            {
              title: "Be honest",
              explanation:
                "It is better to clearly state when you do not know something and explain what you do know.",
            },
          ],
        },
        practice: [
          {
            question: "What is a good response when you genuinely do not know an answer?",
            options: [
              "Be honest and explain what you know",
              "Invent a technical answer",
              "Leave immediately",
              "Change the topic",
            ],
            correctAnswer: "Be honest and explain what you know",
            explanation:
              "Honesty combined with clear reasoning is better than pretending to know.",
          },
        ],
      },
    ],
  },

  // ============================================================
  // THINKING / PERSONAL DEVELOPMENT
  // ============================================================

  {
    id: "critical-thinking",
    title: "Critical Thinking",
    category: "Thinking & Problem Solving",
    icon: "🔎",
    description:
      "Learn how to question assumptions, evaluate evidence and reason carefully.",
    estimatedMinutes: 15,
    chapters: [
      {
        id: "critical-01",
        order: 1,
        title: "Facts vs Opinions",
        description: "Learn to distinguish claims from evidence.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "Critical thinking begins with recognizing the difference between information and interpretation.",
          points: [
            {
              title: "Fact",
              explanation:
                "A factual claim can potentially be checked against evidence.",
            },
            {
              title: "Opinion",
              explanation:
                "An opinion expresses a belief, judgment or preference.",
            },
            {
              title: "Evidence",
              explanation:
                "Evidence helps determine whether a claim is well supported.",
            },
          ],
        },
        practice: [
          {
            question: "What helps evaluate whether a claim is reliable?",
            options: ["Evidence", "Guessing", "Popularity alone", "Rumors"],
            correctAnswer: "Evidence",
            explanation:
              "Evidence provides support that can be examined.",
          },
        ],
      },

      {
        id: "critical-02",
        order: 2,
        title: "Questioning Assumptions",
        description: "Identify hidden assumptions in reasoning.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "An assumption is something accepted as true without necessarily being proven.",
          points: [
            {
              title: "Identify",
              explanation:
                "Ask what must be true for an argument to work.",
            },
            {
              title: "Test",
              explanation:
                "Consider whether the assumption is supported.",
            },
            {
              title: "Alternative",
              explanation:
                "Look for other explanations that could fit the evidence.",
            },
          ],
        },
        practice: [
          {
            question: "What should you do with an important assumption?",
            options: [
              "Question and test it",
              "Always accept it",
              "Ignore it",
              "Hide it",
            ],
            correctAnswer: "Question and test it",
            explanation:
              "Testing assumptions helps avoid unsupported conclusions.",
          },
        ],
      },

      {
        id: "critical-03",
        order: 3,
        title: "Cause & Effect",
        description: "Understand the difference between correlation and causation.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Two things happening together does not automatically mean one caused the other.",
          points: [
            {
              title: "Correlation",
              explanation:
                "Correlation means two variables are associated in some way.",
            },
            {
              title: "Causation",
              explanation:
                "Causation means one factor contributes to producing another.",
            },
            {
              title: "Alternative causes",
              explanation:
                "Other variables may explain an observed relationship.",
            },
          ],
        },
        practice: [
          {
            question: "Does correlation automatically prove causation?",
            options: ["No", "Yes", "Always", "Only in advertisements"],
            correctAnswer: "No",
            explanation:
              "Correlation alone does not establish that one variable caused another.",
          },
        ],
      },

      {
        id: "critical-04",
        order: 4,
        title: "Better Decisions",
        description: "Use structured reasoning when making decisions.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "Good decisions come from identifying goals, options, evidence and trade-offs.",
          points: [
            {
              title: "Goal",
              explanation:
                "Know what outcome you are trying to achieve.",
            },
            {
              title: "Options",
              explanation:
                "Consider realistic alternatives.",
            },
            {
              title: "Trade-offs",
              explanation:
                "Every option may have benefits and disadvantages.",
            },
          ],
        },
        practice: [
          {
            question: "What should you identify before comparing options?",
            options: [
              "The goal",
              "Only the most popular option",
              "A random answer",
              "Nothing",
            ],
            correctAnswer: "The goal",
            explanation:
              "Knowing the goal provides a basis for comparing alternatives.",
          },
        ],
      },
    ],
  },

  // ============================================================
  // LIFE SKILLS
  // ============================================================

  {
    id: "time-management",
    title: "Time Management",
    category: "Personal Development",
    icon: "⏰",
    description:
      "Build practical habits for organizing study, work and personal time.",
    estimatedMinutes: 15,
    chapters: [
      {
        id: "time-01",
        order: 1,
        title: "Where Does Your Time Go?",
        description: "Understand how to identify time-consuming activities.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "Before improving time management, it helps to understand where your available time is actually going.",
          points: [
            {
              title: "Track",
              explanation:
                "Observe how you spend your time during a normal day.",
            },
            {
              title: "Patterns",
              explanation:
                "Look for repeated activities that consume more time than expected.",
            },
            {
              title: "Priorities",
              explanation:
                "Separate important activities from activities that simply feel urgent.",
            },
          ],
        },
        practice: [
          {
            question: "What is a useful first step in improving time management?",
            options: [
              "Understand how you currently spend time",
              "Create ten schedules immediately",
              "Stop taking breaks",
              "Work constantly",
            ],
            correctAnswer: "Understand how you currently spend time",
            explanation:
              "Awareness of current habits helps you identify where changes are useful.",
          },
        ],
      },

      {
        id: "time-02",
        order: 2,
        title: "Prioritization",
        description: "Learn how to decide what deserves attention first.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "Not every task has the same importance or urgency.",
          points: [
            {
              title: "Important",
              explanation:
                "Important tasks contribute significantly to your goals.",
            },
            {
              title: "Urgent",
              explanation:
                "Urgent tasks require attention soon.",
            },
            {
              title: "Prioritize",
              explanation:
                "Use importance and deadlines to decide what should receive attention first.",
            },
          ],
        },
        practice: [
          {
            question: "Why prioritize tasks?",
            options: [
              "To focus attention on what matters most",
              "To make every task urgent",
              "To avoid all planning",
              "To increase the number of tasks",
            ],
            correctAnswer: "To focus attention on what matters most",
            explanation:
              "Prioritization helps direct limited time and attention toward meaningful work.",
          },
        ],
      },

      {
        id: "time-03",
        order: 3,
        title: "Focused Work",
        description: "Learn how to create short periods of focused work.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "Focused sessions can make difficult tasks easier to start and complete.",
          points: [
            {
              title: "Single task",
              explanation:
                "Focus on one clearly defined task at a time.",
            },
            {
              title: "Remove distractions",
              explanation:
                "Reducing interruptions makes it easier to maintain attention.",
            },
            {
              title: "Breaks",
              explanation:
                "Short breaks can help maintain sustainable focus.",
            },
          ],
        },
        practice: [
          {
            question: "What can improve focus during a study session?",
            options: [
              "Reducing distractions",
              "Opening many unrelated apps",
              "Constantly switching tasks",
              "Checking notifications every minute",
            ],
            correctAnswer: "Reducing distractions",
            explanation:
              "Fewer distractions make sustained attention easier.",
          },
        ],
      },

      {
        id: "time-04",
        order: 4,
        title: "Building a Routine",
        description: "Turn useful habits into a realistic routine.",
        estimatedMinutes: 8,
        lesson: {
          introduction:
            "A useful routine should be realistic enough to follow consistently.",
          points: [
            {
              title: "Start small",
              explanation:
                "Small repeatable actions are easier to maintain.",
            },
            {
              title: "Consistency",
              explanation:
                "Repeated practice gradually makes a behavior easier.",
            },
            {
              title: "Review",
              explanation:
                "Adjust routines when they stop working well.",
            },
          ],
        },
        practice: [
          {
            question: "What makes a routine more sustainable?",
            options: [
              "Realistic and repeatable habits",
              "An impossible schedule",
              "No flexibility",
              "Doing everything at once",
            ],
            correctAnswer: "Realistic and repeatable habits",
            explanation:
              "Sustainable routines are practical enough to repeat consistently.",
          },
        ],
      },
    ],
  },

  // ============================================================
  // FUN / MENTAL CHALLENGES
  // ============================================================

  {
    id: "brain-puzzles",
    title: "Brain Puzzles",
    category: "Fun & Mental Challenges",
    icon: "🧩",
    description:
      "Train observation, pattern recognition and logical thinking through short puzzles.",
    estimatedMinutes: 10,
    chapters: [
      {
        id: "puzzle-01",
        order: 1,
        title: "Pattern Hunt",
        description: "Spot relationships hidden in simple sequences.",
        estimatedMinutes: 5,
        lesson: {
          introduction:
            "Pattern recognition is the ability to notice relationships between pieces of information.",
          points: [
            {
              title: "Look for repetition",
              explanation:
                "Repeated structures can reveal the underlying rule.",
            },
            {
              title: "Compare changes",
              explanation:
                "Look at how one element changes into the next.",
            },
          ],
        },
        practice: [
          {
            question: "What is useful when solving a sequence puzzle?",
            options: [
              "Look for a consistent pattern",
              "Guess immediately",
              "Ignore previous values",
              "Choose the longest answer",
            ],
            correctAnswer: "Look for a consistent pattern",
            explanation:
              "The goal of sequence puzzles is usually to discover the underlying pattern.",
          },
        ],
      },

      {
        id: "puzzle-02",
        order: 2,
        title: "Odd One Out",
        description: "Find the item that does not follow the common rule.",
        estimatedMinutes: 5,
        lesson: {
          introduction:
            "Odd-one-out puzzles require identifying the shared property among most items.",
          points: [
            {
              title: "Find the common property",
              explanation:
                "Look for what most items have in common.",
            },
            {
              title: "Check the exception",
              explanation:
                "The answer is usually the item that breaks the identified pattern.",
            },
          ],
        },
        practice: [
          {
            question: "What should you identify first in an odd-one-out puzzle?",
            options: [
              "The common property",
              "The longest word",
              "The first option",
              "The smallest font",
            ],
            correctAnswer: "The common property",
            explanation:
              "Finding the common property makes the exception easier to identify.",
          },
        ],
      },

      {
        id: "puzzle-03",
        order: 3,
        title: "Quick Logic",
        description: "Solve short reasoning problems.",
        estimatedMinutes: 5,
        lesson: {
          introduction:
            "Short logic puzzles encourage careful reading and structured reasoning.",
          points: [
            {
              title: "Read carefully",
              explanation:
                "Small details can change the meaning of a puzzle.",
            },
            {
              title: "Separate facts",
              explanation:
                "Identify what is explicitly stated before making deductions.",
            },
          ],
        },
        practice: [
          {
            question: "What is important when solving a logic puzzle?",
            options: [
              "Careful reading",
              "Random guessing",
              "Ignoring details",
              "Answering before reading",
            ],
            correctAnswer: "Careful reading",
            explanation:
              "Logic puzzles often depend on precise wording and details.",
          },
        ],
      },

      {
        id: "puzzle-04",
        order: 4,
        title: "Memory Challenge",
        description: "Practice remembering and recalling information.",
        estimatedMinutes: 5,
        lesson: {
          introduction:
            "Memory improves when information is organized and actively recalled.",
          points: [
            {
              title: "Chunking",
              explanation:
                "Grouping information into meaningful chunks can make recall easier.",
            },
            {
              title: "Active recall",
              explanation:
                "Trying to remember information without looking at it strengthens retrieval practice.",
            },
          ],
        },
        practice: [
          {
            question: "Which technique groups information into meaningful units?",
            options: ["Chunking", "Ignoring", "Scrolling", "Skipping"],
            correctAnswer: "Chunking",
            explanation:
              "Chunking organizes information into manageable groups.",
          },
        ],
      },
    ],
  },
];