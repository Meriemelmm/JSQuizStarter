
 import  {fetchData} from './utile.js';
 import { getQuizHistory,getItem, setItem } from './storage.js';
 import {createCorrectionElement} from './ui.js';
 


let username= document.querySelector('.username');
let name=getItem("username");

let History=getQuizHistory();
username.textContent=name;

 let LastHistory= History[History.length-1];

//  partie de dome 
 let scoreq= document.querySelector('.score');
 let totalq=document.querySelector('.total');
 
scoreq.textContent=LastHistory.score;
totalq.textContent=LastHistory.totalQuestions;
let results= document.querySelector('.results');

let arrive= document.querySelector('.arriver');
// recupere category par localstorag e:
let category=getItem("category");




   let QuestionCatego;
  async function loadQuestions(){
 QuestionCatego=await fetchData(category); 

    Feedback(QuestionCatego);
    showFailedQuestions(QuestionCatego);

  }
  loadQuestions();




 function Feedback(QuestionCatego) {
    let answerUser = LastHistory.answerUser;
    results.innerHTML = ""; // vider avant d'ajouter

    QuestionCatego.forEach((q, idx) => {
        let correctionEl = createCorrectionElement(q, idx, answerUser);
        results.appendChild(correctionEl);
    });
}
// mode revision:
let revision= document.querySelector('.revision');
console.log("revision",revision);
console.log("LastHistory",LastHistory);
function showFailedQuestions(QuestionCatego) {
    let failedQuestions = QuestionCatego.filter((q, index) => {
        // récupérer les réponses de l'utilisateur pour cette question
        let userAnswers = LastHistory.answerUser[index] || [];
        // comparer avec les bonnes réponses
        return JSON.stringify(userAnswers.sort()) !== JSON.stringify(q.answer.sort());
    });

  
    return failedQuestions;
}
revision.addEventListener('click', () => {
    setItem("failedQuestions", showFailedQuestions(QuestionCatego));
    window.location.href = "quiz.html?mode=revision"; // sans espaces !
});









