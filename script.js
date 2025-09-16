


const questions = [
    {
        question: "Quel mot-clé est utilisé pour déclarer une variable en JavaScript ?",
        options: ["var", "let", "const", "all of the above"],

        answer: 3
    },
    {
        question: "Quelle méthode est utilisée pour afficher un message dans la console ?",
        options: ["print()", "console.log()", "echo()", "alert()"],
        answer: 1
    },
    {
        question: "Quel type de langage est JavaScript ?",
        options: ["Compilé", "Interprété", "Binaire", "Assembleur"],
        answer: 1
    },
    {
        question: "Comment écrire un commentaire sur une seule ligne en JavaScript ?",
        options: ["<!-- commentaire -->", "// commentaire", "/* commentaire */", "# commentaire"],
        answer: 1
    },
    {
        question: "Quelle fonction convertit une chaîne en entier ?",
        options: ["parseInt()", "parseFloat()", "Number()", "toInteger()"],
        answer: 0
    },
    {
        question: "Quelle valeur est retournée par `typeof null` ?",
        options: ["null", "undefined", "object", "boolean"],
        answer: 2
    },
    {
        question: "Quelle boucle est utilisée pour parcourir un tableau ?",
        options: ["for", "while", "foreach", "for...of"],
        answer: 3
    },
    {
        question: "Quelle méthode permet d’ajouter un élément à la fin d’un tableau ?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: 0
    },
    {
        question: "Quelle méthode transforme un JSON en objet JavaScript ?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "parse.JSON()"],
        answer: 0
    },
    {
        question: "Que retournera `2 == '2'` en JavaScript ?",
        options: ["true", "false", "error", "undefined"],
        answer: 0
    }
];

console.log(questions);

let question = document.querySelector('.question');

let propositions = document.querySelectorAll('.propos');
let answeroption = document.querySelectorAll('input[name="option"]');
let currentQuestion=0;
let index = 0;
let score = 0;
let totalQuestions=questions.length;
console.log(totalQuestions);
let  current=document.querySelector('.current');
let total=document.querySelector('.total');
current.innerHTML=currentQuestion+1;
console.log(current.innerHTML);
total.innerHTML=totalQuestions;
validated=document.querySelector('.validation');
validated.style.display="none";



let next = document.querySelector('.next');
next.style.display = "none";


question.innerHTML = questions[0].question;


question.innerHTML = questions[0].question;

propositions.forEach((proposition, i) => {
    proposition.querySelector('input').value = i;

    proposition.querySelector('label').innerHTML = questions[0].options[i];
})




function showNextQuestion(index) {
    question.innerHTML = questions[index].question;
    propositions.forEach((proposition, i) => {
        proposition.querySelector('input').value = i;

        proposition.querySelector('label').innerHTML = questions[index].options[i];
        next.style.display = "none";
        document.getElementById('test').innerHTML = " ";
    })

}
answeroption.forEach((option, i) => {


    option.addEventListener('change', (event) => {
        if (event.target.value === questions[index].answer.toString()) {
            document.getElementById('test').innerHTML = "good event";

            score++;
            console.log(score);
            option.nextElementSibling.classList.add('correct');

          
        }
        else {
            document.getElementById('test').innerHTML = "bad event";
            option.nextElementSibling.classList.add('wrong');
            answeroption.forEach((opt)=>{
                if(opt.value===questions[index].answer.toString()){
                    opt.nextElementSibling.classList.add('correct');
                }
            })
           
           
          
            
        }
          next.style.display = "block";
         
            next.addEventListener('click', () => {
                console.log('clickabe');
                index++;
        
               answeroption.forEach((opt)=>{
                opt.nextElementSibling.classList.remove('correct','wrong');
                opt.checked=false;
               })
                console.log(index);
                if (index < questions.length) {
                    showNextQuestion(index)
                }
                
                
            })
            if(index===questions.length-1){
                validated.style.display="block";
                next.style.display="none"
;
            }
    })
})






