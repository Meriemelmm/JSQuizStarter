// ui.js
export function createQuestionUI(container, questionData) {
  // vider le container avant d'ajouter la question

  // Créer le texte de la question
  const questionEl = document.createElement('p');
  questionEl.classList.add('question');
  questionEl.textContent = questionData.question;
  container.appendChild(questionEl);

  // Créer les propositions
  const propositionsDiv = document.createElement('div');
  propositionsDiv.classList.add('proposition');

  questionData.options.forEach((optionText, index) => {
    const proposDiv = document.createElement('div');
    proposDiv.classList.add('propos');

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'option';
    input.value = index;

    const label = document.createElement('label');
    label.textContent = optionText;

    proposDiv.appendChild(input);
    proposDiv.appendChild(label);
    propositionsDiv.appendChild(proposDiv);
  });

  container.appendChild(propositionsDiv);
}

export function updateCurrentTotal(currentEl, totalEl, current, total) {
  currentEl.textContent = current;
  totalEl.textContent = total;
}

export function updateTimer(timeEl, time) {
  timeEl.textContent = time;
}

export function updateGlobalTimer(globalTimeEl, totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  globalTimeEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
