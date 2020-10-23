/* eslint-disable no-console */
/* eslint-disable quotes */
/* eslint-disable no-undef */
/**
 * Example store structure
 */


// Store Array ============================================================

const store = {
  // 5 or more questions are required
  questions: [
    {
      id: cuid(),
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
      id: cuid(),
      question: 'War, what is it good for?',
      answers: [
        'Destruction',
        'Sweet military uniforms',
        'Absolutely nothing',
        'Spending heaps of money'
      ],
      correctAnswer: 'Absolutely nothing',
      background: 'images/2war.jpg'
    },
    {
      id: cuid(),
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
      id: cuid(),
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
      id: cuid(),
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
  correct: 'images/correct.jpg',
  incorrect: 'images/incorrect.jpg'
};

// Store Array ============================================================




// Quiz Templates ============================================================

function startTemplate() {
  return `
  <form>
    <button id='start' class='begin'>Start Quiz</button>
  </form>
  `;
}

function questionTemplate() {
  let currentQuestion = store.questions[store.questionNumber];
  return ` 
  <div class='questions boxed'>
  <h3> Question: ${store.questionNumber + 1} / ${store.questions.length} </h3>
  <h2 id='question'>${currentQuestion.question}</h2>
  <form class='boxed'>
  <label>
    <input type='radio' name='answer' value='${currentQuestion.answers[0]}' required/>
    ${currentQuestion.answers[0]}
    </label><br>
    <input type='radio' name='answer' value='${currentQuestion.answers[1]}'>
    ${currentQuestion.answers[1]}
    </label><br>
    <input type='radio' name='answer' value='${currentQuestion.answers[2]}'>
    ${currentQuestion.answers[2]}
    </label><br>
    <input type='radio' name='answer' value='${currentQuestion.answers[3]}'>
    ${currentQuestion.answers[3]}
    </label><br>
    <button id='submit'>Submit</button>
  </form>
  `;
}

function rightTemplate() {
  return `
  <div class='questions boxed' style=''>
    <h1 id='question' class='smaller'>CORRECT!</h2>
    <button id='next'>Next Question</button>
    <h5>So far: ${store.score} / ${store.questions.length}</h5>
  </div>
  `;
}

function wrongTemplate() {
  return `
  <div class='questions boxed' style=''>
    <h1 id='question'>OH NO...</h2>
    <h3>The correct answer is <br> ${store.questions[store.questionNumber].correctAnswer}<h3>
    <button id='next'>Next Question</button>
    <h5>So far: ${store.score} / ${store.questions.length}</h5>
  </div>
  `;
}

function resultsTemplate() {
  return `
  <div class='questions boxed'>
    <h3> Psyche! No more questions! </h3> 

    <h1 id='question'>And the Results Are...</h2>

    <h3> Dude, you scored <br> ${store.score} / ${store.questions.length}! </h3>
    <button id='again'> Again? </button>
  </div>
  `;
}

// Quiz Templates ============================================================




// Render Templates =====================================================

function renderQuizStart() {
  let template = startTemplate();
  $('main').html(template);
}

function renderQuestionCards() {
  let template = questionTemplate();
  $('main').html(template);
}

function renderRightAnswer() {
  let template = rightTemplate();
  $('main').html(template);
}

function renderWrongAnswer() {
  let template = wrongTemplate();
  $('main').html(template);
}

function renderQuizResults() {
  let template = resultsTemplate();
  $('main').html(template);
}
// Render Templates =====================================================




// Event Handlers ==========================================================

function quizStarting() {
  if(!store.quizStarted) {
    renderQuizStart();
  }
}

function quizStart() {
  $('main').on('click', '.begin', function(e) {
    e.preventDefault();
    store.quizStarted = true;
    renderQuestionCards();
  });
}

function noAnswer() {
  $('main').on('click', '#submit', function(e) {
    if($(e.this).text() === 'Submit') {
      if(!$(`input[name="answer"]:checked`).val()) {
        alert('Please submit an answer.');
      }
    }
  });
}

function runQuiz() {
  $('main').on('submit', 'form', function(e) {
    e.preventDefault();
    
    console.log('Loading Questions');
    
    if($(`input[name="answer"]:checked`).val() === store.questions[store.questionNumber].correctAnswer)
    {
      store.score += 1;
      renderRightAnswer();
    } else {
      store.wrong += 1;
      renderWrongAnswer();
    }
    store.questionNumber++;
  });
  
  $('main').on('click', '#next', function() {
    if(store.questionNumber < store.questions.length) {
      renderQuestionCards();
    } else {
      renderQuizResults();
    }
  });
}

function restartQuiz() {
  $('main').on('click', '#again', function(e) {
    e.preventDefault();
    store.questionNumber = 0;
    store.wrong = 0;
    store.score = 0;
    renderQuestionCards();
  });
}

// Event Handlers ==========================================================

// Render Function =========================================================

function render() {
  quizStarting();
  quizStart();
  runQuiz();
  noAnswer();
  restartQuiz();
}

$(render);