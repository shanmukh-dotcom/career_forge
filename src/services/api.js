// Mocked API Layer for Pure Frontend Prototype

// --- MOCK DATA ---
const defaultVideos = {
  'UB1O30fR-EE': {
    topic: 'HTML',
    summary: [
      'This video introduces HTML (HyperText Markup Language), the standard markup language used to create the structure of web pages. HTML is not a programming language—it describes the content and organization of a webpage. Every website begins with HTML because it tells the browser what content to display.',
      'The instructor starts by explaining how websites work and how browsers interpret HTML files. You learn the basic structure of an HTML document, including the <!DOCTYPE html> declaration, the <html> element, the <head> section for metadata, and the <body> section where visible content is placed.',
      'The video then introduces common HTML elements such as headings (<h1>–<h6>), paragraphs (<p>), links (<a>), images (<img>), lists (<ul>, <ol>, <li>), tables, and forms. Each element has a specific purpose, helping organize information in a meaningful way.',
      'Another major topic is attributes. Attributes provide additional information about HTML elements, such as specifying the destination of a hyperlink using the href attribute or the source of an image using the src attribute.',
      'The course also emphasizes semantic HTML, encouraging developers to use meaningful tags like <header>, <nav>, <section>, <article>, and <footer> instead of generic containers whenever possible. Semantic HTML improves accessibility, search engine optimization (SEO), and code readability.',
      'Finally, the instructor builds a small HTML cheat sheet page, demonstrating how the different elements work together to form a complete webpage. The lesson focuses on understanding structure rather than visual design, since styling will be introduced in the next video using CSS.'
    ],
    keywords: [
      'HTML', 'HyperText Markup Language', 'HTML Document', 'Browser', '<!DOCTYPE html>', '<html>', '<head>', '<body>', 'Heading', 'Paragraph', 'Anchor (<a>)', 'Image (<img>)', 'List', 'Table', 'Form', 'Input', 'Label', 'Button', 'Attribute', 'href', 'src', 'Semantic HTML', 'Header', 'Navigation', 'Section', 'Footer', 'Accessibility', 'SEO'
    ],
    qna: [
      { q: "What does HTML stand for?", a: "HyperText Markup Language. It's the standard language for creating webpages." },
      { q: "Is HTML a programming language?", a: "No, it is a markup language. It describes the structure and content, but doesn't have logic like loops or variables." },
      { q: "What is semantic HTML?", a: "Using tags that convey meaning about the content (like <header>, <article>, <nav>) rather than generic containers (like <div>)." }
    ],
    questions: [
      {
        question: 'What is the primary purpose of HTML?',
        options: ['To style webpages', 'To create the structure and content of webpages', 'To store data', 'To make webpages interactive'],
        correctAnswer: 'To create the structure and content of webpages',
        explanation: 'HTML describes the content and organization of a webpage.'
      },
      {
        question: 'Which HTML tag contains the visible content of a webpage?',
        options: ['<head>', '<title>', '<body>', '<meta>'],
        correctAnswer: '<body>',
        explanation: 'The body section is where visible content is placed.'
      },
      {
        question: 'Which attribute specifies the destination of a hyperlink?',
        options: ['src', 'alt', 'href', 'target'],
        correctAnswer: 'href',
        explanation: 'Attributes provide additional information, such as specifying the destination of a hyperlink using the href attribute.'
      },
      {
        question: 'Why should developers use semantic HTML elements like <header> and <section>?',
        options: ['They make the website load faster than CSS.', 'They improve readability, accessibility, and SEO.', 'They replace JavaScript.', 'They automatically style the webpage.'],
        correctAnswer: 'They improve readability, accessibility, and SEO.',
        explanation: 'Semantic HTML improves accessibility, search engine optimization (SEO), and code readability.'
      }
    ]
  },
  'yfoY53QXEnI': {
    topic: 'CSS',
    summary: [
      'After learning how HTML structures a webpage, this video introduces CSS (Cascading Style Sheets), the language used to control the appearance of HTML elements. CSS separates a webpage\'s presentation from its structure, making websites easier to maintain and update.',
      'The video begins by explaining the three ways to apply CSS: Inline CSS – written directly inside an HTML element. Internal CSS – placed inside a <style> tag in the HTML document. External CSS – stored in a separate .css file and linked to the HTML page. This is the recommended approach for most projects.',
      'Next, the instructor explains selectors, which determine which HTML elements a CSS rule affects. You learn about: Element selectors, Class selectors (.class), ID selectors (#id).',
      'The lesson then covers commonly used CSS properties, including: color, background-color, font-family, font-size, font-weight, line-height, margin, padding, border, width, height.',
      'A major concept introduced is the CSS Box Model, which explains that every HTML element consists of content, padding, border, and margin. Understanding this model is essential for controlling spacing and layouts.',
      'The instructor also demonstrates how to inspect and modify CSS using browser Developer Tools, making it easier to debug styling issues.'
    ],
    keywords: [
      'CSS', 'Cascading Style Sheets', 'Stylesheet', 'Selector', 'Element Selector', 'Class Selector', 'ID Selector', 'Property', 'Value', 'Color', 'Background Color', 'Font Family', 'Font Size', 'Margin', 'Padding', 'Border', 'Width', 'Height', 'Box Model', 'External CSS', 'Internal CSS', 'Inline CSS', 'Developer Tools'
    ],
    qna: [
      { q: "What does CSS stand for?", a: "Cascading Style Sheets. It is used to style and layout webpages." },
      { q: "What is the CSS Box Model?", a: "A model that describes every element as a box, consisting of margins, borders, padding, and the actual content." },
      { q: "What's the difference between a class and an ID selector?", a: "A class selector (starts with a dot, e.g., .button) can be used on multiple elements. An ID selector (starts with a hash, e.g., #header) must be unique to a single element." }
    ],
    questions: [
      {
        question: 'What is the primary purpose of CSS?',
        options: ['Store website data', 'Add interactivity to webpages', 'Control the appearance and layout of webpages', 'Connect websites to databases'],
        correctAnswer: 'Control the appearance and layout of webpages',
        explanation: 'CSS is the language used to control the appearance of HTML elements.'
      },
      {
        question: 'Which method is generally recommended for styling large websites?',
        options: ['Inline CSS', 'Internal CSS', 'External CSS', 'JavaScript Styling'],
        correctAnswer: 'External CSS',
        explanation: 'External CSS is stored in a separate .css file and linked to the HTML page. This is the recommended approach for most projects.'
      },
      {
        question: 'Which selector is used to target elements with a specific class?',
        options: ['#header', '.header', '*header', 'header:'],
        correctAnswer: '.header',
        explanation: 'Class selectors are preceded by a dot (.) like .class'
      },
      {
        question: 'Which part of the CSS Box Model creates space outside an element\'s border?',
        options: ['Content', 'Padding', 'Margin', 'Width'],
        correctAnswer: 'Margin',
        explanation: 'Every HTML element consists of content, padding, border, and margin. Margin creates space outside the border.'
      }
    ]
  },
  'XBu54ncjgSQ': {
    topic: 'Backend Development',
    summary: [
      'This video introduces Backend Development, the server-side logic that powers websites and applications behind the scenes. Unlike frontend, which users see, backend handles data processing, storage, and secure retrieval.',
      'You learn about the core components: servers (which listen for requests), databases (which store information like user accounts and posts), and APIs (Application Programming Interfaces) which act as the bridge between the frontend and the database.',
      'The instructor explains popular backend languages like Node.js, Python, Java, and PHP, alongside common databases like PostgreSQL (relational) and MongoDB (NoSQL). Understanding how these interact is crucial for building scalable architecture.'
    ],
    keywords: ['Backend', 'Server', 'Database', 'API', 'Node.js', 'Python', 'SQL', 'NoSQL', 'Architecture'],
    qna: [
      { q: "What is an API?", a: "An Application Programming Interface acts as a bridge, allowing the frontend to request data from the backend database." },
      { q: "What is the difference between SQL and NoSQL?", a: "SQL databases are relational and structured in tables, while NoSQL databases are non-relational and often store data as JSON documents." }
    ],
    questions: [
      {
        question: 'Which component is primarily responsible for storing user data?',
        options: ['The Browser', 'The Database', 'The API', 'The UI'],
        correctAnswer: 'The Database',
        explanation: 'Databases (like PostgreSQL or MongoDB) securely store application data.'
      },
      {
        question: 'What does a backend server do?',
        options: ['Renders CSS', 'Listens for frontend requests and executes logic', 'Displays buttons', 'Handles local state'],
        correctAnswer: 'Listens for frontend requests and executes logic',
        explanation: 'The server receives requests from clients and processes the required backend logic.'
      }
    ]
  },
  'VPvVD8t02U8': {
    topic: 'Mobile Development (Flutter)',
    summary: [
      'This crash course introduces Mobile App Development using Flutter, a UI toolkit created by Google for building natively compiled applications for mobile, web, and desktop from a single codebase.',
      'The core concept taught is that in Flutter, "Everything is a Widget." You learn the difference between Stateless Widgets (which are immutable and do not change state) and Stateful Widgets (which can rebuild dynamically when data changes).',
      'The video walks through setting up the Dart SDK and writing your first cross-platform app, demonstrating how hot-reload allows developers to see UI changes instantly without fully rebuilding the app.'
    ],
    keywords: ['Flutter', 'Mobile Development', 'Dart', 'Widget', 'Stateful', 'Stateless', 'Hot Reload', 'Cross-Platform'],
    qna: [
      { q: "What language does Flutter use?", a: "Flutter uses Dart, a modern object-oriented language optimized for fast apps on multiple platforms." },
      { q: "What is the difference between Stateful and Stateless widgets?", a: "Stateless widgets cannot change after being built, while Stateful widgets can update dynamically based on user interaction." }
    ],
    questions: [
      {
        question: 'What is the primary advantage of Flutter?',
        options: ['It uses HTML/CSS for mobile', 'It allows building cross-platform apps from a single codebase', 'It is only for iOS', 'It requires no programming'],
        correctAnswer: 'It allows building cross-platform apps from a single codebase',
        explanation: 'Flutter allows developers to write code once and deploy to both iOS and Android.'
      },
      {
        question: 'In Flutter, what are UI elements called?',
        options: ['Components', 'Elements', 'Widgets', 'Modules'],
        correctAnswer: 'Widgets',
        explanation: 'In Flutter, the entire UI is built using nested Widgets.'
      }
    ]
  },
  'c9Wg6Cb_YlU': {
    topic: 'UI/UX Design',
    summary: [
      'This video introduces UI/UX Design focusing on Figma. UX (User Experience) is about how an app feels and functions, while UI (User Interface) is about how it looks visually.',
      'The instructor explains Design Thinking, wireframing, and creating high-fidelity prototypes. You learn how to establish a design system using consistent typography, color palettes, and spacing.',
      'A major focus is on Auto Layout in Figma, which allows designers to create responsive components that automatically resize and adapt based on their content, mirroring CSS flexbox behavior.'
    ],
    keywords: ['UI/UX', 'Figma', 'Wireframing', 'Prototyping', 'Design System', 'Auto Layout', 'Typography', 'User Experience'],
    qna: [
      { q: "What is Auto Layout in Figma?", a: "A feature that allows frames to adapt to their content dynamically, similar to Flexbox in web development." },
      { q: "What is the difference between UI and UX?", a: "UX focuses on the logic, flow, and user journey, while UI focuses on the visual aesthetics and interactive elements." }
    ],
    questions: [
      {
        question: 'What is a Wireframe?',
        options: ['A fully colored final design', 'A low-fidelity structural blueprint of a webpage or app', 'The backend code', 'A brand logo'],
        correctAnswer: 'A low-fidelity structural blueprint of a webpage or app',
        explanation: 'Wireframes are simple sketches focused on layout and structure, without styling details.'
      },
      {
        question: 'Which tool is industry standard for collaborative UI design?',
        options: ['MS Paint', 'Figma', 'Visual Studio Code', 'MongoDB'],
        correctAnswer: 'Figma',
        explanation: 'Figma is a cloud-based design tool widely used for UI/UX prototyping.'
      }
    ]
  },
  'i_LwzRVP7bg': {
    topic: 'AI & Machine Learning',
    summary: [
      'This course introduces the fundamentals of AI and Machine Learning. Machine Learning is a subset of AI where systems learn from data to identify patterns and make decisions without explicit programming.',
      'The video covers Supervised Learning (training on labeled data), Unsupervised Learning (finding hidden patterns in unlabeled data), and Reinforcement Learning (learning through trial and error rewards).',
      'It also explains basic concepts of Neural Networks, which are modeled after the human brain and consist of input layers, hidden computational layers, and output layers to process complex data like images and text.'
    ],
    keywords: ['Artificial Intelligence', 'Machine Learning', 'Supervised Learning', 'Unsupervised Learning', 'Neural Networks', 'Training Data', 'Algorithms'],
    qna: [
      { q: "What is Supervised Learning?", a: "A type of machine learning where the model is trained on a labeled dataset, meaning the answers are provided during training." },
      { q: "What is a Neural Network?", a: "A computing system inspired by biological neural networks, consisting of interconnected nodes (neurons) arranged in layers." }
    ],
    questions: [
      {
        question: 'Which type of learning involves training a model with labeled data?',
        options: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Deep Learning'],
        correctAnswer: 'Supervised Learning',
        explanation: 'Supervised learning uses labeled datasets to train algorithms to classify data or predict outcomes.'
      },
      {
        question: 'What is the primary difference between standard programming and machine learning?',
        options: ['Standard programming is faster', 'ML systems learn patterns from data instead of relying on explicit rules', 'ML only works on supercomputers', 'There is no difference'],
        correctAnswer: 'ML systems learn patterns from data instead of relying on explicit rules',
        explanation: 'Instead of hardcoding rules, ML models infer rules by analyzing large amounts of data.'
      }
    ]
  },
  'bPVaOlJ6ln0': {
    topic: 'Cybersecurity',
    summary: [
      'This video provides an overview of Cybersecurity, the practice of protecting systems, networks, and programs from digital attacks.',
      'The instructor explains the CIA Triad: Confidentiality (keeping data secret), Integrity (ensuring data is not altered), and Availability (ensuring systems remain accessible to authorized users).',
      'The lesson covers common threats such as Phishing, Malware, and SQL Injection, and emphasizes the importance of encryption, multi-factor authentication, and ethical hacking (penetration testing) to identify vulnerabilities before malicious hackers do.'
    ],
    keywords: ['Cybersecurity', 'CIA Triad', 'Encryption', 'Phishing', 'Malware', 'Ethical Hacking', 'Penetration Testing', 'Vulnerabilities'],
    qna: [
      { q: "What is the CIA Triad?", a: "A foundational concept in cybersecurity standing for Confidentiality, Integrity, and Availability." },
      { q: "What is Phishing?", a: "A social engineering attack where attackers deceive users into revealing sensitive information by pretending to be a trustworthy entity." }
    ],
    questions: [
      {
        question: 'Which component of the CIA Triad ensures that data is not altered by unauthorized parties?',
        options: ['Confidentiality', 'Integrity', 'Availability', 'Authorization'],
        correctAnswer: 'Integrity',
        explanation: 'Integrity ensures data is accurate and unchanged.'
      },
      {
        question: 'What is Penetration Testing?',
        options: ['Testing how fast a website loads', 'Authorized simulated cyberattacks to find security weaknesses', 'Creating strong passwords', 'Encrypting hard drives'],
        correctAnswer: 'Authorized simulated cyberattacks to find security weaknesses',
        explanation: 'Ethical hackers perform penetration testing to identify vulnerabilities before malicious hackers can exploit them.'
      }
    ]
  }
};

