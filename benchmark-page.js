//Domande
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"]
  }
];

const hardQuestions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "The Harvard architecture for micro-controllers added which additional bus?",
    correct_answer: "Instruction",
    incorrect_answers: ["Address", "Data", "Control"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the name of the security vulnerability found in Bash in 2014?",
    correct_answer: "Shellshock",
    incorrect_answers: ["Heartbleed", "Bashbug", "Stagefright"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "How many Hz does the video standard PAL support?",
    correct_answer: "50",
    incorrect_answers: ["59", "60", "25"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?",
    correct_answer: "Micronesia",
    incorrect_answers: ["Fiji", "Tuvalu", "Marshall Islands"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these names was an actual codename for a cancelled Microsoft project?",
    correct_answer: "Neptune",
    incorrect_answers: ["Enceladus", "Pollux", "Saturn"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What port does HTTP run on?",
    correct_answer: "80",
    incorrect_answers: ["53", "443", "23"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "hard",
    question: "DHCP stands for Dynamic Host Configuration Port.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these was the name of a bug found in April 2014 in the publicly available OpenSSL cryptography library?",
    correct_answer: "Heartbleed",
    incorrect_answers: ["Shellshock", "Corrupted Blood", "Shellscript"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "hard",
    question:
      "The IBM PC used an Intel 8008 microprocessor clocked at 4.77 MHz and 8 kilobytes of memory.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Who is the original author of the realtime physics engine called PhysX?",
    correct_answer: "NovodeX",
    incorrect_answers: ["Ageia", "Nvidia", "AMD"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which data structure does FILO apply to?",
    correct_answer: "Stack",
    incorrect_answers: ["Queue", "Heap", "Tree"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of the following is the oldest of these computers by release date?",
    correct_answer: "TRS-80",
    incorrect_answers: ["Commodore 64", "ZX Spectrum", "Apple 3"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the name of the process that sends one qubit of information using two bits of classical information?",
    correct_answer: "Quantum Teleportation",
    incorrect_answers: [
      "Super Dense Coding",
      "Quantum Entanglement",
      "Quantum Programming"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "America Online (AOL) started out as which of these online service providers?",
    correct_answer: "Quantum Link",
    incorrect_answers: ["CompuServe", "Prodigy", "GEnie"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "What does the International System of Quantities refer 1024 bytes as?",
    correct_answer: "Kibibyte",
    incorrect_answers: ["Kylobyte", "Kilobyte", "Kelobyte"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which RAID array type is associated with data mirroring?",
    correct_answer: "RAID 1",
    incorrect_answers: ["RAID 0", "RAID 10", "RAID 5"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the name given to layer 4 of the Open Systems Interconnection (ISO) model?",
    correct_answer: "Transport",
    incorrect_answers: ["Session", "Data link", "Network"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What vulnerability ranked #1 on the OWASP Top 10 in 2013?",
    correct_answer: "Injection ",
    incorrect_answers: [
      "Broken Authentication",
      "Cross-Site Scripting",
      "Insecure Direct Object References"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Who invented the &quot;Spanning Tree Protocol&quot;?",
    correct_answer: "Radia Perlman",
    incorrect_answers: ["Paul Vixie", "Vint Cerf", "Michael Roberts"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "According to DeMorgan&#039;s Theorem, the Boolean expression (AB)&#039; is equivalent to:",
    correct_answer: "A&#039; + B&#039;",
    incorrect_answers: [
      "A&#039;B + B&#039;A",
      "A&#039;B&#039;",
      "AB&#039; + AB"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What major programming language does Unreal Engine 4 use?",
    correct_answer: "C++",
    incorrect_answers: ["Assembly", "C#", "ECMAScript"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "The acronym &quot;RIP&quot; stands for which of these?",
    correct_answer: "Routing Information Protocol",
    incorrect_answers: [
      "Runtime Instance Processes",
      "Regular Interval Processes",
      "Routine Inspection Protocol"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these is not a layer in the OSI model for data communications?",
    correct_answer: "Connection Layer",
    incorrect_answers: [
      "Application Layer",
      "Transport Layer",
      "Physical Layer"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "What type of sound chip does the Super Nintendo Entertainment System (SNES) have?",
    correct_answer: "ADPCM Sampler",
    incorrect_answers: [
      "FM Synthesizer",
      "Programmable Sound Generator (PSG)",
      "PCM Sampler"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the codename of the eighth generation Intel Core micro-architecture launched in October 2017?",
    correct_answer: "Coffee Lake",
    incorrect_answers: ["Sandy Bridge", "Skylake", "Broadwell"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Lenovo acquired IBM&#039;s personal computer division, including the ThinkPad line of laptops and tablets, in what year?",
    correct_answer: "2005",
    incorrect_answers: ["1999", "2002", "2008"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "hard",
    question:
      "The T-Mobile Sidekick smartphone is a re-branded version of the Danger Hiptop.",
    correct_answer: "True",
    incorrect_answers: ["False"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these Cherry MX mechanical keyboard switches is both tactile and clicky?",
    correct_answer: "Cherry MX Blue",
    incorrect_answers: ["Cherry MX Black", "Cherry MX Red", "Cherry MX Brown"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which kind of algorithm is Ron Rivest not famous for creating?",
    correct_answer: "Secret sharing scheme",
    incorrect_answers: [
      "Hashing algorithm",
      "Asymmetric encryption",
      "Stream cipher"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Who is the founder of Palantir?",
    correct_answer: "Peter Thiel",
    incorrect_answers: ["Mark Zuckerberg", "Marc Benioff", "Jack Dorsey"]
  }
];

const mediumQuestions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which internet company began life as an online bookstore called &#039;Cadabra&#039;?",
    correct_answer: "Amazon",
    incorrect_answers: ["eBay", "Overstock", "Shopify"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "The first computer bug was formed by faulty wires.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "On which computer hardware device is the BIOS chip located?",
    correct_answer: "Motherboard",
    incorrect_answers: [
      "Hard Disk Drive",
      "Central Processing Unit",
      "Graphics Processing Unit"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following languages is used as a scripting language in the Unity 3D game engine?",
    correct_answer: "C#",
    incorrect_answers: ["Java", "C++", "Objective-C"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "All of the following programs are classified as raster graphics editors EXCEPT:",
    correct_answer: "Inkscape",
    incorrect_answers: ["Paint.NET", "GIMP", "Adobe Photoshop"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "What did the name of the Tor Anonymity Network orignially stand for?",
    correct_answer: "The Onion Router",
    incorrect_answers: [
      "The Only Router",
      "The Orange Router",
      "The Ominous Router"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What was the name given to Android 4.3?",
    correct_answer: "Jelly Bean",
    incorrect_answers: ["Lollipop", "Nutella", "Froyo"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these is the name for the failed key escrow device introduced by the National Security Agency in 1993?",
    correct_answer: "Clipper Chip",
    incorrect_answers: ["Enigma Machine", "Skipjack", "Nautilus"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "While Apple was formed in California, in which western state was Microsoft founded?",
    correct_answer: "New Mexico",
    incorrect_answers: ["Washington", "Colorado", "Arizona"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does the acronym CDN stand for in terms of networking?",
    correct_answer: "Content Delivery Network",
    incorrect_answers: [
      "Content Distribution Network",
      "Computational Data Network",
      "Compressed Data Network"
    ]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "MacOS is based on Linux.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Generally, which component of a computer draws the most power?",
    correct_answer: "Video Card",
    incorrect_answers: ["Hard Drive", "Processor", "Power Supply"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "How many cores does the Intel i7-6950X have?",
    correct_answer: "10",
    incorrect_answers: ["12", "8", "4"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "In the server hosting industry IaaS stands for...",
    correct_answer: "Infrastructure as a Service",
    incorrect_answers: [
      "Internet as a Service",
      "Internet and a Server",
      "Infrastructure as a Server"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which coding language was the #1 programming language in terms of usage on GitHub in 2015?",
    correct_answer: "JavaScript",
    incorrect_answers: ["C#", "Python", "PHP"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the default theme that is installed with Windows XP?",
    correct_answer: "Luna",
    incorrect_answers: ["Neptune", "Whistler", "Bliss"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "In HTML, which non-standard tag used to be be used to make elements scroll across the viewport?",
    correct_answer: "&lt;marquee&gt;&lt;/marquee&gt;",
    incorrect_answers: [
      "&lt;scroll&gt;&lt;/scroll&gt;",
      "&lt;move&gt;&lt;/move&gt;",
      "&lt;slide&gt;&lt;/slide&gt;"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these programming languages is a low-level language?",
    correct_answer: "Assembly",
    incorrect_answers: ["Python", "C#", "Pascal"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question:
      "Early RAM was directly seated onto the motherboard and could not be easily removed.",
    correct_answer: "True",
    incorrect_answers: ["False"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which operating system was released first?",
    correct_answer: "Mac OS",
    incorrect_answers: ["Windows", "Linux", "OS/2"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of the following is a personal computer made by the Japanese company Fujitsu?",
    correct_answer: "FM-7",
    incorrect_answers: ["PC-9801", "Xmillennium ", "MSX"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: ".at is the top-level domain for what country?",
    correct_answer: "Austria",
    incorrect_answers: ["Argentina", "Australia", "Angola"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question:
      "It&#039;s not possible to format a write-protected DVD-R Hard Disk.",
    correct_answer: "True",
    incorrect_answers: ["False"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "Android versions are named in alphabetical order.",
    correct_answer: "True",
    incorrect_answers: ["False"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which of these people was NOT a founder of Apple Inc?",
    correct_answer: "Jonathan Ive",
    incorrect_answers: ["Steve Jobs", "Ronald Wayne", "Steve Wozniak"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question:
      "A Boolean value of &quot;0&quot; represents which of these words?",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "The teapot often seen in many 3D modeling applications is called what?",
    correct_answer: "Utah Teapot",
    incorrect_answers: ["Pixar Teapot", "3D Teapot", "Tennessee Teapot"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What is the number of keys on a standard Windows Keyboard?",
    correct_answer: "104",
    incorrect_answers: ["64", "94", "76"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Unix Time is defined as the number of seconds that have elapsed since when?",
    correct_answer: "Midnight, January 1, 1970",
    incorrect_answers: [
      "Midnight, July 4, 1976",
      "Midnight on the creator of Unix&#039;s birthday",
      "Midnight, July 4, 1980"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "What does the &#039;S&#039; in the RSA encryption algorithm stand for?",
    correct_answer: "Shamir",
    incorrect_answers: ["Secure", "Schottky", "Stable"]
  }
];

const easyQuestions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In any programming language, what is the most common way to iterate through an array?",
    correct_answer: "&#039;For&#039; loops",
    incorrect_answers: [
      "&#039;If&#039; Statements",
      "&#039;Do-while&#039; loops",
      "&#039;While&#039; loops"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "When Gmail first launched, how much storage did it provide for your email?",
    correct_answer: "1GB",
    incorrect_answers: ["512MB", "5GB", "Unlimited"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does GHz stand for?",
    correct_answer: "Gigahertz",
    incorrect_answers: ["Gigahotz", "Gigahetz", "Gigahatz"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "The programming language &#039;Swift&#039; was created to replace what other programming language?",
    correct_answer: "Objective-C",
    incorrect_answers: ["C#", "Ruby", "C++"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "HTML is what type of language?",
    correct_answer: "Markup Language",
    incorrect_answers: [
      "Macro Language",
      "Programming Language",
      "Scripting Language"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What amount of bits commonly equals one byte?",
    correct_answer: "8",
    incorrect_answers: ["1", "2", "64"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "The programming language &quot;Python&quot; is based off a modified version of &quot;JavaScript&quot;.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does the Prt Sc button do?",
    correct_answer:
      "Captures what&#039;s on the screen and copies it to your clipboard",
    incorrect_answers: [
      "Nothing",
      "Saves a .png file of what&#039;s on the screen in your screenshots folder in photos",
      "Closes all windows"
    ]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
    correct_answer: "HD Graphics 500",
    incorrect_answers: [
      "HD Graphics 700 ",
      "HD Graphics 600",
      "HD Graphics 7000"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "RAM stands for Random Access Memory.",
    correct_answer: "True",
    incorrect_answers: ["False"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "How many kilobytes in one gigabyte (in decimal)?",
    correct_answer: "1000000",
    incorrect_answers: ["1024", "1000", "1048576"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what was the original character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In &quot;Hexadecimal&quot;, what color would be displayed from the color code? &quot;#00FF00&quot;?",
    correct_answer: "Green",
    incorrect_answers: ["Red", "Blue", "Yellow"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which computer language would you associate Django framework with?",
    correct_answer: "Python",
    incorrect_answers: ["C#", "C++", "Java"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Time on Computers is measured via the EPOX System.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does LTS stand for in the software market?",
    correct_answer: "Long Term Support",
    incorrect_answers: [
      "Long Taco Service",
      "Ludicrous Transfer Speed",
      "Ludicrous Turbo Speed"
    ]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The Windows ME operating system was released in the year 2000.",
    correct_answer: "True",
    incorrect_answers: ["False"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "The NVidia GTX 1080 gets its name because it can only render at a 1920x1080 screen resolution.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "The numbering system with a radix of 16 is more commonly referred to as ",
    correct_answer: "Hexidecimal",
    incorrect_answers: ["Binary", "Duodecimal", "Octal"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "How many values can a single byte represent?",
    correct_answer: "256",
    incorrect_answers: ["8", "1", "1024"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "The C programming language was created by this American computer scientist. ",
    correct_answer: "Dennis Ritchie",
    incorrect_answers: [
      "Tim Berners Lee",
      "al-Khw\u0101rizm\u012b",
      "Willis Ware"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "How long is an IPv6 address?",
    correct_answer: "128 bits",
    incorrect_answers: ["32 bits", "64 bits", "128 bytes"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "The Python programming language gets its name from the British comedy group &quot;Monty Python.&quot;",
    correct_answer: "True",
    incorrect_answers: ["False"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does the computer software acronym JVM stand for?",
    correct_answer: "Java Virtual Machine",
    incorrect_answers: [
      "Java Vendor Machine",
      "Java Visual Machine",
      "Just Virtual Machine"
    ]
  }
];

// TIPS:
// SE MOSTRI TUTTE LE RISPOSTE ASSIEME IN FORMATO LISTA:
// Per ogni domanda, crea un container e incorporale tutte all'interno.
// Crea poi dei radio button
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
// con le risposte corrette e incorrette come opzioni
// (dovrai probabilmente cercare su un motore di ricerca come ottenere un valore da un radio button in JS per ottenere il punteggio finale)
//
// SE MOSTRI UNA DOMANDA ALLA VOLTA:
// Mostra la prima domanda con il testo e i radio button.
// Quando l'utente seleziona una risposta, passa alla domanda successiva dell'array e sostituisci quella precedentemente visualizzata con quella corrente,
// salvando le risposte dell'utente in una variabile

// Come calcolare il risultato? Hai due strade:
// Se stai mostrando tutte le domande nello stesso momento, controlla semplicemente se i radio button selezionati sono === correct_answer
// Se stai mostrando una domanda alla volta, aggiungi semplicemente un punto alla variabile del punteggio che hai precedentemente creato SE la risposta selezionata è === correct_answer

// BUON LAVORO 💪🚀

//timer
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "white"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 60;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("timer").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="seconds">SECONDS</span>
  <span id="base-timer-label" class="base-timer__label">
  
  ${formatTime(timeLeft)}</span>
  <span id="remaining-text">REMAINING</span>
</div>
`;

//quando il tempo finisce azzera il timer e vai alla prossima domanda
function onTimesUp() {
  clearInterval(timerInterval);
  goToNewQuestion();
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML =
      formatTime(timeLeft);
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  //const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  //return `${minutes}:${seconds}`;
  return seconds;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

//imposto un punteggio globale dell'utente
let globalUserPoint = 0;

//imposto il counter di domande alla prima domanda
let questionNumber = 0;

//recupero i dati dal local storage passati dal form della pagina ask-user-page
const numberOfQuestions = localStorage.getItem("numberOfQuestions");
console.log(numberOfQuestions);

const difficultyOfQuestions = localStorage.getItem("difficultyValue");
console.log(difficultyOfQuestions);

//mostro a video a quale domanda siamo arrivati
const questionCounter = document.getElementById("question-counter");
const questionCounterMax = document.getElementById("question-counter-max");
questionCounterMax.innerText = numberOfQuestions;

const increaseCounterOfQuestions = function () {
  questionCounter.innerText = questionNumber + 1;
};

const questionsFromDynamicArray = [];

const pushQuestionsInDynamicArray = function (
  arrayOfQuestions,
  numberOfQuestions
) {
  for (let i = 0; i < numberOfQuestions; i++) {
    questionsFromDynamicArray.push(arrayOfQuestions[i]);
  }
};

//creo un array dinamico con le informazioni del form

switch (difficultyOfQuestions) {
  case "easy":
    pushQuestionsInDynamicArray(easyQuestions, numberOfQuestions);
    break;
  case "medium":
    pushQuestionsInDynamicArray(mediumQuestions, numberOfQuestions);
    break;
  case "hard":
    pushQuestionsInDynamicArray(hardQuestions, numberOfQuestions);
    break;
}

//pesco l'oggetto contenente la domanda
const getQuestion = function () {
  const question = questionsFromDynamicArray[questionNumber];
  return question;
};

const questionInfo = getQuestion();
console.log(questionInfo);

//pesco il contenitore dei counter delle domande
const counterContainer =
  document.getElementsByClassName("counter-container")[0];

//pesco il contenitore del timer
const timerContainer = document.getElementById("timer");

//pesco il contenitore delle risposte
const answersContainer = document.getElementsByClassName("answers")[0];
//console.log(answersContainer);

//appendo alla pagina la domanda dinamicamente
const appendQuestionToPage = function (questionInfo) {
  //svuoto il container di answer
  answersContainer.innerText = "";
  //pesco la domanda dall'array di domande
  const questionToAppend = questionInfo.question;

  //mostro la domanda
  const questionHtml = document.getElementById("question");
  questionHtml.innerText = questionToAppend;
  //console.log(questionToAppend);

  //pesco la risposta corretta
  const correctAnswer = questionInfo.correct_answer;
  //console.log(correctAnswer);

  //creo il bottone che conterrà la risposta corretta e gli do un id
  const correctAnswerButton = document.createElement("button");
  correctAnswerButton.setAttribute("id", "correctAnswer");
  correctAnswerButton.style.display = "none";
  correctAnswerButton.innerText = correctAnswer;
  //appendo il bottone con la risposta al contenitore di risposte
  answersContainer.appendChild(correctAnswerButton);

  //pesco le risposte errate e appendo le risposte errate al contenitore di risposte
  const incorrect_answers = questionInfo.incorrect_answers;

  //inserisco la risposta corretta nell'array delle risposte sbagliate
  //in un punto random dell'array
  const correctAnswerPosition = Math.floor(
    Math.random() * incorrect_answers.length
  );
  incorrect_answers.splice(correctAnswerPosition, 0, correctAnswer);
  // console.log(incorrect_answers);
  // console.log(correctAnswerPosition);

  incorrect_answers.forEach((element) => {
    const wrongAnswer = document.createElement("button");
    wrongAnswer.classList.add("answer");
    wrongAnswer.innerText = element;
    answersContainer.appendChild(wrongAnswer);
  });
  return correctAnswer;
};

//mostra pagina del risultati
const showResultsPage = function () {
  const url = "./results-page.html";
  localStorage.setItem("globalUserPoint", globalUserPoint);
  window.location.href = url;
};

//spostarsi sulla nuova domanda
const goToNewQuestion = function () {
  //resetto il timer prima ad ogni domanda
  console.log("Reset TIMER");
  clearInterval(timerInterval);
  questionNumber++;
  if (questionNumber > questionsFromDynamicArray.length - 1) {
    //console.log(questionNumber);
    showResultsPage();
  } else {
    appendQuestionToPage(getQuestion());
    increaseCounterOfQuestions();
    //resetto il timer ad ogni nuova risposta
    timePassed = 0;
    startTimer();
  }
};

//selezione della risposta
const selectAnswerAndChangeButtonColor = function (element) {
  //check per vedere se ci sono altre risposte che sono già selezionate
  //e le deseleziono
  const allSelectedAnswers = document.querySelectorAll(".selectedAnswer");
  //console.log(allSelectedAnswers);
  allSelectedAnswers.forEach((element) => {
    element.classList.remove("selectedAnswer");
  });
  //seleziono la risposta cliccata
  element.classList.add("selectedAnswer");
  console.log("Hai selezionato la risposta", element.innerText);
};

const checkIfTheAnswerIsCorrect = function (element) {
  // console.log(element.innerText);
  // console.log(correctAnswer.innerText);
  if (element.innerText === correctAnswer.innerText) {
    globalUserPoint++;
    sendPositivePopupFeedbackForTheAnswer();
    //console.log("Risposta corretta!");
  } else {
    sendNegativePopupFeedbackForTheAnswer();
    //console.log("Risposta errata");
  }
  goToNewQuestion();
};

answersContainer.addEventListener("click", (e) => {
  const element = e.target;
  selectAnswerAndChangeButtonColor(element);
  checkIfTheAnswerIsCorrect(element);
});

//EXTRA
//popup per il feedback sulla risposta corretta o errata

const mainContainer = document.getElementsByClassName("container")[0];
const alertMessageForAnswer = document.getElementById("alertMessageForAnswer");
const popupMessage = document.createElement("h5");

const removeShowedPopup = function () {
  alertMessageForAnswer.style.display = "none";
};

//resetto il valore display a none
removeShowedPopup();

//mostro il popup "RISPOSTA CORRETTA" in caso di risposta corretta
const sendPositivePopupFeedbackForTheAnswer = function () {
  popupMessage.innerText = "";

  alertMessageForAnswer.classList.remove("wrong-popup");
  alertMessageForAnswer.classList.add("correct-popup");

  popupMessage.classList.add("popup-text");

  const icon = document.createElement("i");
  icon.classList.add("far");
  icon.classList.add("fa-check-circle");
  popupMessage.innerText = "Risposta Corretta ";
  popupMessage.appendChild(icon);

  alertMessageForAnswer.appendChild(popupMessage);

  alertMessageForAnswer.style.display = "inline-block";
  setTimeout(removeShowedPopup, 2000);
};

//mostro il popup "RISPOSTA ERRATA" in caso di risposta errata
const sendNegativePopupFeedbackForTheAnswer = function () {
  popupMessage.innerText = "";

  alertMessageForAnswer.classList.remove("correct-popup");
  alertMessageForAnswer.classList.add("wrong-popup");

  popupMessage.classList.add("popup-text");

  const icon = document.createElement("i");
  icon.classList.add("far");
  icon.classList.add("fa-times-circle");
  popupMessage.innerText = "Risposta Errata ";
  popupMessage.appendChild(icon);

  alertMessageForAnswer.appendChild(popupMessage);

  alertMessageForAnswer.style.display = "inline-block";
  setTimeout(removeShowedPopup, 2000);
};

window.onload = function () {
  appendQuestionToPage(questionInfo);
  startTimer();
};
