
 import {HistoryParName} from './Statistique.js';

// recuper dom dans file bordhtml:
let exportpdf=document.getElementById("export-pdf");
let exportcsv=document.getElementById("export-csv");    
    let exportjson=document.getElementById("export-json");
    // function export pdf :
  // Attendre que le DOM soit prêt
document.addEventListener('DOMContentLoaded', () => {

    // Récupérer le bouton PDF
    if (!exportpdf) return; // sécurité si le bouton n'existe pas
    if (!exportpdf) return; 

    // Fonction pour générer le PDF
    const generatePDF = () => {
        const allContent = document.querySelector('.all');
        if (!allContent) {
            console.error("Élément '.all' introuvable !");
            return;
        }

        // Options de configuration pour html2pdf
        const options = {
            margin: 1,
            filename: 'historique.pdf',
            
        };

        html2pdf().set(options).from(allContent).save();
    };

    // Écoute du clic sur le bouton
    exportpdf.addEventListener('click', generatePDF);
});

console.log("HistoryParName",HistoryParName);
// fucntion export ccv:

function exporterCSV(HistoryParName, nomFichier = "historique.csv") {
    if (!HistoryParName || HistoryParName.length === 0) return;

    // 1️⃣ Déterminer les colonnes à afficher
    let keys = Object.keys(HistoryParName[0]);
    keys.pop(); // supprime userAnswer si tu ne veux pas l'inclure

    // 2️⃣ Créer l'en-tête CSV
    let header = keys.join(",");

    // 3️⃣ Créer les lignes de données
    let rows = HistoryParName.map(h => keys.map(k => h[k]).join(",")).join("\n");

    // 4️⃣ Combiner l'en-tête et les lignes
    let csv = header + "\n" + rows;

    // 5️⃣ Créer un Blob pour le téléchargement
    let blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

    // 6️⃣ Créer un lien pour déclencher le téléchargement
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = nomFichier;

    // 7️⃣ Simuler le clic sur le lien
    document.body.appendChild(link); // nécessaire pour Firefox
    link.click();
    document.body.removeChild(link);

    // 8️⃣ Libérer l'URL temporaire
    setTimeout(() => URL.revokeObjectURL(link.href), 100);
}

// Exemple d'utilisation avec le bouton

exportcsv.addEventListener("click", () => {
    exporterCSV(HistoryParName);});




    