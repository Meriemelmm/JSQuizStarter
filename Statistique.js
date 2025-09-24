

 
import { history, categories } from './utile.js';

function calculerStats(history, categories) {
    let stats = categories.map(theme => {
        let parties = history.filter(h => h.theme === theme);
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







