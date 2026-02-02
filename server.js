// Serveur HTTP simple pour servir les fichiers statiques
// Utilisation : node server.js
// Puis ouvrir http://localhost:8000 dans le navigateur

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8000;

// Types MIME pour les différents types de fichiers
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    // Nettoyer l'URL (enlever les paramètres de requête)
    let filePath = '.' + req.url.split('?')[0];
    
    // Si c'est la racine, servir index.html
    if (filePath === './') {
        filePath = './index.html';
    }

    // Obtenir l'extension du fichier
    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // Lire le fichier
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                // Fichier non trouvé
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - Fichier non trouvé</h1>', 'utf-8');
            } else {
                // Erreur serveur
                res.writeHead(500);
                res.end(`Erreur serveur: ${error.code}`, 'utf-8');
            }
        } else {
            // Succès
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, '127.0.0.1', () => {
    console.log(`\n✨ Serveur démarré avec succès !\n`);
    console.log(`📍 Accédez au site via :`);
    console.log(`   - http://localhost:${PORT}`);
    console.log(`   - http://127.0.0.1:${PORT}\n`);
});

server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        console.error(`\n❌ Erreur : Le port ${PORT} est déjà utilisé.\n`);
        console.log('Essayez de fermer l\'autre application ou utilisez un autre port.\n');
    } else {
        console.error('Erreur serveur:', error);
    }
    process.exit(1);
});
