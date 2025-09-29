import { HistoryParName } from './Statistique.js';

// Fonction utilitaire pour créer et  start  un téléchargement
function downloadFile(content, filename, type) {
//    create   blob et un link pour le telechrge
   
    const blob = new Blob([content], { type });
    const link = document.createElement("a");
    // crée un fichier téléchargeable dans le navigateur.
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    // supprimer le lien après le téléchargement
    document.body.removeChild(link);
    // libérer l'URL créée
    // pour éviter les fuites de mémoire
    setTimeout(() => URL.revokeObjectURL(link.href), 100);
}

// Export PDF
function setupPDFExport(buttonId) {
    const btn = document.querySelector(`#${buttonId}`);
    if (!btn) return;

    btn.addEventListener("click", () => {
        const allContent = document.querySelector('.all');
        if (!allContent) {
            console.error("Élément '.all' introuvable !");
            return;
        }

        const options = {
            margin: 1,
            filename: 'historique.pdf'
        };

        html2pdf().set(options).from(allContent).save();
    });
}

// Export CSV
function exporterCSV(data, filename = "historique.csv") {
    if (!data || data.length === 0) return;
// recupere keys et formate les données a string pour ccv
    const keys = Object.keys(data[0]);
    keys.pop();
    // devient commen score,theme,date:
    const header = keys.join(",");
  
    const rows = data.map(item => keys.map(k => item[k]).join(",")).join("\n");
//   concatenation header + rows:
    const csv = header + "\n" + rows;
    // 
    downloadFile(csv, filename, "text/csv;charset=utf-8;");
}

// Export JSON
function exporterJSON(data, filename = "historique.json") {
    if (!data || data.length === 0) return;

    const filteredData = data.map(({ username, score, date }) => ({ username, score, date }));
    console.log("filtred",filteredData);
    // null:non filtrage, 2:espace:
    const jsonString = JSON.stringify(filteredData, null, 2);
    downloadFile(jsonString, filename, "application/json;charset=utf-8;");
}

// Attacher les événements après le chargement du DOM
document.addEventListener("DOMContentLoaded", () => {
    setupPDFExport("export-pdf");

    const exportCsvBtn = document.querySelector("#export-csv");
    if (exportCsvBtn) exportCsvBtn.addEventListener("click", () => exporterCSV(HistoryParName));

    const exportJsonBtn = document.querySelector("#export-json");
    if (exportJsonBtn) exportJsonBtn.addEventListener("click", () => exporterJSON(HistoryParName));
});






