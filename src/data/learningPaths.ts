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
            "Hiragana is one of the main writing systems used in Japanese. It is essential for beginners because it appears in basic words, grammar and sentence endings.",
          points: [
            {
              title: "Hiragana",
              explanation:
                "Hiragana represents Japanese sounds and is commonly used for grammatical elements and native Japanese words.",
            },
            {
              title: "Five basic vowel sounds",
              explanation:
                "Japanese has five basic vowel sounds: a, i, u, e and o.",
            },
            {
              title: "Pronunciation",
              explanation:
                "Japanese pronunciation is generally regular, so learning the sound of each kana helps you read unfamiliar words.",
            },
          ],
          example: "あ = a, い = i, う = u, え = e, お = o",
        },
        practice: [
          {
            question: "Which Japanese script is commonly learned first by beginners?",
            options: ["Hiragana", "Roman alphabet", "Arabic", "Hangul"],
            correctAnswer: "Hiragana",
            explanation:
              "Hiragana is one of the first Japanese scripts beginners normally learn.",
          },
        ],
      },

      {
        id: "jp-02",
        order: 2,
        title: "Basic Greetings",
        description: "Learn useful greetings for everyday situations.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Japanese greetings change depending on the time of day and situation.",
          points: [
            {
              title: "Ohayou gozaimasu",
              explanation: "A polite way to say good morning.",
            },
            {
              title: "Konnichiwa",
              explanation: "A common daytime greeting.",
            },
            {
              title: "Konbanwa",
              explanation: "A common evening greeting.",
            },
            {
              title: "Arigatou gozaimasu",
              explanation: "A polite way to say thank you.",
            },
          ],
        },
        practice: [
          {
            question: "What does 'Arigatou gozaimasu' mean?",
            options: ["Good morning", "Thank you", "Good night", "Sorry"],
            correctAnswer: "Thank you",
            explanation:
              "Arigatou gozaimasu is a polite expression meaning thank you.",
          },
        ],
      },

      {
        id: "jp-03",
        order: 3,
        title: "Introducing Yourself",
        description: "Learn how to give a simple self-introduction.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Self-introduction is one of the most useful beginner Japanese conversations.",
          points: [
            {
              title: "Watashi wa...",
              explanation:
                "Watashi wa is commonly used to introduce yourself or state something about yourself.",
            },
            {
              title: "Name",
              explanation:
                "You can introduce your name using 'Watashi wa [name] desu.'",
            },
            {
              title: "Desu",
              explanation:
                "Desu is commonly used at the end of polite beginner sentences.",
            },
          ],
          example: "Watashi wa Jeevitha desu.",
        },
        practice: [
          {
            question: "What does 'Watashi wa ... desu' commonly express?",
            options: [
              "I am ...",
              "Where is ...?",
              "Please sit",
              "Good night",
            ],
            correctAnswer: "I am ...",
            explanation:
              "Watashi wa ... desu is a basic pattern for introducing or describing yourself.",
          },
        ],
      },

      {
        id: "jp-04",
        order: 4,
        title: "Numbers and Time",
        description: "Learn basic numbers and simple time expressions.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Numbers are used constantly in Japanese for time, dates, prices and everyday conversations.",
          points: [
            {
              title: "Basic numbers",
              explanation:
                "Start by learning the numbers from one to ten.",
            },
            {
              title: "Counting",
              explanation:
                "Japanese has different counters depending on what is being counted, but beginners can start with basic numbers.",
            },
            {
              title: "Time",
              explanation:
                "Time is commonly expressed using numbers followed by ji for hours.",
            },
          ],
          example: "San-ji = 3 o'clock",
        },
        practice: [
          {
            question: "What does 'san' mean in basic Japanese numbers?",
            options: ["One", "Two", "Three", "Five"],
            correctAnswer: "Three",
            explanation: "San is the Japanese number three.",
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
      "Understand the foundations of data structures and algorithms step by step.",
    estimatedMinutes: 20,
    chapters: [
      {
        id: "dsa-01",
        order: 1,
        title: "What Is an Algorithm?",
        description: "Understand algorithms and why they matter.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "An algorithm is a step-by-step procedure used to solve a problem.",
          points: [
            {
              title: "Input",
              explanation:
                "An algorithm usually receives some input that it needs to process.",
            },
            {
              title: "Processing",
              explanation:
                "The algorithm applies a sequence of logical steps to the input.",
            },
            {
              title: "Output",
              explanation:
                "The algorithm produces a result after completing its steps.",
            },
          ],
          example: "Finding the largest number in a list.",
        },
        practice: [
          {
            question: "What is an algorithm?",
            options: [
              "A step-by-step problem-solving procedure",
              "Only a programming language",
              "A computer monitor",
              "A database",
            ],
            correctAnswer: "A step-by-step problem-solving procedure",
            explanation:
              "An algorithm describes logical steps for solving a problem.",
          },
        ],
      },

      {
        id: "dsa-02",
        order: 2,
        title: "Time Complexity",
        description: "Learn how to think about algorithm efficiency.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Time complexity describes how the amount of work performed by an algorithm grows as the input size increases.",
          points: [
            {
              title: "Input size",
              explanation:
                "We commonly represent input size using n.",
            },
            {
              title: "Big O",
              explanation:
                "Big O notation gives a high-level description of growth.",
            },
            {
              title: "Common complexities",
              explanation:
                "O(1), O(log n), O(n), O(n log n) and O(n²) are common examples.",
            },
          ],
        },
        practice: [
          {
            question: "Which complexity represents constant time?",
            options: ["O(1)", "O(n)", "O(n²)", "O(log n)"],
            correctAnswer: "O(1)",
            explanation:
              "O(1) means the amount of work does not grow with input size.",
          },
        ],
      },

      {
        id: "dsa-03",
        order: 3,
        title: "Arrays",
        description: "Understand arrays and basic array operations.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "An array stores multiple values in an ordered collection.",
          points: [
            {
              title: "Index",
              explanation:
                "Array elements are accessed using positions called indexes.",
            },
            {
              title: "Access",
              explanation:
                "Accessing an element by index is typically very fast.",
            },
            {
              title: "Traversal",
              explanation:
                "Traversal means visiting the elements one by one.",
            },
          ],
        },
        practice: [
          {
            question: "How are array elements commonly accessed?",
            options: ["Using an index", "Using a password", "Using a file", "Using a port"],
            correctAnswer: "Using an index",
            explanation:
              "Arrays use indexes to identify element positions.",
          },
        ],
      },

      {
        id: "dsa-04",
        order: 4,
        title: "Searching",
        description: "Learn linear and binary search concepts.",
        estimatedMinutes: 10,
        lesson: {
          introduction:
            "Searching means finding a required value inside a collection.",
          points: [
            {
              title: "Linear search",
              explanation:
                "Linear search checks elements one by one.",
            },
            {
              title: "Binary search",
              explanation:
                "Binary search repeatedly divides a sorted search space in half.",
            },
            {
              title: "Sorted data",
              explanation:
                "Binary search requires the search data to be ordered.",
            },
          ],
        },
        practice: [
          {
            question: "What condition is normally required for binary search?",
            options: [
              "The data must be sorted",
              "The data must be random",
              "The array must contain one item",
              "The data must be encrypted",
            ],
            correctAnswer: "The data must be sorted",
            explanation:
              "Binary search relies on ordered data to eliminate half of the search space.",
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