// --- MOCK API FUNCTIONS ---
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const analyzeVideo = async (topic, youtubeUrl = null, transcript = null, goalId = null) => {
    await delay(1000); // Simulate network
    let videoId = null;
    if (youtubeUrl) {
      const urlObj = new URL(youtubeUrl);
      videoId = urlObj.searchParams.get('v');
    }
    
    if (videoId && defaultVideos[videoId]) {
      return { data: defaultVideos[videoId] };
    }

    // Generic fallback for any other video to keep the prototype working
    return {
      data: {
        summary: [
          `This is a mock summary for ${topic || 'the video'}.`,
          `Since this is a frontend prototype, no real API calls are being made.`,
          `The backend and AI models have been completely removed for testing purposes.`
        ],
        keywords: [topic || 'Mock Topic', 'Prototype', 'Frontend', 'No API']
      }
    };
};

export const getRoadmap = async (goal, skillLevel = "Beginner", time = null) => {
    await delay(1000);
    return {
      data: [
        { id: 1, title: 'Basics of ' + goal, description: 'Learn the fundamentals', dependencies: [] },
        { id: 2, title: 'Advanced ' + goal, description: 'Master the concepts', dependencies: [1] }
      ]
    };
};

export const getRecommendations = async () => {
    await delay(500);
    return {
      data: [
        { title: 'Practice Exercises', type: 'Practice', rationale: 'To test your skills' }
      ]
    };
};

