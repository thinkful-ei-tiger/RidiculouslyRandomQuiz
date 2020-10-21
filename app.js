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




// Quiz Start ============================================================

function render() {
   
  if(store.quizStarted === false) {
    $('main').html(`<button id='start' class='begin'>Start Quiz</button>`);
    $('#start').on('click', function () {
      loadQuestion(store);
    })
  }
  
}

// Quiz Start ============================================================




// Question Function =====================================================

function loadQuestion(store) {
  
  if (store.questionNumber === store.questions.length) {
    return results();
  }
  
  let askQuestion = store.questions[store.questionNumber];
  
  let template = `
  <div class='questions boxed'>
  <h3> Question: ${store.questionNumber + 1} / ${store.questions.length} </h3>
  <h2 id='question'>${askQuestion.question}</h2>
  <form class='boxed'>
  <label>
    <input type='radio' name='answer' value='${askQuestion.answers[0]}' required/>
    ${askQuestion.answers[0]}
    </label><br>
    <input type='radio' name='answer' value='${askQuestion.answers[1]}'>
    ${askQuestion.answers[1]}
    </label><br>
    <input type='radio' name='answer' value='${askQuestion.answers[2]}'>
    ${askQuestion.answers[2]}
    </label><br>
    <input type='radio' name='answer' value='${askQuestion.answers[3]}'>
    ${askQuestion.answers[3]}
    </label><br>
  </form>
  <div>
  <button id='submit'>Submit</button>
  </div>
  `;
  
  $('main').html(template);
  $('#submit').on('click', () => {
    guess(store);
  })
}

// Question Function =====================================================




// User Guesses ==========================================================

function guess(store){
  console.log('Guess running')
  let correctAnswer = store.questions[store.questionNumber].correctAnswer;
  let guesses = $(`input[type='radio']:checked`).val();
  let templateHTML = '';
  

  if(guesses === undefined) {
    alert('Dude, come on, pick an answer. Since you tried to best me, now you have to start ALL OVER AGAIN!');
    location.reload();

  } else if (guesses === correctAnswer && !undefined) {
    store.score++;
    templateHTML =
    `<div class='questions boxed' style=''>
          <h1 id='question' class='smaller'>CORRECT!</h2>
          <button id='next'>Next Question</button>
          <h5>So far: ${store.score} / ${store.questions.length}</h5>
      </div>`;

  } else {
    store.wrong++;
    templateHTML = 
      `<div class='questions boxed' style=''>
          <h1 id='question'>OH NO...</h2>
          <h3>The correct answer is <br> ${correctAnswer}<h3>
          <button id='next'>Next Question</button>
          <h5>So far: ${store.score} / ${store.questions.length}</h5>
      </div>`;
  }
  

  $('main').html(templateHTML);
  $('#next').on('click', function () {
      store.questionNumber++;
      loadQuestion(store);
  });
  console.log(correctAnswer)
}

// User Guesses ==========================================================



// Quiz Results ==========================================================

function results() {
  let templateHTML = 
  `<div class='questions boxed'>
  <h3> Psyche! No more questions! </h3> 

  <h1 id='question'>And the Results Are...</h2>

  <h3> Dude, you scored <br> ${store.score} / ${store.questions.length}! </h3>
  <button id='again'> Again? </button>
    </div>`;
    
  $('main').html(templateHTML);
  $('#again').on('click', function() {
    store.quizStarted = false;
    store.questionNumber = 0;
    store.score = 0;
    loadQuestion(store);
  });
};

// Quiz Results ==========================================================



// adding random animations to play around with jQ libraries


$(function() {
  $('h1').hover(function(e) { 
    $(this).addClass('animate__animated animate__shakeX');
  }, 
  function(e) {    
    $(this).removeClass('animate__animated animate__shakeX');
    });
});

$(render);