const QuizData = {
    "Javascirpt": [
        {
            question: "Quel mot-clé est utilisé pour déclarer une variable en JavaScript ?",
            options: ["var", "let", "const", "all of the above"],
         answer:[3,1],
            time:30
        },
        {
            question: "Quelle méthode est utilisée pour afficher un message dans la console ?",
            options: ["print()", "console.log()", "echo()", "alert()"],
            answer:[0,1],
            time:50
        },
        {
            question: "Quel type de langage est JavaScript ?",
            options: ["Compilé", "Interprété", "Binaire", "Assembleur"],
            answer:[0,1],
            time:120,
        },
        {
            question: "Comment écrire un commentaire sur une seule ligne en JavaScript ?",
            options: ["<!-- commentaire -->", "// commentaire", "/* commentaire */", "# commentaire"],
             answer:[1,2],
            time:40
        },
        {
            question: "Quelle fonction convertit une chaîne en entier ?",
            options: ["parseInt()", "parseFloat()", "Number()", "toInteger()"],
           answer:[3,2],
            time:56
        },
       
    ],
   "HTML": [
    {
        question: "HTML est-il un langage de programmation ?",
        options: ["Oui", "Non", "Parfois", "Uniquement avec CSS"],
        answer: [1],
        time: 40
    },
    {
        question: "À quoi sert le HTML dans une page web ?",
        options: [
            "Structurer le contenu",
            "Donner du style",
            "Définir la logique",
            "Créer l’architecture du texte et des médias"
        ],
        answer: [0,3],
        time: 50
    },
    {
        question: "Quelle est la différence entre HTML et CSS ?",
        options: [
            "HTML structure le contenu, CSS le met en forme",
            "CSS est un langage de programmation",
            "HTML s’occupe uniquement du style",
            "CSS gère uniquement les images"
        ],
        answer: [0],
        time: 60
    },
    {
        question: "Quelle est la différence entre HTML et JavaScript ?",
        options: [
            "HTML structure la page, JavaScript ajoute des interactions",
            "HTML et JavaScript font la même chose",
            "JavaScript sert à styliser les pages",
            "HTML est plus rapide que JavaScript"
        ],
        answer: [0],
        time: 70
    },
    {
        question: "Qu’est-ce qu’un attribut en HTML ?",
        options: [
            "Une propriété d’une balise qui modifie son comportement",
            "Un style appliqué par défaut",
            "Un élément caché de la page",
            "Un langage séparé du HTML"
        ],
        answer: [0],
        time: 45
    },
    {
        question: "Est-ce que HTML est sensible à la casse (majuscules/minuscules) ?",
        options: ["Oui", "Non", "Seulement pour les balises", "Seulement pour les attributs"],
        answer: [1],
        time: 35
    },
    {
        question: "Qu’est-ce que <!DOCTYPE html> signifie ?",
        options: [
            "C’est une balise obligatoire",
            "C’est une déclaration qui indique la version de HTML utilisée",
            "C’est une balise qui affiche du texte",
            "C’est une fonction de JavaScript"
        ],
        answer: [1],
        time: 50
    },
    {
        question: "Quelle est la particularité des balises HTML auto-fermantes ?",
        options: [
            "Elles n’ont pas besoin de balise de fermeture",
            "Elles doivent toujours avoir un attribut",
            "Elles ne fonctionnent qu’en CSS",
            "Elles sont invisibles dans le code"
        ],
        answer: [0],
        time: 40
    },
    {
        question: "Quelle est la différence entre une liste ordonnée et une liste non ordonnée ?",
        options: [
            "Ordonnée = numéros, Non ordonnée = puces",
            "Ordonnée = puces, Non ordonnée = chiffres",
            "Ordonnée = en colonnes, Non ordonnée = en lignes",
            "Il n’y a pas de différence"
        ],
        answer: [0],
        time: 60
    },
    {
        question: "HTML est principalement utilisé pour :",
        options: [
            "Structurer le contenu d’une page web",
            "Ajouter du style aux pages web",
            "Programmer des algorithmes",
            "Créer des animations"
        ],
        answer: [0],
        time: 35
    }
],"CSS": [
    {
        question: "À quoi sert le CSS dans une page web ?",
        options: [
            "Il sert à définir l'apparence et le style d’une page web",
            "Il sert à structurer le contenu comme HTML",
            "Il sert à créer des interactions comme JavaScript",
            "Il permet de contrôler les couleurs, polices et tailles"
        ],
        answer: [0,3],
        time: 50
    },
    {
        question: "Quelle est la principale différence entre HTML et CSS ?",
        options: [
            "HTML structure le contenu alors que CSS gère la présentation visuelle",
            "CSS remplace totalement HTML",
            "HTML définit uniquement les couleurs, CSS définit uniquement les titres",
            "CSS est un langage de programmation contrairement à HTML"
        ],
        answer: [0],
        time: 60
    },
    {
        question: "Pourquoi utiliser un fichier CSS externe ?",
        options: [
            "Pour séparer le style du contenu",
            "Pour réutiliser le même style sur plusieurs pages",
            "Parce que c’est obligatoire",
            "Pour rendre le code plus clair et maintenable"
        ],
        answer: [0,1,3],
        time: 70
    },
    {
        question: "Que permet le concept de 'responsive design' en CSS ?",
        options: [
            "Adapter l’affichage d’un site aux différentes tailles d’écran",
            "Créer automatiquement du contenu",
            "Changer le langage utilisé sur la page",
            "Améliorer le référencement sans modifier le code HTML"
        ],
        answer: [0],
        time: 65
    },
    {
        question: "À quoi sert un sélecteur CSS ?",
        options: [
            "À indiquer sur quels éléments HTML appliquer un style",
            "À écrire du texte directement dans une page",
            "À définir des règles de logique comme JavaScript",
            "À organiser les fichiers du projet"
        ],
        answer: [0],
        time: 45
    },
    {
        question: "Pourquoi utilise-t-on le positionnement en CSS ?",
        options: [
            "Pour placer les éléments à l’endroit désiré sur la page",
            "Pour contrôler la disposition des éléments entre eux",
            "Pour remplacer le code JavaScript",
            "Pour structurer le contenu comme le fait HTML"
        ],
        answer: [0,1],
        time: 55
    },
    {
        question: "À quoi sert la propriété 'z-index' ?",
        options: [
            "À définir quel élément doit apparaître devant ou derrière un autre",
            "À augmenter la vitesse du site",
            "À changer la couleur du texte",
            "À rendre un site responsive"
        ],
        answer: [0],
        time: 40
    },
    {
        question: "Pourquoi est-il important d’utiliser des unités relatives comme % ou em en CSS ?",
        options: [
            "Parce qu’elles permettent une meilleure adaptation aux différents écrans",
            "Parce qu’elles sont toujours plus rapides que les pixels",
            "Parce qu’elles facilitent le responsive design",
            "Parce qu’elles remplacent automatiquement HTML"
        ],
        answer: [0,2],
        time: 70
    },
    {
        question: "Que permet un media query en CSS ?",
        options: [
            "Adapter les styles en fonction de la taille ou du type d’écran",
            "Créer des images automatiquement",
            "Ajouter du contenu interactif",
            "Définir la structure logique d’une page"
        ],
        answer: [0],
        time: 60
    },
    {
        question: "Le CSS est-il un langage de programmation ?",
        options: [
            "Non, c’est un langage de style",
            "Oui, il permet de créer des algorithmes",
            "Oui, il peut remplacer JavaScript",
            "Non, il sert uniquement à décrire la présentation des pages"
        ],
        answer: [0,3],
        time: 50
    }
]


    

   

};
// ----------- partie page home ------------
let quizesContainer = document.querySelector('.quizes');
let NameContainer = document.querySelector('.name-div');
let nameInput = document.querySelector('.username');
let form = document.querySelector('.NameForm');


