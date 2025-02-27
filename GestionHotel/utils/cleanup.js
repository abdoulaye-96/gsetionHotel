const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

const cleanupOldFiles = () => {
  const directory = path.join(__dirname, '../uploads/hotels');
  
  cron.schedule('0 0 * * *', () => { // Tous les jours à minuit
    if (!fs.existsSync(directory)) return;

    fs.readdir(directory, (err, files) => {
      if (err) {
        console.error('Erreur de nettoyage:', err);
        return;
      }

      files.forEach(file => {
        const filePath = path.join(directory, file);
        try {
          // Supprime les fichiers de plus de 7 jours
          if (fs.statSync(filePath).mtime < Date.now() - 7 * 86400000) {
            fs.unlinkSync(filePath);
            console.log(`Fichier nettoyé: ${file}`);
          }
        } catch (error) {
          console.error(`Erreur avec ${file}:`, error.message);
        }
      });
    });
  });
};

module.exports = cleanupOldFiles;
