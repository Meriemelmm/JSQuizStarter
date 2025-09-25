import {fetchData,starTimer}  from './utile.js'; 
import { createQuestionUI,updateCurrentTotal,updateGlobalTimer } from './ui.js';
import {setItem,getItem,saveQuizResult} from './storage.js';

let question = document.querySelector('.question');

let next = document.querySelector('.next');
let current = document.querySelector('.current');
let total = document.querySelector('.total');
let time = document.querySelector('.time');
let answerQuestions=[];
 let nameCategory=document.querySelector('.name-cat');

 let globalTime=document.querySelector('.global-time');
let theme=getItem("category");
const container=document.querySelector('.container');

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
   
    let questionData=questions[i];
    console.log("hellooo");
 createQuestionUI(container,questionData);
   updateCurrentTotal(current, total, i + 1, totalQuestions);
 console.log("hellossjsj");
    next.textContent = "Valider";
    mode = "validate";

    
    let countime = questions[i].time;
    time.innerHTML = countime;
  questionTimerId=starTimer("secondes",countime,time,()=>{validateAnswer(true)});}

// afiches les questions et les options:

async function main() {
    clearInterval(globalTimerId);
    questions = await fetchData(theme);

         totalQuestions=questions.length;
         nameCategory.innerHTML=theme;
        //  total.innerHTML = totalQuestions;
         
          TimeGlobal=questions.reduce((total ,q) => {
  return total += q.time;
}, 0);
  updateGlobalTimer(globalTime, TimeGlobal);    
 showQuestion(index);
    if (questions.length > 0) {
        showQuestion(index);
    }
  globalTimerId=starTimer("minutes",TimeGlobal,globalTime,()=>{
    window.location.href="History.html";
  })  ;
}

 function validateAnswer(auto = false) {
  clearInterval(questionTimerId);
  
  console.log("time pour chaque q ",questionTimerId);
   
    let selected = [];
    const answeroption = container.querySelectorAll('input[name="option"]');

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
      clearInterval(globalTimerId);
      let username=getItem("username");
      let theme=getItem("category");

      let result = {
        username: username,
        theme: theme,
        score: score,
        totalQuestions:totalQuestions,
        date: new Date().toLocaleString(),
        answerUser:answerQuestions
      };
     
       
        try{
 saveQuizResult(result);
        }
        catch(error){
          console.error("Error saving quiz result", error);
        }
      
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