if (quizesContainer) {
  
  let categories = Object.keys(QuizData);
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

      if (!username) {
       
        NameContainer.style.display = "block";
      } else {
       
        window.location.href = "quiz.html";
      }
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

// ----------- Partie  page quiz  ------------
let question = document.querySelector('.question');
let propositions = document.querySelectorAll('.propos');
let answeroption = document.querySelectorAll('input[name="option"]');
let next = document.querySelector('.next');
let current = document.querySelector('.current');
let total = document.querySelector('.total');
let time = document.querySelector('.time');
let answerQuestions=[];

if (question && propositions.length > 0 && next) {
  let theme = localStorage.getItem("category");
  let questions = QuizData[theme];
  let index = 0;
  let score = 0;
  let mode = "validate"; 
  let totalQuestions = questions.length;
  total.innerHTML = totalQuestions;
  let intervalId;

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
      
        validateAnswer(true); 
      }
    }, 1000);
  }

  
  function validateAnswer(auto = false) {
    clearInterval(intervalId); 
    let selected = [];

    if (!auto) {
      answeroption.forEach((option) => {
        if (option.checked) {
          selected.push(parseInt(option.value));
         
        }
      }); 
       answerQuestions.push(selected);
    }
    console.log("answer",answerQuestions);

    let answers = questions[index].answer; 
   
   
    answeroption.forEach((option) => {
      let value = parseInt(option.value);
      option.disabled = true; 
      if (answers.includes(value)) {
        option.nextElementSibling.classList.add('correct');
      }
      if (option.checked && !answers.includes(value)) {
        option.nextElementSibling.classList.add('wrong');
      }
    });

   
    if (!auto && JSON.stringify(selected.sort()) === JSON.stringify(answers.sort())) {
      score++;
    }

    next.textContent = "Next";
    mode = "next";
  }

 
  function nextQuestion() {
    index++;
    if (index < questions.length) {
      showQuestion(index);
    } else {
      
     

      let username = localStorage.getItem("username");
      let theme = localStorage.getItem("category");

      let result = {
        username: username,
        theme: theme,
        score: score,
        totalQuestions:totalQuestions,
        date: new Date().toLocaleString(),
        answerUser:answerQuestions
      };

      let history = JSON.parse(localStorage.getItem("quizHistory")) || [];
      history.push(result);
      localStorage.setItem("quizHistory", JSON.stringify(history));

      next.style.display = "none";
      window.location.href = "History.html";
    }
  }

 
  next.addEventListener("click", () => {
    if (mode === "validate") {
      validateAnswer();
    } else if (mode === "next") {
      nextQuestion();
    }
  });

 
  showQuestion(index);

}



