

 
import { categories } from './utile.js';
import { getItem,getQuizHistory } from './storage.js';
let QuizHstr = getQuizHistory() ;
console.log("quiz oshihaja",QuizHstr);


console.log("categories",categories);

 
function calculerStats(history,categories) {
    let stats = categories.map(theme => {
        let parties = history.filter((h)=> h.theme === theme);
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
let statsParTheme = calculerStats(QuizHstr,categories);


console.log("statsPartheme" ,statsParTheme);

// faire meilleur score :
let Scores=QuizHstr.map(h=>h.score);
console.log("table de score",Scores);
let meilleurScore=Math.max(...Scores);
console.log("meilleur score",meilleurScore);
let meilleurScoreJoueur=QuizHstr.find((h)=>h.score===meilleurScore);
console.log("meilleur score joueur",meilleurScoreJoueur);
let username=QuizHstr.map(h=>h.username);
console.log("table de username",username);
//   retour un objet avec les noms unqiues :
username= new Set(username);
// just d evient arrray:
username=Array.from(username);
 let newTableau=[];
 newTableau=username.map((name)=>{
   let user =QuizHstr.filter((q)=>q.username===name);
   console.log(user);
   let newobjet={};
   return  newobjet={
    name:name,
    scorex: user?user.score:0,
    totalx: user ?user.totalQuestions:0,
    themex: user? user.theme:""

   }
 }

)
console.log("new tableau ",newTableau);









