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
    "HTML": [
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
        }]
    

   

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



