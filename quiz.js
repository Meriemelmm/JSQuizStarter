import {fetchData,startTimer}  from './utile.js'; 
import { createQuestionUI,updateCurrentTotal,updateGlobalTimer } from './ui.js';
import {setItem,getItem,saveQuizResult} from './storage.js';
// recupere dom :
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
// initialiser les variables
  let index = 0;
  let score = 0;
  let mode = "validate"; 
 let questions;
  let intervalId;
   let totalQuestions ;
    let TimeGlobal;
    let questionTimerId;   
let globalTimerId; 
// recupere les paramètres de l'URL de la page
// pour le mode révision
 let urlParams = new URLSearchParams(window.location.search);
//  verifie si le mode révision est activé
let revisionMode = urlParams.get("mode") === "revision";
    // afiches lesquestions et les options:
    function showQuestion(i) {
   
   
    let questionData=questions[i];
    
 createQuestionUI(container,questionData);
   updateCurrentTotal(current, total, i + 1, totalQuestions);

    next.textContent = "Valider";
    mode = "validate";

    
    let countime = questions[i].time;
    time.innerHTML = countime;
    //  démarre le timer pour chaque question
  questionTimerId=startTimer("secondes",countime,time,()=>{validateAnswer(true)});}

// afiches les questions et les options:

async function main() {
    clearInterval(globalTimerId);
    // si le mode révision est activé, on récupère les questions failed
    if(revisionMode){
         const stored = getItem("failedQuestions");
         if(stored){
             questions = stored;
             console.log("questions",questions);
              if (questions.length === 0) {
            alert("Aucune question échouée !");
            window.location.href = "History.html";
            return;
        }
         }
    }
    else{
         questions = await fetchData(theme); 
    }
   

         totalQuestions=questions.length;
         nameCategory.innerHTML=theme;
      
         
          TimeGlobal=questions.reduce((total ,q) => {
  return total += q.time;
}, 0);
  updateGlobalTimer(globalTime, TimeGlobal);    
 showQuestion(index);
    if (questions.length > 0) {
        showQuestion(index);
    }
    // démarre le timer global:
  globalTimerId=startTimer("minutes",TimeGlobal,globalTime,()=>{
    window.location.href="History.html";
  })  ;
}

 function validateAnswer(auto = false) {
  clearInterval(questionTimerId);
  
 
   
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
   

    let answers = questions[index].answer; 
   
  //  
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

  //  comparaison answer user avec answer correc  converty a string 
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
  // event pour  next question ou valider la réponse
   next.addEventListener("click", () => {
    if (mode === "validate") {
      validateAnswer();
     
    } else if (mode === "next") {
      nextQuestion();
    }
  });
main();


