
 import  {fetchData} from './utile.js';
 import { getQuizHistory,getItem, setItem } from './storage.js';
 import {createCorrectionElement} from './ui.js';
 

// dom:
let username= document.querySelector('.username');let scoreq= document.querySelector('.score');
 let totalq=document.querySelector('.total');
 let results= document.querySelector('.results');

let arrive= document.querySelector('.arriver');
// recuper   quizHistory,category,username depuis lcoalstorage :
let History=getQuizHistory();
let category=getItem("category");

let name=getItem("username");
 let LastHistory= History[History.length-1];
// content dom :
 username.textContent=name;
 
scoreq.textContent=LastHistory.score;
totalq.textContent=LastHistory.totalQuestions;
let QuestionCatego;
// 
  async function loadQuestions(){
    try{
       QuestionCatego=await fetchData(category); 

    Feedback(QuestionCatego);
    showFailedQuestions(QuestionCatego);  
    }
    catch(error){
        console.log("error est ",error)
    }


  }
  loadQuestions();



// Afficher les résultats
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

function showFailedQuestions(QuestionCatego) {
    let failedQuestions = QuestionCatego.filter((q, index) => {
        // récupérer les réponses de l'utilisateur pour cette question
        let userAnswers = LastHistory.answerUser[index] || [];
        // comparer avec les bonnes réponses par converty table 
        return JSON.stringify(userAnswers.sort()) !== JSON.stringify(q.answer.sort());
    });

  
    return failedQuestions;
}
// event listener pour le bouton de révision
//  envoie les questions échouées dans le localstorage
//  et redirige vers quiz.html en mode révision
revision.addEventListener('click', () => {
    setItem("failedQuestions", showFailedQuestions(QuestionCatego));
    window.location.href = "quiz.html?mode=revision"; // sans espaces !
});

// 









