export type ChallengeQuestion = {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

export type Challenge = {
  id: number;
  title: string;
  category: string;
  skill: string;
  duration: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  type: "Learn" | "Practice" | "Challenge";
  intro: string;
  learn: string[];
  example: string;
  question: ChallengeQuestion;

  // Skill Chain information
  chainId?: string;
  chainTitle?: string;
  chainOrder?: number;
};

export const challenges: Challenge[] = [
  // =========================================================
  // 5-MINUTE CHALLENGES
  // =========================================================

  {
    id: 1,
    title: "Learn 5 Japanese Words",
    category: "Languages",
    skill: "Japanese",
    duration: 5,
    difficulty: "Beginner",
    type: "Learn",
    intro:
      "Learn five useful Japanese words that you can start using immediately.",
    learn: [
      "こんにちは (Konnichiwa) — Hello",
      "ありがとう (Arigatou) — Thank you",
      "すみません (Sumimasen) — Excuse me / Sorry",
      "だいじょうぶ (Daijoubu) — It's okay",
      "わかりません (Wakarimasen) — I don't understand",
    ],
    example:
      "Example: If someone asks you something and you don't understand, you can say 'Wakarimasen.'",
    question: {
      question: "What does 'Wakarimasen' mean?",
      options: [
        "Thank you",
        "I don't understand",
        "It's okay",
        "Good morning",
      ],
      correctAnswer: "I don't understand",
      explanation:
        "Wakarimasen means 'I don't understand' and is a useful phrase for beginners.",
    },

    chainId: "japanese-foundation",
    chainTitle: "Japanese Foundation",
    chainOrder: 1,
  },

  {
    id: 2,
    title: "Create Better Ideas",
    category: "Creativity",
    skill: "Creative Thinking",
    duration: 5,
    difficulty: "Beginner",
    type: "Practice",
    intro:
      "Train yourself to generate more ideas instead of stopping at the first one.",
    learn: [
      "Start with a simple problem.",
      "Generate at least three possible solutions.",
      "Do not judge ideas while generating them.",
      "Combine two ideas to create a new one.",
    ],
    example:
      "Problem: Students forget deadlines. Idea 1: reminder app. Idea 2: calendar. Idea 3: visual deadline board.",
    question: {
      question: "What is the best first step when brainstorming?",
      options: [
        "Judge every idea immediately",
        "Generate several ideas",
        "Choose the first idea",
        "Avoid unusual ideas",
      ],
      correctAnswer: "Generate several ideas",
      explanation:
        "Brainstorming works better when you generate multiple possibilities before evaluating them.",
    },
  },

  {
    id: 3,
    title: "Explain Something Clearly",
    category: "Communication",
    skill: "Communication",
    duration: 5,
    difficulty: "Beginner",
    type: "Practice",
    intro:
      "Learn a simple structure for explaining technical or everyday ideas clearly.",
    learn: [
      "Start with the main idea.",
      "Use simple language.",
      "Give one example.",
      "Avoid unnecessary technical words.",
      "Finish with the key takeaway.",
    ],
    example:
      "Instead of explaining a database with complicated terminology, describe it as an organized place where information is stored and retrieved.",
    question: {
      question: "Which approach usually makes an explanation clearer?",
      options: [
        "Use as much jargon as possible",
        "Make the explanation complicated",
        "Use simple language and examples",
        "Avoid examples",
      ],
      correctAnswer: "Use simple language and examples",
      explanation:
        "Simple language combined with examples helps people understand unfamiliar concepts.",
    },

    chainId: "communication-foundation",
    chainTitle: "Communication Foundation",
    chainOrder: 1,
  },

  // =========================================================
  // 10-MINUTE CHALLENGES
  // =========================================================

  {
    id: 4,
    title: "Understand Binary Search",
    category: "Engineering & Technology",
    skill: "DSA",
    duration: 10,
    difficulty: "Beginner",
    type: "Learn",
    intro:
      "Understand the basic idea behind binary search and why it is much faster than checking every element.",
    learn: [
      "Binary search works on a sorted collection.",
      "Instead of checking every element, it checks the middle.",
      "If the target is smaller, search the left half.",
      "If the target is larger, search the right half.",
      "The search space is repeatedly divided in half.",
    ],
    example:
      "Searching for 70 in [10, 20, 30, 40, 50, 60, 70, 80]. Start at the middle, eliminate half the possibilities, and continue.",
    question: {
      question: "What is the main idea behind binary search?",
      options: [
        "Check every element",
        "Randomly select elements",
        "Repeatedly divide the search space in half",
        "Sort the array after every search",
      ],
      correctAnswer: "Repeatedly divide the search space in half",
      explanation:
        "Binary search eliminates half of the remaining search space at each step.",
    },

    chainId: "dsa-foundation",
    chainTitle: "DSA Foundation",
    chainOrder: 1,
  },

  {
    id: 5,
    title: "Learn an OOP Concept",
    category: "Engineering & Technology",
    skill: "OOP",
    duration: 10,
    difficulty: "Beginner",
    type: "Learn",
    intro:
      "Understand the core idea of objects and classes in Object-Oriented Programming.",
    learn: [
      "A class is a blueprint.",
      "An object is an instance created from a class.",
      "Classes can contain data and behavior.",
      "Objects represent entities in a program.",
    ],
    example:
      "A Car class can define properties such as color and speed and behaviors such as accelerate().",
    question: {
      question: "What is a class?",
      options: [
        "A database",
        "A blueprint for creating objects",
        "A programming language",
        "A type of loop",
      ],
      correctAnswer: "A blueprint for creating objects",
      explanation:
        "A class defines the structure and behavior that objects created from it can have.",
    },
  },

  {
    id: 6,
    title: "Understand Git Branches",
    category: "Engineering & Technology",
    skill: "Git",
    duration: 10,
    difficulty: "Beginner",
    type: "Learn",
    intro:
      "Learn why developers use Git branches and how branches help manage different versions of work.",
    learn: [
      "A branch is an independent line of development.",
      "The main branch usually contains the stable project.",
      "Developers can create branches for features or fixes.",
      "Branches can later be merged.",
    ],
    example:
      "You can create a feature branch, develop the feature there, test it, and merge it into main when ready.",
    question: {
      question: "Why are Git branches useful?",
      options: [
        "They delete the repository",
        "They allow separate lines of development",
        "They replace GitHub",
        "They automatically write code",
      ],
      correctAnswer: "They allow separate lines of development",
      explanation:
        "Branches let developers work on features or fixes without directly changing the main line of development.",
    },

    chainId: "git-foundation",
    chainTitle: "Git & GitHub Foundation",
    chainOrder: 1,
  },

  {
    id: 7,
    title: "Practice Percentages",
    category: "Aptitude & Competitive",
    skill: "Quantitative Aptitude",
    duration: 10,
    difficulty: "Beginner",
    type: "Practice",
    intro:
      "Strengthen your understanding of percentages using a simple real-world example.",
    learn: [
      "Percentage means 'out of 100'.",
      "25% means 25 out of 100.",
      "To find a percentage of a number, multiply by the percentage as a decimal.",
    ],
    example: "20% of 150 = 0.20 × 150 = 30.",
    question: {
      question: "What is 20% of 200?",
      options: ["20", "30", "40", "50"],
      correctAnswer: "40",
      explanation: "20% of 200 is 0.20 × 200 = 40.",
    },
  },

  {
    id: 8,
    title: "Improve Your Vocabulary",
    category: "Languages",
    skill: "English",
    duration: 10,
    difficulty: "Beginner",
    type: "Learn",
    intro:
      "Learn three useful English words that can make everyday communication more precise.",
    learn: [
      "Pensive — deeply thoughtful.",
      "Concise — expressing something clearly using few words.",
      "Reluctant — not willing or eager to do something.",
    ],
    example:
      "Instead of saying 'He was thinking deeply', you could say 'He looked pensive.'",
    question: {
      question: "What does 'concise' mean?",
      options: [
        "Very confusing",
        "Using few words clearly",
        "Extremely emotional",
        "Very loud",
      ],
      correctAnswer: "Using few words clearly",
      explanation:
        "Concise means giving information clearly and briefly without unnecessary words.",
    },
  },

  {
    id: 9,
    title: "Improve One Resume Bullet",
    category: "Career & Placement",
    skill: "Resume",
    duration: 10,
    difficulty: "Beginner",
    type: "Practice",
    intro:
      "Turn a weak resume statement into a stronger achievement-focused statement.",
    learn: [
      "Start with an action verb.",
      "Mention what you built or did.",
      "Include technology when relevant.",
      "Mention measurable results when available.",
    ],
    example:
      "Weak: 'Worked on a website.' Stronger: 'Developed a responsive student resource website using React.'",
    question: {
      question: "Which resume bullet is stronger?",
      options: [
        "Worked on a project",
        "Did coding",
        "Developed a responsive web application using React",
        "Learned React",
      ],
      correctAnswer:
        "Developed a responsive web application using React",
      explanation:
        "The stronger bullet uses an action verb and clearly communicates what was done and which technology was used.",
    },

    chainId: "career-foundation",
    chainTitle: "Career Foundation",
    chainOrder: 1,
  },

  {
    id: 10,
    title: "Spot the Assumption",
    category: "Thinking & Problem Solving",
    skill: "Critical Thinking",
    duration: 10,
    difficulty: "Beginner",
    type: "Practice",
    intro:
      "Learn to recognize assumptions hidden inside everyday statements.",
    learn: [
      "A fact can be directly supported by evidence.",
      "An assumption is something accepted without enough evidence.",
      "Ask: 'What am I assuming?'",
      "Separate observations from conclusions.",
    ],
    example:
      "Statement: 'She didn't reply, so she must be angry.' The assumption is that the lack of reply means anger.",
    question: {
      question:
        "Which statement contains an assumption?",
      options: [
        "The bus arrived at 8 AM.",
        "The screen is turned on.",
        "He didn't call, so he must be upset.",
        "The book has 200 pages.",
      ],
      correctAnswer:
        "He didn't call, so he must be upset.",
      explanation:
        "The statement assumes a person's emotional state without enough evidence.",
    },

    chainId: "critical-thinking",
    chainTitle: "Critical Thinking Foundation",
    chainOrder: 1,
  },

  {
    id: 11,
    title: "Plan Tomorrow Better",
    category: "Personal Development",
    skill: "Time Management",
    duration: 10,
    difficulty: "Beginner",
    type: "Practice",
    intro:
      "Use a simple prioritization method to make tomorrow more manageable.",
    learn: [
      "Write down important tasks.",
      "Separate urgent tasks from less important ones.",
      "Choose your top three priorities.",
      "Leave some buffer time for unexpected work.",
    ],
    example:
      "Instead of writing 15 tasks for tomorrow, identify the three tasks that matter most.",
    question: {
      question: "What is a useful way to avoid an overwhelming task list?",
      options: [
        "Add more tasks",
        "Choose your top priorities",
        "Avoid planning",
        "Work on everything simultaneously",
      ],
      correctAnswer: "Choose your top priorities",
      explanation:
        "Prioritization helps you focus your limited time and attention on what matters most.",
    },
  },

  {
    id: 12,
    title: "Recognize a Suspicious Website",
    category: "Life Skills",
    skill: "Digital Safety",
    duration: 10,
    difficulty: "Beginner",
    type: "Learn",
    intro:
      "Learn basic warning signs that can help you evaluate suspicious websites.",
    learn: [
      "Check the website address carefully.",
      "Be cautious of urgent messages demanding action.",
      "Do not blindly trust unexpected login requests.",
      "Look for obvious spelling or branding inconsistencies.",
      "Verify important requests through an official source.",
    ],
    example:
      "A message saying 'Your account will be deleted in 10 minutes — login now!' should make you stop and verify the request.",
    question: {
      question: "What should you do with an unexpected login request?",
      options: [
        "Enter your password immediately",
        "Share it with friends",
        "Verify the request through an official source",
        "Ignore all security warnings",
      ],
      correctAnswer:
        "Verify the request through an official source",
      explanation:
        "Verification helps protect you from phishing and other online scams.",
    },
  },

  // =========================================================
  // 20+ MINUTE CHALLENGES
  // =========================================================

  {
    id: 13,
    title: "Understand Big-O Complexity",
    category: "Engineering & Technology",
    skill: "DSA",
    duration: 20,
    difficulty: "Beginner",
    type: "Learn",
    intro:
      "Understand how Big-O notation describes how an algorithm's work grows as input size increases.",
    learn: [
      "Big-O describes growth in computational work.",
      "O(1) means constant time.",
      "O(n) means work grows roughly with the input size.",
      "O(log n) grows much more slowly than O(n).",
      "Binary search is a common O(log n) algorithm.",
    ],
    example:
      "If you search every element in an array, that can take O(n). Binary search on sorted data can take O(log n).",
    question: {
      question: "What is the typical time complexity of binary search?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correctAnswer: "O(log n)",
      explanation:
        "Binary search repeatedly halves the search space, giving it O(log n) time complexity.",
    },

    chainId: "dsa-foundation",
    chainTitle: "DSA Foundation",
    chainOrder: 2,
  },

  {
    id: 14,
    title: "How the Internet Works",
    category: "Engineering & Technology",
    skill: "Computer Networks",
    duration: 20,
    difficulty: "Beginner",
    type: "Learn",
    intro:
      "Follow the basic journey of a request from your device to a website.",
    learn: [
      "Your device connects to a network.",
      "DNS helps translate domain names into IP addresses.",
      "Your request travels through network infrastructure.",
      "A server receives the request.",
      "The server sends a response back to your device.",
    ],
    example:
      "When you type a website address, your browser needs to find the corresponding server before requesting the page.",
    question: {
      question: "What is DNS mainly used for?",
      options: [
        "Writing HTML",
        "Translating domain names to IP addresses",
        "Encrypting every file",
        "Creating databases",
      ],
      correctAnswer:
        "Translating domain names to IP addresses",
      explanation:
        "DNS helps devices find the IP address associated with a domain name.",
    },
  },

  {
    id: 15,
    title: "SQL Basics: Query a Database",
    category: "Engineering & Technology",
    skill: "DBMS",
    duration: 20,
    difficulty: "Beginner",
    type: "Learn",
    intro:
      "Learn the basic structure of a SQL SELECT query.",
    learn: [
      "SELECT chooses the data you want.",
      "FROM specifies the table.",
      "WHERE filters records.",
      "SQL is commonly used to work with relational databases.",
    ],
    example:
      "SELECT name FROM students WHERE department = 'CSE';",
    question: {
      question: "Which SQL keyword is used to retrieve data?",
      options: ["SELECT", "DELETE", "DROP", "CREATE"],
      correctAnswer: "SELECT",
      explanation:
        "SELECT is used to retrieve data from one or more database tables.",
    },
  },

  {
    id: 16,
    title: "Git & GitHub: Commit to Merge",
    category: "Engineering & Technology",
    skill: "Git & GitHub",
    duration: 20,
    difficulty: "Beginner",
    type: "Learn",
    intro:
      "Understand the basic journey of code from local changes to a merged feature.",
    learn: [
      "Modify files in your project.",
      "Stage the changes.",
      "Create a commit.",
      "Push the branch to GitHub.",
      "Create a pull request and merge it when ready.",
    ],
    example:
      "A developer creates a feature branch, commits the work, pushes it to GitHub, and opens a pull request.",
    question: {
      question: "What usually comes before pushing committed code to GitHub?",
      options: [
        "Deleting the repository",
        "Creating a commit",
        "Installing Windows",
        "Removing the branch",
      ],
      correctAnswer: "Creating a commit",
      explanation:
        "Changes are normally committed locally before they are pushed to a remote repository.",
    },

    chainId: "git-foundation",
    chainTitle: "Git & GitHub Foundation",
    chainOrder: 2,
  },

  {
    id: 17,
    title: "Docker Fundamentals",
    category: "DevOps & Cloud",
    skill: "Docker",
    duration: 20,
    difficulty: "Beginner",
    type: "Learn",
    intro:
      "Understand the difference between Docker images and containers and why developers use them.",
    learn: [
      "A Docker image is a packaged blueprint.",
      "A container is a running instance of an image.",
      "Containers help package applications with their dependencies.",
      "Docker makes environments more consistent.",
    ],
    example:
      "You can create an image containing a Node.js application and then run that image as a container.",
    question: {
      question: "What is a container?",
      options: [
        "A programming language",
        "A running instance of an image",
        "A Git branch",
        "A database table",
      ],
      correctAnswer: "A running instance of an image",
      explanation:
        "A container is a running, isolated environment created from a Docker image.",
    },

    chainId: "docker-foundation",
    chainTitle: "Docker Foundation",
    chainOrder: 1,
  },

  {
    id: 18,
    title: "Build a 60-Second Introduction",
    category: "Communication",
    skill: "Professional Communication",
    duration: 20,
    difficulty: "Beginner",
    type: "Practice",
    intro:
      "Create a short professional introduction that works for interviews, networking, and college events.",
    learn: [
      "Start with your name and current role or education.",
      "Mention your main technical or professional interests.",
      "Mention one project, achievement, or area you are developing.",
      "Finish with what you are currently looking for or learning.",
    ],
    example:
      "A good introduction should communicate who you are, what you work on, and what direction you are interested in.",
    question: {
      question: "What should a professional introduction focus on?",
      options: [
        "Only personal hobbies",
        "Who you are and what you are working toward",
        "Every detail of your life",
        "Only your marks",
      ],
      correctAnswer:
        "Who you are and what you are working toward",
      explanation:
        "A professional introduction should quickly communicate your background, interests, and direction.",
    },

    chainId: "communication-foundation",
    chainTitle: "Communication Foundation",
    chainOrder: 2,
  },

  {
    id: 19,
    title: "Critical Thinking: Fact vs Assumption",
    category: "Thinking & Problem Solving",
    skill: "Critical Thinking",
    duration: 20,
    difficulty: "Beginner",
    type: "Practice",
    intro:
      "Go deeper into separating evidence from conclusions and assumptions.",
    learn: [
      "Facts should be supported by observable evidence.",
      "Assumptions may be reasonable but still require verification.",
      "Ask what evidence supports a conclusion.",
      "Look for alternative explanations.",
    ],
    example:
      "If an application crashes once, saying 'the entire application is broken' is a conclusion that needs more evidence.",
    question: {
      question: "What is a useful critical-thinking question?",
      options: [
        "How can I prove myself right?",
        "What evidence supports this conclusion?",
        "Why should I stop thinking?",
        "Can I ignore other explanations?",
      ],
      correctAnswer:
        "What evidence supports this conclusion?",
      explanation:
        "Checking evidence helps distinguish supported conclusions from unsupported assumptions.",
    },

    chainId: "critical-thinking",
    chainTitle: "Critical Thinking Foundation",
    chainOrder: 2,
  },

  {
    id: 20,
    title: "Japanese N5 Mini Lesson",
    category: "Languages",
    skill: "Japanese",
    duration: 20,
    difficulty: "Beginner",
    type: "Learn",
    intro:
      "Build on basic Japanese vocabulary with simple beginner sentence patterns.",
    learn: [
      "わたし (watashi) means 'I' or 'me'.",
      "です (desu) is commonly used at the end of polite sentences.",
      "は (wa) marks the topic of a sentence.",
      "For example: わたしは がくせいです — I am a student.",
      "Japanese sentence structure often differs from English.",
    ],
    example:
      "わたしは がくせいです。 (Watashi wa gakusei desu.) — I am a student.",
    question: {
      question: "What does 'watashi' mean?",
      options: [
        "You",
        "I / me",
        "Student",
        "Teacher",
      ],
      correctAnswer: "I / me",
      explanation:
        "Watashi is a common polite way to say 'I' or 'me' in Japanese.",
    },

    chainId: "japanese-foundation",
    chainTitle: "Japanese Foundation",
    chainOrder: 2,
  },

  {
    id: 21,
    title: "Digital Privacy Basics",
    category: "Life Skills",
    skill: "Digital Privacy",
    duration: 20,
    difficulty: "Beginner",
    type: "Learn",
    intro:
      "Understand simple habits that can reduce unnecessary exposure of your personal information online.",
    learn: [
      "Use strong, unique passwords.",
      "Be careful about what personal information you share.",
      "Review app permissions.",
      "Use multi-factor authentication where available.",
      "Think before clicking unexpected links.",
    ],
    example:
      "An app requesting access to information unrelated to its purpose deserves a closer look before you grant permission.",
    question: {
      question: "Which habit improves account security?",
      options: [
        "Reuse the same password everywhere",
        "Share passwords with friends",
        "Use strong unique passwords",
        "Click every unexpected link",
      ],
      correctAnswer: "Use strong unique passwords",
      explanation:
        "Unique passwords reduce the damage if one account's password is exposed.",
    },
  },

  {
    id: 22,
    title: "Data Interpretation Basics",
    category: "Aptitude & Competitive",
    skill: "Data Interpretation",
    duration: 20,
    difficulty: "Beginner",
    type: "Practice",
    intro:
      "Learn how to extract useful information from simple numerical data.",
    learn: [
      "Read the title and labels first.",
      "Identify units.",
      "Compare values carefully.",
      "Calculate differences or percentages when necessary.",
      "Avoid conclusions that the data does not support.",
    ],
    example:
      "If sales increase from 100 to 120, the increase is 20 units, or 20%.",
    question: {
      question: "If a value increases from 100 to 120, what is the percentage increase?",
      options: ["10%", "15%", "20%", "25%"],
      correctAnswer: "20%",
      explanation:
        "The increase is 20. Since 20 / 100 × 100 = 20%, the percentage increase is 20%.",
    },
  },

  {
    id: 23,
    title: "Design Thinking: Solve a Real Problem",
    category: "Creativity",
    skill: "Design Thinking",
    duration: 20,
    difficulty: "Beginner",
    type: "Practice",
    intro:
      "Use a simple design-thinking approach to turn a real problem into a possible solution.",
    learn: [
      "Understand the user's problem.",
      "Define the problem clearly.",
      "Generate possible solutions.",
      "Create a simple prototype.",
      "Test and improve the solution.",
    ],
    example:
      "Instead of immediately building an attendance app, first understand what students and teachers struggle with in the current process.",
    question: {
      question: "What should come before building a solution?",
      options: [
        "Understand the problem",
        "Write random code",
        "Buy expensive hardware",
        "Launch immediately",
      ],
      correctAnswer: "Understand the problem",
      explanation:
        "Understanding the actual problem helps ensure that the solution addresses a real need.",
    },
  },

  {
    id: 24,
    title: "Personal Finance Basics",
    category: "Life Skills",
    skill: "Financial Literacy",
    duration: 20,
    difficulty: "Beginner",
    type: "Learn",
    intro:
      "Learn basic concepts that help you understand where money goes and how to plan it.",
    learn: [
      "Income is money received.",
      "Expenses are money spent.",
      "Needs and wants are different.",
      "A budget helps plan spending.",
      "Saving means setting aside money for future needs.",
    ],
    example:
      "If you receive ₹5,000 and spend ₹4,000, you have ₹1,000 remaining before considering other planned uses.",
    question: {
      question: "What is the main purpose of a budget?",
      options: [
        "To make money disappear",
        "To plan and track income and spending",
        "To avoid saving",
        "To increase unnecessary spending",
      ],
      correctAnswer:
        "To plan and track income and spending",
      explanation:
        "A budget gives you a clearer picture of how money is earned and where it is being spent.",
    },
  },

  {
    id: 25,
    title: "Problem Solving Framework",
    category: "Thinking & Problem Solving",
    skill: "Problem Solving",
    duration: 20,
    difficulty: "Beginner",
    type: "Challenge",
    intro:
      "Learn a repeatable framework for approaching unfamiliar problems instead of immediately jumping to a solution.",
    learn: [
      "Understand the problem.",
      "Break it into smaller parts.",
      "Identify constraints.",
      "Generate possible solutions.",
      "Choose an approach.",
      "Test and improve it.",
    ],
    example:
      "When debugging an application, first reproduce the problem, isolate the cause, test a possible fix, and verify the result.",
    question: {
      question: "What should you do first when solving an unfamiliar problem?",
      options: [
        "Immediately choose a solution",
        "Understand the problem",
        "Ignore the constraints",
        "Start changing everything",
      ],
      correctAnswer: "Understand the problem",
      explanation:
        "Clearly understanding the problem prevents you from solving the wrong problem.",
    },

    chainId: "critical-thinking",
    chainTitle: "Critical Thinking Foundation",
    chainOrder: 3,
  },
];