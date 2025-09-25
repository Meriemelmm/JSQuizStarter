
 import  {fetchData} from './utile.js';
 import { getQuizHistory,getItem } from './storage.js';
 


let username= document.querySelector('.username');
let name=getItem("username");
console.log("name",name);
let History=getQuizHistory();
console.log("history database",History);

username.textContent=localStorage.getItem('username');

console.log("history database",History);
 let LastHistory= History[History.length-1];
 
 let scoreq= document.querySelector('.score');
 let totalq=document.querySelector('.total');
 
scoreq.textContent=LastHistory.score;
totalq.textContent=LastHistory.totalQuestions;
let results= document.querySelector('.results');

let category=localStorage.getItem('category');
;
let Restart= document.querySelector('.Restart');
let arrive= document.querySelector('.arriver');

   let QuestionCatego;
  async function loadQuestions(){
 QuestionCatego=await fetchData(category); 
 console.log("dataQuestio",QuestionCatego);
 console.log("hello");
    Feedback(QuestionCatego);
  }



  

//  function Feedback(QuestionCatego){

// let answerUser= LastHistory.answerUser;
// console.log("answesUser",answerUser);




// results.innerHTML = QuestionCatego.map((q,idx) => {
  
//     let CorrectAnswers = q.answer.map(index => q.options[index]).join(', ');

//     let UserAnswers = (answerUser[idx])? answerUser[idx].map(index => {
//         let optionText = q.options[index];
//         if (q.answer.includes(index)) {
            
//             return `<span class="optCorrect">${optionText}</span>`;
//         } else {
           
//             return `<span class="optWrong">${optionText}</span>`;
//         }
//     }).join(', '):"not answered";

//     return `
//       <div class="correction">
//           <p>${q.question}</p>
//           <div class="userAnswer">Votre réponse : <strong>${UserAnswers}</strong></div>
//           <div class="correctAnswer">Les réponses correctes :  <strong>${CorrectAnswers}</strong></div>
//       </div>
//     `;
// }).join('');


//  }
//    loadQuestions();



// arrive.addEventListener('click',()=>{
//      window.location.href = "index.html";
// })
 
//  Restart.addEventListener('click',()=>{

//  console.log("vou etes sur de faire  recommencer ");

//  })


// ;




