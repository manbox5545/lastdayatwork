// =====================================================
// ❓ QUESTIONS SYSTEM
// =====================================================

let currentQuestion = 0;


// =====================================================
// ❓ QUESTIONS DATA
// =====================================================

const questions = [

  // ---------------------------------------------------
  // LEVEL 1 — NORMAL
  // ---------------------------------------------------

  {
    question: "Do you want to continue?",
    options: [
      "YES",
      "NO"
    ]
  },

  {
    question: "Are you playing it alone?",
    options: [
      "YES",
      "NO"
    ]
  },

  {
    question: "Are you sure that you are alone?",
    options: [
      "YES",
      "MAYBE NOT"
    ]
  },

  {
    question: "Are you sitting right on a bed?",
    options: [
      "YES",
      "NO"
    ]
  },


  // ---------------------------------------------------
  // LEVEL 2 — SOMETHING FEELS WRONG
  // ---------------------------------------------------

  {
    question: "Do you hear breathing?",
    options: [
      "YES",
      "NO"
    ],
    sound: "ho.mp3"
  },

  {
    question: "Is the room behind you completely empty?",
    options: [
      "YES",
      "I DON'T KNOW"
    ]
  },

  {
    question: "Did you just look behind you?",
    options: [
      "YES",
      "NO"
    ]
  },

  {
    question: "Did you notice anything unusual?",
    options: [
      "YES",
      "NO"
    ]
  },


  // ---------------------------------------------------
  // LEVEL 3 — CREEPY
  // ---------------------------------------------------

  {
    question: "Are you sure that sound came from the game?",
    options: [
      "YES",
      "NO"
    ]
  },

  {
    question: "Did something just move in the corner of your eye?",
    options: [
      "YES",
      "NO"
    ]
  },

  {
    question: "Is your door closed?",
    options: [
      "YES",
      "NO"
    ]
  },

  {
    question: "Are you completely sure nobody is standing behind you?",
    options: [
      "YES",
      "NO"
    ]
  },


  // ---------------------------------------------------
  // LEVEL 4 — VERY CREEPY
  // ---------------------------------------------------

  {
    question: "Why did you look behind you?",
    options: [
      "I HEARD SOMETHING",
      "I DIDN'T"
    ]
  },

  {
    question: "Did you hear that?",
    options: [
      "YES",
      "NO"
    ],
    sound: "whisper.mp3"
  },

  {
    question: "Was that your chair moving?",
    options: [
      "YES",
      "NO"
    ]
  },

  {
    question: "If you are alone... who just made that noise?",
    options: [
      "I DON'T KNOW",
      "STOP"
    ]
  },


  // ---------------------------------------------------
  // LEVEL 5 — FINAL HORROR
  // ---------------------------------------------------

  {
    question: "Don't turn around. Is something behind you?",
    options: [
      "YES",
      "NO"
    ]
  },

  {
    question: "Why did you stop moving?",
    options: [
      "I'M SCARED",
      "I DIDN'T"
    ]
  },

  {
    question: "Did you just hear your name?",
    options: [
      "YES",
      "NO"
    ],
    sound: "whisper2.mp3"
  },

  {
    question: "Are you still alone?",
    options: [
      "YES",
      "NO"
    ]
  },

  {
    question: "Look at the screen carefully. Did anything change?",
    options: [
      "YES",
      "NO"
    ]
  },

  {
    question: "How long have you been playing?",
    options: [
      "NOT LONG",
      "TOO LONG"
    ]
  },

  {
    question: "Are you sure this is the same room you started in?",
    options: [
      "YES",
      "NO"
    ]
  },

  {
    question: "Last question... are you REALLY alone?",
    options: [
      "YES",
      "NO"
    ]
  }

];


// =====================================================
// ❓ SHOW QUESTION
// =====================================================

function showQuestion() {

  const ui = document.getElementById("screenUI");

  const q = questions[currentQuestion];

  if (!ui || !q) return;


  // ---------------------------------------------------
  // PROGRESSIVE HORROR LEVEL
  // ---------------------------------------------------

  ui.classList.remove(
    "normal",
    "creepy",
    "scary",
    "terrifying"
  );


  if (currentQuestion < 5) {

    ui.classList.add("normal");

  }
  else if (currentQuestion < 9) {

    ui.classList.add("creepy");

  }
  else if (currentQuestion < 13) {

    ui.classList.add("scary");

  }
  else {

    ui.classList.add("terrifying");

  }


  // ---------------------------------------------------
  // QUESTION SOUND
  // ---------------------------------------------------

  if (q.sound) {

    const questionSound = new Audio(q.sound);

    questionSound.volume = 0.8;

    questionSound.play().catch(() => {});

  }


  // ---------------------------------------------------
  // CREATE BUTTONS
  // ---------------------------------------------------

  let buttons = "";


  q.options.forEach((option) => {

    buttons += `
      <button
        class="option-btn"
        onclick='answerQuestion(${JSON.stringify(option)})'
      >
        ${option}
      </button>
    `;

  });


  // ---------------------------------------------------
  // DISPLAY QUESTION
  // ---------------------------------------------------

  ui.innerHTML = `

    <div class="question-box">

      <div class="question-text">
        ${q.question}
      </div>

      <br><br>

      <div class="question-options">
        ${buttons}
      </div>

    </div>

  `;

}


// =====================================================
// ✅ ANSWER QUESTION
// =====================================================

function answerQuestion(answer) {

  playClick();


  const ui = document.getElementById("screenUI");

  if (!ui) return;


  // ---------------------------------------------------
  // DISABLE BUTTONS
  // ---------------------------------------------------

  const buttons =
    ui.querySelectorAll(".option-btn");

  buttons.forEach((button) => {

    button.disabled = true;

  });


  // ---------------------------------------------------
  // MOVE TO NEXT QUESTION
  // ---------------------------------------------------

  currentQuestion++;


  // ---------------------------------------------------
  // NEXT QUESTION
  // ---------------------------------------------------

  if (currentQuestion < questions.length) {

    setTimeout(() => {

      showQuestion();

    }, 700);

  }


  // ---------------------------------------------------
  // END
  // ---------------------------------------------------

  else {

    ui.classList.remove(
      "normal",
      "creepy",
      "scary"
    );

    ui.classList.add("terrifying");


    ui.innerHTML = `

      <div class="end-screen">

        <div class="final-message">

          Wait for next update

          <br><br>

          Expected:
          <br>

          August 2026

          <br><br>

          THANK YOU FOR PLAYING

        </div>

      </div>

    `;

  }

}


// =====================================================
// ▶ START QUESTIONS
// =====================================================

function startQuestions() {

  currentQuestion = 0;

  showQuestion();

}
