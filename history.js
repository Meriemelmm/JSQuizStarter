

  console.log("test",QuizData);


let username= document.querySelector('.username');
console.log(username);
username.textContent=localStorage.getItem('username');
let history = JSON.parse(localStorage.getItem("quizHistory")) || [];
 let LastHistory= history[history.length-1];
 console.log(LastHistory);
 let scoreq= document.querySelector('.score');
 let totalq=document.querySelector('.total');
 
scoreq.textContent=LastHistory.score;
totalq.textContent=LastHistory.totalQuestions;
let results= document.querySelector('.results');

let cat=localStorage.getItem('category');
let QuestionCatego= QuizData[cat];
let Restart= document.querySelector('.Restart');
let arrive= document.querySelector('.arriver');


let answerUser= LastHistory.answerUser;
console.log("les reponses de  user",answerUser);


results.innerHTML = QuestionCatego.map((q, idx) => {
  
    let CorrectAnswers = q.answer.map(index => q.options[index]).join(', ');

    let UserAnswers = answerUser[idx].map(index => {
        let optionText = q.options[index];
        if (q.answer.includes(index)) {
            
            return `<span class="optCorrect">${optionText}</span>`;
        } else {
           
            return `<span class="optWrong">${optionText}</span>`;
        }
    }).join(', ');

    return `
      <div class="correction">
          <p>${q.question}</p>
          <div class="userAnswer">Votre réponse : <strong>${UserAnswers}</strong></div>
          <div class="correctAnswer">Les réponses correctes :  <strong>${CorrectAnswers}</strong></div>
      </div>
    `;
}).join('');
// verifier cette partie  de  restart :

arrive.addEventListener('click',()=>{
     window.location.href = "index.html";
})
 
 Restart.addEventListener('click',()=>{

 console.log("vou etes sur de faire  recommencer ");








 })
 let fruits = ["pomme", "banane", "orange", "kiwi"];

let randomIndex = Math.floor(Math.random() * fruits.length);
let randomFruit = fruits[randomIndex];





