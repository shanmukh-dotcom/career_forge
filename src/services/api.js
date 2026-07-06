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
    // Always return the HTML/CSS mock playlist for now
    return {
      data: [
        { videoId: 'UB1O30fR-EE', title: 'HTML Crash Course For Absolute Beginners', url: 'https://www.youtube.com/watch?v=UB1O30fR-EE', embedUrl: 'https://www.youtube.com/embed/UB1O30fR-EE' },
        { videoId: 'yfoY53QXEnI', title: 'CSS Crash Course For Absolute Beginners', url: 'https://www.youtube.com/watch?v=yfoY53QXEnI', embedUrl: 'https://www.youtube.com/embed/yfoY53QXEnI' },
        { videoId: 'mock-1', title: 'JavaScript Basics (Mock)', url: 'https://www.youtube.com/watch?v=mock-1', embedUrl: 'https://www.youtube.com/embed/mock-1' }
      ]
    };
};
