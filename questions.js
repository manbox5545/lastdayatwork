// =====================================================
// ❓ QUESTIONS SYSTEM
// =====================================================

let currentQuestion = 0;


// =====================================================
// ❓ QUESTIONS DATA
// =====================================================

const questions = [

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
        "Yes",
        "No"
    ]
  },

  {
      question: "Do you hear breadthing?",

    options: [
        "Yes",
        "No"
    ],

    sound: "ho.mp3"
  }



];


// =====================================================
// ❓ SHOW QUESTION
// =====================================================

function showQuestion() {

  const ui =
    document.getElementById("screenUI");

  const q =
    questions[currentQuestion];

if (q.sound) {

  const questionSound =
    new Audio(q.sound);

  questionSound.volume = 0.8;

  questionSound.play().catch(() => {});
}

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

  ui.innerHTML = `
    <div class="question-box">

      <div class="question-text">
        ${q.question}
      </div>

      <br><br>

      ${buttons}

    </div>
  `;
}


// =====================================================
// ✅ ANSWER QUESTION
// =====================================================

function answerQuestion(answer) {

  playClick();

  const ui =
    document.getElementById("screenUI");

  currentQuestion++;

  if (currentQuestion < questions.length) {

    setTimeout(() => {

      showQuestion();

    }, 700);

  }

  else {

    ui.innerHTML = `
      <div class="end-screen">

        Wait for next update

        <br><br>

        Expected:
        August 2026

        <br><br>

        THANK YOU FOR PLAYING

      </div>
    `;
  }
}