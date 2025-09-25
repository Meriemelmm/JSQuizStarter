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