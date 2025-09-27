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

