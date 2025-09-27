


import { categories } from './utile.js';
import { getItem, getQuizHistory } from './storage.js';
import {createHistoryTable,createElementPlayyers} from './ui.js';

// Récupération des données
let QuizHstr = getQuizHistory();
 

// 1. Statistiques par thème:
 export function calculerStatsParTheme(history, categories) {
    return categories.map(theme => {
        let parties = history.filter((h) => h.theme === theme);
        let totalJoueurs = parties.length;
        let scoreTotal = parties.reduce((sum, p) => sum + p.score, 0);
        let scoreMoyen = parties.length ? scoreTotal / parties.length : 0;
          let scoreMax = parties.length ? Math.max(...parties.map((p) => p.score)) : 0;
        return {
            theme: theme,
            totalJoueurs: totalJoueurs,
            scoreMoyen: scoreMoyen,
            scoreMax:scoreMax

        };
    });
}

// 2. Meilleur score global
function calculerMeilleurScore(history) {
    let scores = history.map(h => h.score);
    let meilleurScore = Math.max(...scores);
    let meilleurScoreJoueur = history.find((h) => h.score === meilleurScore);
    
    return {
        meilleurScore: meilleurScore,
        joueur: meilleurScoreJoueur
    };
}


// fucntion filtrage TABLE UNIQUE  par nom:
  function getNameUnique(history){
     let usernames = history.map(h => h.username);
    return  usernames = Array.from(new Set(usernames));
  }
// 3. Statistiques par utilisateur
function calculerStatsParUtilisateur(history) {
     let usernames= getNameUnique(history);
    
    return usernames.map((name) => {
        let userParties = history.filter((q) => q.username === name);
        let scoreTotal = userParties.reduce((sum, p) => sum + p.score, 0);
        let meilleurScoreUser = Math.max(...userParties.map(p => p.score));
        let totalParties = userParties.length;
        
        return {
            name: name,
            scoreTotal: scoreTotal,
            meilleurScore: meilleurScoreUser,
            totalParties: totalParties,
            scoreMoyen: totalParties ? scoreTotal / totalParties : 0
        };
    });
}

// 4. Classement top 3
function calculerTop3(history,n=3) {
    let statsUtilisateurs = calculerStatsParUtilisateur(history);
    
    return statsUtilisateurs
        .sort((a, b) => b.meilleurScore - a.meilleurScore)
        .slice(0,n);
}

//  Fonction qui retourne toutes les statistiques :
function genereStats(history, categories) {
    return {
        statsParTheme: calculerStatsParTheme(history, categories),
        meilleurScoreGlobal: calculerMeilleurScore(history),
        statsUtilisateurs: calculerStatsParUtilisateur(history),
        top3: calculerTop3(history,3)
    };
}

// Calcul de toutes les statistiques
let toutesLesStats = genereStats(QuizHstr,categories);


// recuper dom dans file bordhtml:
 let HistoryBody= document.querySelector('#history-body');
 let StatsBody=document.querySelector('#stats-body');
 


// filtrage history par name 
 function  getHistoryParName(history){

 let username=getItem("username");
let historyParUser;

   historyParUser= history.filter((h)=>{
    return h.username===username;
 })

 return historyParUser;}
  let HistoryParName = getHistoryParName(QuizHstr);
//  function aficher historyqiue des theme jour dans bord pour chaque  user :
 function ShowUserHistory(ElementBody,data,columnsToShow) {
    
   
    createHistoryTable(ElementBody,data,columnsToShow);
}

//  aficher  les hsitiry de user :

ShowUserHistory(HistoryBody,HistoryParName, ["theme","score","totalQuestions","date"]); 
 ShowUserHistory(StatsBody,toutesLesStats.statsParTheme,["theme","totalJoueurs","scoreMoyen","scoreMax"]);
 
//  dom top classement:
let TopPlayers=document.querySelector('.players');
function showTopPlayers(ParentEl,playersData){
  playersData.forEach((playerData,idx)=>{
    playerData.rank=idx+1;



    createElementPlayyers(ParentEl,playerData);
  })}
showTopPlayers(TopPlayers,toutesLesStats.top3);



 
    
 
 
   
