
import {categories } from './utile.js'
let quizesContainer = document.querySelector('.quizes');
let NameContainer = document.querySelector('.name-div');
let nameInput = document.querySelector('.username');
let form = document.querySelector('.NameForm');


if (quizesContainer) {
  
 
  quizesContainer.innerHTML = categories.map(theme => `
    <div class="quiz">
      <h2>${theme} Quiz</h2>
      <div class="start-div">
        <button class="start" data-category="${theme}">
          <i class="fas fa-play"></i> Commencer
        </button>
      </div>
    </div>
  `).join("");
  NameContainer.style.display = "none";
  
 

  
  document.querySelectorAll('.start').forEach(btn => {
    btn.addEventListener('click', () => {
      localStorage.setItem("category", btn.dataset.category);
      let username = localStorage.getItem("username");

      // if (!username) {
       
      //   NameContainer.style.display = "block";
      // } else {
       
      //   window.location.href = "quiz.html";
      // }
      NameContainer.style.display="block";
    });
  });

  // gestion d form  nom
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let nom = nameInput.value.trim();
    if (nom === "") {
      alert("Veuillez entrer un nom !");
      return;
    }
    localStorage.setItem("username", nom);
    window.location.href = "quiz.html";
  });
}