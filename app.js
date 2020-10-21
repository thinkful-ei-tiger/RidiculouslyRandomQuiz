/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What country shares the name of a state in North America?',
      answers: [
        'Mississippi',
        'Michigan',
        'Georgia',
        'Vermont'
      ],
      correctAnswer: 'Georgia',
      background: 'images/1world.jpg'
    },
    {
      question: 'War, what is it good for?',
      answers: [
        'Destruction',
        'Sweet military uniforms',
        'Absolutely Nothing',
        'Spending heaps of money'
      ],
      correctAnswer: 'Absolutely nothing',
      background: 'images/2war.jpg'
    },
    {
      question: 'What does the "19" in COVID-19 stand for?',
      answers: [
        'The year',
        'The strain',
        'Amount of people killed',
        'No one knows, really'
      ],
      correctAnswer: 'The year',
      background: 'images/3covid.jpg'
    },
    {
      question: 'How many colors are in the rainbow?',
      answers: [
        '12',
        '7',
        '5',
        '36'
      ],
      correctAnswer: '7',
      background: 'images/4rainbow.jpg'
    },
    {
      question: 'What is the meaning of life?',
      answers: [
        'Yes',
        'Eating cheese',
        `Being able to solve a Rubik's Cube in under 3 minutes`,
        '42'
      ],
      correctAnswer: '42',
      background: 'images/5life.jpg'
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  wrong: 0,
  
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)