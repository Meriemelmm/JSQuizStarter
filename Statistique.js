

 
import { history, categories } from './utile.js';

console.log("Catégories disponibles :", categories);
console.log("Historique des parties :", history);

let firstStat = categories.map(category => {
 
  let historyFiltered = history.filter(e => e.theme === category);

  return {
    theme: category,
    total: historyFiltered.length
  };
});




