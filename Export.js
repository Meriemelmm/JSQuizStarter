import { HistoryParName } from './Statistique.js';

// Fonction utilitaire pour créer et déclencher un téléchargement
function downloadFile(content, filename, type) {
    const blob = new Blob([content], { type });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

    const keys = Object.keys(data[0]);
    keys.pop();
    const header = keys.join(",");
    const rows = data.map(item => keys.map(k => item[k]).join(",")).join("\n");
    const csv = header + "\n" + rows;
    downloadFile(csv, filename, "text/csv;charset=utf-8;");
}

// Export JSON
function exporterJSON(data, filename = "historique.json") {
    if (!data || data.length === 0) return;

    const filteredData = data.map(({ username, score, date }) => ({ username, score, date }));
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






