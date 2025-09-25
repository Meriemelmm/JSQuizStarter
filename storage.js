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
    try{
     let history = getItem("quizHistory", []);
  history.push(result);
  saveItem("quizHistory", history);   
    }catch(error){
      console.error("Error saving quiz result", error);
    }
  
}


export function getQuizHistory() {
  return getItem("quizHistory", []);
}