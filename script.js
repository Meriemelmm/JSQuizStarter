import { categories } from './utile.js';
import { setItem } from './storage.js';
import {createCategoryUI}  from './ui.js';
// recupere dom :
let quizesContainer = document.querySelector('.quizes');
let NameContainer = document.querySelector('.name-div');
let nameInput = document.querySelector('.username');
let form = document.querySelector('.NameForm');

if (quizesContainer) {
  
  NameContainer.style.display = "none";
  categories.forEach(theme => {
    let quizUi = createCategoryUI(theme, (theme) => {
      setItem("category", theme);
      NameContainer.style.display = "block";
    });

    quizesContainer.appendChild(quizUi);
  });

  // gerer  du form:
  form.addEventListener("submit", (e) => {
    // annule le comportement par défaut du navigate
    //  cad  moi qui je controle ca 
    e.preventDefault();
    let nom = nameInput.value.trim();
    if (!nom) {
      alert("Veuillez entrer un nom !");
      return;
    }
   
    setItem("username",nom);
    window.location.href = "quiz.html";
  });
}
function test() {
  return "hello";
}


