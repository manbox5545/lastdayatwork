function showQuestion() {

  const ui = document.getElementById("screenUI");
  const q = questions[currentQuestion];

  // Progressive horror
  if (currentQuestion >= 5 && currentQuestion < 9) {
    ui.className = "screenUI creepy";
  }
  else if (currentQuestion >= 9 && currentQuestion < 13) {
    ui.className = "screenUI scary";
  }
  else if (currentQuestion >= 13) {
    ui.className = "screenUI terrifying";
  }
  else {
    ui.className = "screenUI";
  }

  if (q.sound) {

    const questionSound = new Audio(q.sound);

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
