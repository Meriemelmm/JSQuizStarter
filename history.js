let username= document.querySelector('.username');
console.log(username);
username.textContent=localStorage.getItem('username');
let history=localStorage.getItem('QuizHistory');
console.log(history);