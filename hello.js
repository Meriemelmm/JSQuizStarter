import { fetchData, startTimer } from './utile.js';
import { createQuestionUI, updateCurrentTotal, updateTimer, updateGlobalTimer } from './shihaja.js';

const container = document.querySelector('.container-question');
const current = document.querySelector('.current');
const total = document.querySelector('.total');
const time = document.querySelector('.time');
const globalTime = document.querySelector('.global-time');
const next = document.querySelector('.next');
const nameCategory = document.querySelector('.name-cat');

let theme = localStorage.getItem("category");
let index = 0;
let score = 0;
let mode = "validate";
let questions = [];
let answerQuestions = [];
let totalQuestions;
let TimeGlobal;
let questionTimerId;
let globalTimerId;

async function main() {
  clearInterval(globalTimerId);
  questions = await fetchData(theme);
  totalQuestions = questions.length;

  nameCategory.textContent = theme;
  total.textContent = totalQuestions;

  TimeGlobal = questions.reduce((total, q) => total + q.time, 0);
  updateGlobalTimer(globalTime, TimeGlobal);

  showQuestion(index);

  // Timer global
  globalTimerId = startTimer("minutes", TimeGlobal, globalTime, () => {
    window.location.href = "History.html";
  });
}

const quizContent = document.querySelector('.quiz-content');

function showQuestion(i) {
  clearInterval(questionTimerId);

  const questionData = questions[i];
  createQuestionUI(quizContent, questionData); // <-- ici
  updateCurrentTotal(current, total, i + 1, totalQuestions);
  next.textContent = "Valider";
  mode = "validate";

  let countime = questionData.time;
  updateTimer(time, countime);

  questionTimerId = startTimer("secondes", countime, time, () => validateAnswer(true));
}


function validateAnswer(auto = false) {
  clearInterval(questionTimerId);

  const answeroption = document.querySelectorAll('input[name="option"]');
  let selected = [];

  if (!auto) {
    answeroption.forEach(option => {
      if (option.checked) selected.push(parseInt(option.value));
    });
    answerQuestions.push(selected);
  }

  const answers = questions[index].answer;

  answeroption.forEach(option => {
    let value = parseInt(option.value);
    option.disabled = true;

    if (answers.includes(value)) option.nextElementSibling.classList.add('correct');
    if (option.checked && !answers.includes(value)) option.nextElementSibling.classList.add('wrong');
  });

  if (!auto && JSON.stringify(selected.sort()) === JSON.stringify(answers.sort())) score++;

  next.textContent = "Next";
  mode = "next";
}

function nextQuestion() {
  index++;
  if (index < questions.length) {
    showQuestion(index);
  } else {
    const username = localStorage.getItem("username");

    const result = {
      username,
      theme,
      score,
      totalQuestions,
      date: new Date().toLocaleString(),
      answerUser: answerQuestions
    };

    const history = JSON.parse(localStorage.getItem("quizHistory")) || [];
    history.push(result);
    localStorage.setItem("quizHistory", JSON.stringify(history));

    next.style.display = "none";
    window.location.href = "History.html";
  }
}

next.addEventListener("click", () => {
  if (mode === "validate") validateAnswer();
  else if (mode === "next") nextQuestion();
});

main();
