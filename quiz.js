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
 let questions=
  let index = 0;
  let score = 0;
  let mode = "validate"; 
  let totalQuestions = questions.length;
  total.innerHTML = totalQuestions;
  let intervalId;


