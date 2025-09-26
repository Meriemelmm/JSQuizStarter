
 import  {fetchData} from './utile.js';
 import { getQuizHistory,getItem } from './storage.js';
 import {createCorrectionElement} from './ui.js';
 


let username= document.querySelector('.username');
let name=getItem("username");
console.log("name",name);
let History=getQuizHistory();
console.log("history database",History);

username.textContent=localStorage.getItem('username');

console.log("history database",History);
 let LastHistory= History[History.length-1];
 console.log("dernier historyu ",LastHistory);
//  partie de dome 
 let scoreq= document.querySelector('.score');
 let totalq=document.querySelector('.total');
 
scoreq.textContent=LastHistory.score;
totalq.textContent=LastHistory.totalQuestions;
let results= document.querySelector('.results');
let Restart= document.querySelector('.Restart');
let arrive= document.querySelector('.arriver');
// recupere category par localstorag e:
let category=getItem("category");
console.log("categoryde localsyorage ",category);
;


   let QuestionCatego;
  async function loadQuestions(){
 QuestionCatego=await fetchData(category); 
 console.log("dataQuestio",QuestionCatego);
 console.log("hello");
    Feedback(QuestionCatego);
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
