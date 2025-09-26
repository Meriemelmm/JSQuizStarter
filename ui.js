

export function createQuestionUI(container, questionData) {
  // Vider le container
  container.innerHTML = "";

  const question = document.createElement("p");
  question.classList.add("question");
  question.textContent = questionData.question;
  container.appendChild(question);

  const propositionsDiv = document.createElement("div");
  propositionsDiv.classList.add("proposition");

  questionData.options.forEach((option, index) => {
    const proposDiv = document.createElement("div");
    proposDiv.classList.add("propos");

    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = "option";
    input.value = index;

    const label = document.createElement("label");
    label.textContent = option; // ✅ correction ici
    label.classList.remove("correct", "wrong");

    proposDiv.appendChild(input);
    proposDiv.appendChild(label);
    propositionsDiv.appendChild(proposDiv);
  });

  container.appendChild(propositionsDiv);
}

   export  function updateCurrentTotal(currentEl, totalEl,current, total){
  currentEl.textContent = current;
  totalEl.textContent = total;


   }
   export function updateGlobalTimer(globalTimeEl, totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  globalTimeEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
// aficher les reponse de user avec reponse correct:
 export function createCorrectionElement(q, idx, answerUser) {
    // Conteneur
    let correctionDiv = document.createElement("div");
    correctionDiv.classList.add("correction");

    // Question
    let questionP = document.createElement("p");
    questionP.textContent = q.question;
    correctionDiv.appendChild(questionP);

    // Réponses correctes
    let correctAnswers = q.answer.map(index => q.options[index]).join(", ");
    let correctDiv = document.createElement("div");
    correctDiv.classList.add("correctAnswer");
    correctDiv.innerHTML = `Les réponses correctes : <strong>${correctAnswers}</strong>`;
    correctionDiv.appendChild(correctDiv);

    // Réponse utilisateur
    let userDiv = document.createElement("div");
    userDiv.classList.add("userAnswer");

    if (answerUser[idx]) {
        let formattedAnswers = answerUser[idx].map(index => {
            let optionText = q.options[index];
            let span = document.createElement("span");
            if (q.answer.includes(index)) {
                span.classList.add("optCorrect");
            } else {
                span.classList.add("optWrong");
            }
            span.textContent = optionText;
            return span;
        });

        userDiv.textContent = "Votre réponse : ";
        formattedAnswers.forEach(span => {
            let strong = document.createElement("strong");
            strong.appendChild(span);
            userDiv.appendChild(strong);
            userDiv.append(" "); // petit espace
        });
    } else {
        userDiv.innerHTML = `Votre réponse : <strong>not answered</strong>`;
    }

    correctionDiv.appendChild(userDiv);

    return correctionDiv;
}
// fucntion aficher les history dans tableau:
 export function createHistoryTable(HistoryBody,data,columns){

  data.forEach((d)=>{

 let trEl= document.createElement("tr");
  HistoryBody.appendChild(trEl);
  columns.forEach((col)=>{
let tdEl=document.createElement("td");
tdEl.textContent=d[col];
trEl.appendChild(tdEl);



  })

  })
  

}
export function createElementPlayyers(ParentEl,playerData){
  let playerCard=document.createElement("div");
  playerCard.classList.add("player-card");
  ParentEl.appendChild(playerCard);

let playerRank=document.createElement("div");
playerRank.classList.add("player-rank");
playerRank.textContent=`#${playerData.rank}`;

playerCard.appendChild(playerRank);
let playerAvatar=document.createElement("div");
playerAvatar.classList.add("player-avatar");
playerCard.appendChild(playerAvatar); 
if (playerData.rank === 1) {
  playerAvatar.innerHTML = '<i class="fas fa-crown"></i>';
} else if (playerData.rank === 2) {
  playerAvatar.innerHTML = '<i class="fas fa-medal"></i>';
} else if (playerData.rank === 3) {
  playerAvatar.innerHTML = '<i class="fas fa-medal"></i>';
} else {
  playerAvatar.innerHTML = '<i class="fas fa-user"></i>';
}

let playerEnf=document.createElement("div");
playerEnf.classList.add("player-info");
playerCard.appendChild(playerEnf);
 let playerName=document.createElement("div");
playerName.classList.add("player-name");
playerName.textContent=playerData.name;
playerEnf.appendChild(playerName);
 let playerScore=document.createElement("div");
playerScore.classList.add("player-score");

playerScore.textContent= "score: "+ playerData.meilleurScore;
playerEnf.appendChild(playerScore);

}
