export function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key) {
    try{
      const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;   
    }catch(error){
      console.error("Error getting item from localStorage", error);
      return null;  
    }
 
}


export function removeItem(key) {
  localStorage.removeItem(key);
}
export function saveQuizResult(result) {
    try {
        // récupérer l'historique s'il existe
        let history = getItem("quizHistory");
        if (!history) {
            history = [];
        }

        // ajouter le nouveau résultat
        history.push(result);

        // sauvegarder
        setItem("quizHistory", history);
    } catch (error) {
        console.error("Error saving quiz result", error);
    }
}



export function getQuizHistory() {
  return getItem("quizHistory");
}