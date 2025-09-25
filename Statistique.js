

 
import { categories } from './utile.js';
import { getQuizHistory } from './storage.js';
let QuizHstr = getQuizHistory() || [];
console.log("quiz oshihaja",QuizHstr, Array.isArray(QuizHstr));

console.log("categories",categories);
co
 
function calculerStats(QuizHstr, categories) {
    let stats = categories.map(theme => {
        let parties = QuizHstr.filter((h)=> h.theme === theme);
        let totalJoueurs = parties.length;
        let scoreTotal = parties.reduce((sum, p) => sum + p.score, 0);
        let scoreMoyen = parties.length ? scoreTotal / parties.length : 0;
        return {
            theme: theme,
            totalJoueurs: totalJoueurs,
            scoreMoyen: scoreMoyen
        };
    });
    return stats;
}
let statsParTheme = calculerStats(history, categories);


console.log("statsPartheme" ,statsParTheme);




