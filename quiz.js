let question = document.querySelector('.question');
let propositions = document.querySelectorAll('.propos');
let answeroption = document.querySelectorAll('input[name="option"]');
let next = document.querySelector('.next');
let current = document.querySelector('.current');
let total = document.querySelector('.total');
let time = document.querySelector('.time');
let answerQuestions=[];
nameCategory=document.querySelector('.name-cat');



let theme = localStorage.getItem("category");


  let index = 0;
  let score = 0;
  let mode = "validate"; 
 let questions;
  let intervalId;
   let totalQuestions ;
    let TimeGlobal;
    function showQuestion(i) {
    clearInterval(intervalId); 
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

    intervalId = setInterval(() => {
      countime--;
      time.innerHTML = countime;

      if (countime <= 0) {
        clearInterval(intervalId);
      
        // validateAnswer(true); 
      }
    }, 1000);
  }
//  fucntion recupere data dynamique:
  async function main(theme){
    const response=await fetch("DataJson/"+theme+".json");
    try{
         data= await response.json();
         questions=data.questions;
         totalQuestions=questions.length;
         nameCategory.innerHTML=theme;
         total.innerHTML = totalQuestions;
          TimeGlobal=questions.reduce((total ,q) => {
  return total += q.time;
}, 0);
console.log(TimeGlobal);
      
      
 totalQuestions= questions.length;

 showQuestion(index);
  
         
    }
    catch(eroor){
        console.log("Error",eroor);
    }
}
// afiches les questions et les options:
 

main(theme);
     



//  let totalQuestions = questions.length;
//   total.innerHTML = totalQuestions;

