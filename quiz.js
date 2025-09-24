import {fetchData,starTimer}  from './utile.js'; 



let question = document.querySelector('.question');
let propositions = document.querySelectorAll('.propos');
let answeroption = document.querySelectorAll('input[name="option"]');
let next = document.querySelector('.next');
let current = document.querySelector('.current');
let total = document.querySelector('.total');
let time = document.querySelector('.time');
let answerQuestions=[];
 let nameCategory=document.querySelector('.name-cat');

 let globalTime=document.querySelector('.global-time');
 console.log(globalTime);

let theme = localStorage.getItem("category");


  let index = 0;
  let score = 0;
  let mode = "validate"; 
 let questions;
  let intervalId;
   let totalQuestions ;
    let TimeGlobal;
    let questionTimerId;   
let globalTimerId; 
 
    // afiches lesquestions et les options:
    function showQuestion(i) {
    clearInterval(questionTimerId); 
    question.innerHTML = questions[i].question;

    
    propositions.forEach((proposition, j) => {
      proposition.querySelector('input').value = j;
      proposition.querySelector('input').checked = false;
      proposition.querySelector('input').disabled = false;
      proposition.querySelector('label').classList.remove('correct', 'wrong');
      proposition.querySelector('label').innerHTML = questions[i].options[j];
    });

    current.innerHTML = i + 1;
    next.textContent = "Valider";
    mode = "validate";

    
    let countime = questions[i].time;
    time.innerHTML = countime;

  //   intervalId = setInterval(() => {
  //     countime--;
  //     time.innerHTML = countime;

  //     if (countime <= 0) {
  //       clearInterval(intervalId);
      
  //       validateAnswer(true); 
  //     }
  //   }, 1000);
  // }
  questionTimerId=starTimer("secondes",countime,time,()=>{validateAnswer(true)});}




// afiches les questions et les options:
 



async function main() {
    clearInterval(globalTimerId);
    questions = await fetchData(theme);

         totalQuestions=questions.length;
         nameCategory.innerHTML=theme;
         total.innerHTML = totalQuestions;
         
          TimeGlobal=questions.reduce((total ,q) => {
  return total += q.time;
}, 0);
console.log("TimeGlobal",TimeGlobal);
let minutes = parseInt(TimeGlobal / 60, 10);
let secondes = parseInt(TimeGlobal % 60, 10);
globalTime.innerHTML= minutes+":"+secondes;

      
      
 totalQuestions= questions.length;

 showQuestion(index);
    if (questions.length > 0) {
        showQuestion(index);
    }
  globalTimerId=starTimer("minutes",TimeGlobal,globalTime,()=>{
    window.location.href="History.html";
  })  ;
}
// fucntion  chrono timer global :
function startGlobalTimer() {
   let timeLeft = setInterval(() => {
      let minutes = parseInt(TimeGlobal / 60, 10);
  let secondes = parseInt(TimeGlobal % 60, 10);
    
      globalTime.innerText = minutes+":"+secondes;
        TimeGlobal--;

      if (TimeGlobal <= 0) {
         clearInterval(timeLeft); 
         console.log("time is up");
         window.location.href = "History.html"; 
      }
   }, 1000);
}
 function validateAnswer(auto = false) {
  clearInterval(questionTimerId);
  
  console.log("time pour chaque q ",questionTimerId);
   
    let selected = [];

    if (!auto) {
      answeroption.forEach((option) => {
        if (option.checked) {
          selected.push(parseInt(option.value));
         
        }
      }); 
       answerQuestions.push(selected);
    }
    console.log("answer",answerQuestions);

    let answers = questions[index].answer; 
   
   
    answeroption.forEach((option) => {
      let value = parseInt(option.value);
      option.disabled = true; 
      if (answers.includes(value)) {
        option.nextElementSibling.classList.add('correct');
      }
      if (option.checked && !answers.includes(value)) {
        option.nextElementSibling.classList.add('wrong');
      }
    });

   
    if (!auto && JSON.stringify(selected.sort()) === JSON.stringify(answers.sort())) {
      score++;
    }

    next.textContent = "Next";
    mode = "next";
  }
   function nextQuestion() {
    index++;
    if (index < questions.length) {
      showQuestion(index);
    } else {
      
     

      let username = localStorage.getItem("username");
      let theme = localStorage.getItem("category");

      let result = {
        username: username,
        theme: theme,
        score: score,
        totalQuestions:totalQuestions,
        date: new Date().toLocaleString(),
        answerUser:answerQuestions
      };

      let history = JSON.parse(localStorage.getItem("quizHistory")) || [];
      history.push(result);
      localStorage.setItem("quizHistory", JSON.stringify(history));

      next.style.display = "none";
      window.location.href = "History.html";
    }
  }
   next.addEventListener("click", () => {
    if (mode === "validate") {
      validateAnswer();
    } else if (mode === "next") {
      nextQuestion();
    }
  });
main();
     





