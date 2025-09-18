let question = document.querySelector('.question');
let propositions = document.querySelector('.propositions');
let next = document.querySelector('.next');
let current = document.querySelector('.current');
let total = document.querySelector('.total');
let time = document.querySelector('.time');

let theme = localStorage.getItem("category");
let username = localStorage.getItem("username");
let questions = QuizData[theme];
let index = 0;
let score = 0;
let intervalId;
let mode = "validate"; // "validate" ou "next"

total.textContent = questions.length;

function showQuestion(i) {
  clearInterval(intervalId);
  let q = questions[i];
  question.textContent = q.question;

  // afficher les options
  propositions.innerHTML = q.options.map((opt, j) => `
    <div>
      <input type="checkbox" id="opt${j}" name="option" value="${j}">
      <label for="opt${j}">${opt}</label>
    </div>
  `).join("");

  current.textContent = i + 1;
  next.textContent = "Valider";
  mode = "validate";

  // timer
  let countime = q.time;
  time.textContent = countime;
  intervalId = setInterval(() => {
    countime--;
    time.textContent = countime;
    if (countime <= 0) {
      clearInterval(intervalId);
      autoFail(q);
    }
  }, 1000);
}

function validateAnswer() {
  clearInterval(intervalId);
  let selected = Array.from(document.querySelectorAll('input[name="option"]:checked'))
                      .map(opt => parseInt(opt.value));

  let answers = questions[index].answer;

  // vérifier exactitude
  let isCorrect = selected.length === answers.length &&
                  selected.every(v => answers.includes(v));
  if (isCorrect) score++;

  // coloration
  document.querySelectorAll('input[name="option"]').forEach(opt => {
    let val = parseInt(opt.value);
    if (answers.includes(val)) {
      opt.nextElementSibling.classList.add("correct");
    } else if (opt.checked) {
      opt.nextElementSibling.classList.add("wrong");
    }
    opt.disabled = true;
  });

  mode = "next";
  next.textContent = "Suivant";
}

function autoFail(q) {
  // afficher les bonnes réponses
  q.answer.forEach(ans => {
    document.getElementById("opt" + ans).nextElementSibling.classList.add("correct");
  });
  document.querySelectorAll('input[name="option"]').forEach(opt => opt.disabled = true);
  mode = "next";
  next.textContent = "Suivant";
}

function finishQuiz() {
  let result = {
    username: username,
    theme: theme,
    score: score,
    date: new Date().toLocaleString()
  };

  let history = JSON.parse(localStorage.getItem("quizHistory")) || [];
  history.push(result);
  localStorage.setItem("quizHistory", JSON.stringify(history));

  alert(`Quiz terminé ! Score : ${score}/${questions.length}`);
  window.location.href = "history.html";
}

next.addEventListener("click", () => {
  if (mode === "validate") {
    validateAnswer();
  } else {
    index++;
    if (index < questions.length) {
      showQuestion(index);
    } else {
      finishQuiz();
    }
  }
});

// première question
showQuestion(index);
