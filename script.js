const QuizData = {
    "Javascirpt": [
        {
            question: "Quel mot-clé est utilisé pour déclarer une variable en JavaScript ?",
            options: ["var", "let", "const", "all of the above"],
            answer: 3,
            time:30
        },
        {
            question: "Quelle méthode est utilisée pour afficher un message dans la console ?",
            options: ["print()", "console.log()", "echo()", "alert()"],
            answer: 1,
            time:50
        },
        {
            question: "Quel type de langage est JavaScript ?",
            options: ["Compilé", "Interprété", "Binaire", "Assembleur"],
            answer: 1,
            time:120,
        },
        {
            question: "Comment écrire un commentaire sur une seule ligne en JavaScript ?",
            options: ["<!-- commentaire -->", "// commentaire", "/* commentaire */", "# commentaire"],
            answer: 1,
            time:40
        },
        {
            question: "Quelle fonction convertit une chaîne en entier ?",
            options: ["parseInt()", "parseFloat()", "Number()", "toInteger()"],
            answer: 0,
            time:56
        },
        // {
        //     question: "Quelle valeur est retournée par `typeof null` ?",
        //     options: ["null", "undefined", "object", "boolean"],
        //     answer: 2
        // },
        // {
        //     question: "Quelle boucle est utilisée pour parcourir un tableau ?",
        //     options: ["for", "while", "foreach", "for...of"],
        //     answer: 3
        // },
        // {
        //     question: "Quelle méthode permet d’ajouter un élément à la fin d’un tableau ?",
        //     options: ["push()", "pop()", "shift()", "unshift()"],
        //     answer: 0
        // },
        // {
        //     question: "Quelle méthode transforme un JSON en objet JavaScript ?",
        //     options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "parse.JSON()"],
        //     answer: 0
        // },
        // {
        //     question: "Que retournera `2 == '2'` en JavaScript ?",
        //     options: ["true", "false", "error", "undefined"],
        //     answer: 0
        // }
    ],

    "Html": [
        {
            question: "Quel est le langage utilisé pour structurer une page web ?",
            options: ["HTML", "CSS", "JavaScript", "PHP"],
            answer: 0,
            time:60
        },
        {
            question: "Quelle balise est utilisée pour insérer une image ?",
            options: ["<img>", "<image>", "<src>", "<pic>"],
            answer: 0
        },
        {
            question: "Quelle balise définit un lien hypertexte ?",
            options: ["<a>", "<link>", "<href>", "<url>"],
            answer: 0
        },
        {
            question: "Quelle balise est utilisée pour les titres principaux ?",
            options: ["<h1>", "<head>", "<title>", "<header>"],
            answer: 0
        },
        {
            question: "Quelle balise est utilisée pour insérer une liste ordonnée ?",
            options: ["<ul>", "<ol>", "<li>", "<list>"],
            answer: 1
        },
        {
            question: "Quel attribut est utilisé pour donner un identifiant unique à un élément ?",
            options: ["class", "id", "name", "key"],
            answer: 1
        },
        {
            question: "Quelle balise insère une ligne horizontale ?",
            options: ["<line>", "<hr>", "<br>", "<border>"],
            answer: 1
        },
        {
            question: "Quelle balise permet d'insérer une vidéo ?",
            options: ["<movie>", "<media>", "<video>", "<vid>"],
            answer: 2
        },
        {
            question: "Quelle est la balise correcte pour créer un formulaire ?",
            options: ["<form>", "<input>", "<submit>", "<fieldset>"],
            answer: 0
        },
        {
            question: "Quel attribut est utilisé pour afficher un texte alternatif dans une image ?",
            options: ["title", "alt", "src", "text"],
            answer: 1
        }
    ],
    css: [
  {
    question: "Quelle propriété CSS est utilisée pour changer la couleur du texte ?",
    options: ["font-color", "color", "text-color", "background-color"],
    answer: 1
  },
  {
    question: "Quelle unité relative est utilisée en CSS pour définir la taille de police par rapport à l'élément parent ?",
    options: ["px", "em", "%", "rem"],
    answer: 1
  },
  {
    question: "Quelle propriété permet de définir l'espace intérieur d'un élément ?",
    options: ["margin", "padding", "border", "spacing"],
    answer: 1
  },
  {
    question: "Quelle valeur de position fixe un élément par rapport à la fenêtre du navigateur ?",
    options: ["absolute", "relative", "fixed", "sticky"],
    answer: 2
  },
  {
    question: "Quel sélecteur CSS permet de sélectionner tous les paragraphes `<p>` ?",
    options: ["p{}", "#p{}", ".p{}", "paragraph{}"],
    answer: 0
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




if (question && propositions.length > 0 && next) {
  let theme = localStorage.getItem("category");
  let questions = QuizData[theme];
  let index = 0;
  let score = 0;

  console.log(time);
  let totalQuestions = questions.length;

  total.innerHTML = totalQuestions;
let intervalId;
 
  function showQuestion(i) {
   clearInterval(intervalId);
    question.innerHTML = questions[i].question;
    
      let countime=questions[i].time;
      time.innerHTML=countime;
      console.log(countime);
     intervalId = setInterval(() => {
    countime--;
    time.innerHTML=countime;
  
    if (countime <= 0) {
        clearInterval(intervalId);
        console.log("by by ");
        
        if (countime <= 0) {
            clearInterval(intervalId);

            // considérer la réponse comme fausse et montrer la bonne réponse
            answeroption.forEach((opt) => {
                opt.disabled = true;
                if (opt.value === questions[i].answer.toString()) {
                    opt.nextElementSibling.classList.add('correct');
                }
            });

            // afficher le bouton next
            next.style.display = "block";

            // passer automatiquement à la prochaine question après un court délai
           
        }
    }
}, 1000);

    propositions.forEach((proposition, j) => {
      proposition.querySelector('input').value = j;
      proposition.querySelector('label').innerHTML = questions[i].options[j];
    });
    current.innerHTML = i + 1;
    next.style.display = "none";
    document.getElementById('test').innerHTML = "";
  }

 
  showQuestion(index);
   

 
  answeroption.forEach((option) => {
    option.addEventListener('change', (event) => {
      if (event.target.value === questions[index].answer.toString()) {
        score++;
        option.nextElementSibling.classList.add('correct');
       
      } else {
        event.target.nextElementSibling.classList.add('wrong');
       
        answeroption.forEach((opt) => {
          if (opt.value === questions[index].answer.toString()) {
            opt.nextElementSibling.classList.add('correct');
          }
        });
      }

      // bloquer les options
      answeroption.forEach((opt) => opt.disabled = true);
      next.style.display = "block";
    });
  });
  
//   logique de time ici voir voir maintant:
  if(questions[index].time<=0){
    console.log(out);

  }


  // bouton next:
  next.addEventListener('click', () => {
    index++;
    answeroption.forEach((opt) => {
      opt.checked = false;
      opt.disabled = false;
      opt.nextElementSibling.classList.remove('correct', 'wrong');
    });

    if (index < questions.length) {
      showQuestion(index);
    } else {
      next.textContent = 'Valider';
      next.addEventListener('click', () => {
        alert("Quiz terminé ✅ Score : " + score + "/" + totalQuestions);
      });
    }
  });
}
console.log(localStorage.getItem("username"));
