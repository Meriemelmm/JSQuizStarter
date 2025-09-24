import { categories } from './utile.js';

let quizesContainer = document.querySelector('.quizes');
let NameContainer = document.querySelector('.name-div');
let nameInput = document.querySelector('.username');
let form = document.querySelector('.NameForm');

if (quizesContainer) {
  
  NameContainer.style.display = "none";


  categories.forEach(theme => {
    // Crée le container principal
    let quizDiv = document.createElement('div');
    quizDiv.classList.add('quiz');

    // create le titre
    let h2 = document.createElement('h2');
    h2.textContent = `${theme} Quiz`;

    // create la div pour le bouton
    let startDiv = document.createElement('div');
    startDiv.classList.add('start-div');

    // create le bouton
    let button = document.createElement('button');
    button.classList.add('start');
    button.dataset.category = theme;

    // add d’un icône et du texte
    let icon = document.createElement('i');
    icon.classList.add('fas', 'fa-play');
    button.appendChild(icon);
    button.appendChild(document.createTextNode(" Commencer"));

   
    startDiv.appendChild(button);
    quizDiv.appendChild(h2);
    quizDiv.appendChild(startDiv);
    quizesContainer.appendChild(quizDiv);

  
    button.addEventListener('click', () => {
      localStorage.setItem("category", theme);
      NameContainer.style.display = "block";
    });
  });

  // Gestion du formulaire
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let nom = nameInput.value.trim();
    if (!nom) {
      alert("Veuillez entrer un nom !");
      return;
    }
    localStorage.setItem("username", nom);
    window.location.href = "quiz.html";
  });
}
