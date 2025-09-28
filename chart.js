import { calculerStatsParTheme } from './Statistique.js';
import { getQuizHistory } from './storage.js';
import { categories } from './utile.js';

// ⚡ Récupérer les stats UNE SEULE FOIS
let stats = calculerStatsParTheme(getQuizHistory(), categories);
console.log("shhshs",stats);
// ⚡ Extraire labels et valeurs
let labels = stats.map(c => c.theme); 
let values = stats.map(c => c.totalJoueurs);

// ⚡ Récupérer le canvas
let FirstChart = document.getElementById('FirstChart').getContext('2d');
console.log("FirstChart",FirstChart);
// ⚡ Créer le graphique
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
 let history=getQuizHistory();
 console.log("history", history);

const sortedHistory = [...history].sort((a, b) => new Date(a.date) - new Date(b.date));
const dates = sortedHistory.map(h => h.date);
const scores = sortedHistory.map(h => h.score);

console.log("sortedHistory", sortedHistory);
console.log("dates", dates);
console.log("scores", scores);

let SecondChart = document.getElementById('SecondChart').getContext('2d');


 let chart2=new Chart(SecondChart, {
  type: 'line',
  data: {
    labels: dates,
    datasets: [{
      label: 'Score',
      data: scores,
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

    