import { calculerStatsParTheme } from './Statistique.js';
import { getQuizHistory } from './storage.js';
import { categories } from './utile.js';

//  Récupérer les stats UNE SEULE FOIS
let stats = calculerStatsParTheme(getQuizHistory(), categories);
console.log("shhshs",stats);
// cree    une table les themes et  le nombre de jouers:
let labels = stats.map(c => c.theme); 
let values = stats.map(c => c.totalJoueurs);

//  recupere   dom  canvas
let FirstChart = document.getElementById('FirstChart').getContext('2d');
console.log("FirstChart",FirstChart);
//  Créer le graphique  tehme en fucntion du nombre joueurs
let chart = new Chart(FirstChart, {
    type: 'doughnut',
    data: {
        labels: labels,
        datasets: [{
            label: 'Nombre de joueurs',
            data: values,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
         plugins: {
            title: {
                display: true,
                text: 'Répartition des parties par thématique'
            }
        }
    }
});
// chart deuxieme:


let history = getQuizHistory();


let grouped = {};

history.forEach(h => {
    if (!h.date || h.score == null) return;


   
    let [day, month, year] = h.date.split(" ")[0].split("/");
    let dateObj = new Date(`${year}-${month}-${day}`); 

    let simpleDate = `${day}/${month}/${year}`; //afiche sur le graph chart
    if (!grouped[simpleDate]) grouped[simpleDate] = [];
    grouped[simpleDate].push(Number(h.score));
});

//  recupere les keys dans tableau avec  existante d une facon croissant
let dates = Object.keys(grouped).sort();
//  calculer la moyenne par date et les afficher dans le graphique.
let avgScores = dates.map(date => {
    let scores = grouped[date];
    return scores.reduce((a,b)=>a+b,0) / scores.length;
});


//  deuxiemee chart qui afiche le scoremoyenne par/date 

let SecondChart = document.getElementById('SecondChart').getContext('2d');

new Chart(SecondChart, {
    type: 'line',
    data: {
        // x:dates:
        labels: dates, 
        datasets: [{
            label: 'Score moyen',
            // y:avgscore: scores=f(date);
            data: avgScores,
            borderColor: '#4CAF50',
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: { title: { display: true, text: 'Date' } },
            y: { title: { display: true, text: 'Score' }, beginAtZero: true }
        }
    }
});