export const generateTest = async (currentConcept, goalId = null) => {
    await delay(1000);
    const defaultMatch = Object.values(defaultVideos).find(v => v.topic === currentConcept);
    if (defaultMatch) {
      return { data: defaultMatch.questions };
    }
    
    // Generic test for unknown concepts
    return {
      data: [
        {
          question: `What is the most important concept in ${currentConcept}?`,
          options: ['Option A', 'Option B', 'Option C', 'Option D'],
          correctAnswer: 'Option A',
          explanation: 'This is a mock explanation.'
        }
      ]
    };
};

export const getFlashcards = async (goalId = null) => {
    await delay(500);
    return {
      data: [
        { id: '1', topic: 'Mock Flashcard', front: 'What is this?', back: 'A pure frontend prototype!' }
      ]
    };
};

export const getPlaylistVideos = async (playlistUrl) => {
    await delay(800);
    
    // Check which playlist was requested based on the known recommended URLs
    if (playlistUrl.includes('PLdvOfoe7PXT0ouChAnR1nHlT8BJIo5hP_')) { // UI/UX
      return {
        data: [
          { videoId: 'c9Wg6Cb_YlU', title: 'Figma Tutorial for UI Design', url: 'https://www.youtube.com/watch?v=c9Wg6Cb_YlU', embedUrl: 'https://www.youtube.com/embed/c9Wg6Cb_YlU' },
          { videoId: 'uiux-2', title: 'Design Thinking Process', url: 'https://www.youtube.com/watch?v=uiux-2', embedUrl: 'https://www.youtube.com/embed/uiux-2' },
          { videoId: 'uiux-3', title: 'Wireframing Basics', url: 'https://www.youtube.com/watch?v=uiux-3', embedUrl: 'https://www.youtube.com/embed/uiux-3' }
        ]
      };
    }
    
    if (playlistUrl.includes('PL9ooVrP1hQOHUfd-g8GUpKI3hHOwM_9Dn')) { // AI
      return {
        data: [
          { videoId: 'i_LwzRVP7bg', title: 'Machine Learning for Everybody', url: 'https://www.youtube.com/watch?v=i_LwzRVP7bg', embedUrl: 'https://www.youtube.com/embed/i_LwzRVP7bg' },
          { videoId: 'ai-2', title: 'Intro to Neural Networks', url: 'https://www.youtube.com/watch?v=ai-2', embedUrl: 'https://www.youtube.com/embed/ai-2' },
          { videoId: 'ai-3', title: 'Python for Data Science', url: 'https://www.youtube.com/watch?v=ai-3', embedUrl: 'https://www.youtube.com/embed/ai-3' }
        ]
      };
    }
    
    if (playlistUrl.includes('PLWKjhJtqVAbn21gs5UnLhCQ82f923WCgM')) { // Backend
      return {
        data: [
          { videoId: 'XBu54ncjgSQ', title: 'What is Backend Development?', url: 'https://www.youtube.com/watch?v=XBu54ncjgSQ', embedUrl: 'https://www.youtube.com/embed/XBu54ncjgSQ' },
          { videoId: 'backend-2', title: 'Node.js Crash Course', url: 'https://www.youtube.com/watch?v=backend-2', embedUrl: 'https://www.youtube.com/embed/backend-2' },
          { videoId: 'backend-3', title: 'REST APIs Explained', url: 'https://www.youtube.com/watch?v=backend-3', embedUrl: 'https://www.youtube.com/embed/backend-3' }
        ]
      };
    }
    
    if (playlistUrl.includes('PLTjRvDozrdlxzQet01qZBt-sRG8bbDggv')) { // Mobile
      return {
        data: [
          { videoId: 'VPvVD8t02U8', title: 'Flutter Course for Beginners', url: 'https://www.youtube.com/watch?v=VPvVD8t02U8', embedUrl: 'https://www.youtube.com/embed/VPvVD8t02U8' },
          { videoId: 'mobile-2', title: 'Dart Programming Tutorial', url: 'https://www.youtube.com/watch?v=mobile-2', embedUrl: 'https://www.youtube.com/embed/mobile-2' },
          { videoId: 'mobile-3', title: 'Building your first App', url: 'https://www.youtube.com/watch?v=mobile-3', embedUrl: 'https://www.youtube.com/embed/mobile-3' }
        ]
      };
    }
    
    if (playlistUrl.includes('PLOspHqNVtKADkWLFt9OcziQF7EatuANSY')) { // Cyber
      return {
        data: [
          { videoId: 'bPVaOlJ6ln0', title: 'Cyber Security In 7 Minutes', url: 'https://www.youtube.com/watch?v=bPVaOlJ6ln0', embedUrl: 'https://www.youtube.com/embed/bPVaOlJ6ln0' },
          { videoId: 'cyber-2', title: 'Ethical Hacking Basics', url: 'https://www.youtube.com/watch?v=cyber-2', embedUrl: 'https://www.youtube.com/embed/cyber-2' },
          { videoId: 'cyber-3', title: 'Network Security Fundamentals', url: 'https://www.youtube.com/watch?v=cyber-3', embedUrl: 'https://www.youtube.com/embed/cyber-3' }
        ]
      };
    }

    // Default to Frontend / HTML CSS
    return {
      data: [
        { videoId: 'UB1O30fR-EE', title: 'HTML Crash Course For Absolute Beginners', url: 'https://www.youtube.com/watch?v=UB1O30fR-EE', embedUrl: 'https://www.youtube.com/embed/UB1O30fR-EE' },
        { videoId: 'yfoY53QXEnI', title: 'CSS Crash Course For Absolute Beginners', url: 'https://www.youtube.com/watch?v=yfoY53QXEnI', embedUrl: 'https://www.youtube.com/embed/yfoY53QXEnI' },
        { videoId: 'mock-1', title: 'JavaScript Basics (Mock)', url: 'https://www.youtube.com/watch?v=mock-1', embedUrl: 'https://www.youtube.com/embed/mock-1' }
      ]
    };
};
