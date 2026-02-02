// Utilitaires pour gérer les chemins relatifs
// Fonctionne avec GitHub Pages dans un sous-dossier et en local

// Détermine le chemin de base selon la page actuelle
function getDataPath() {
    const currentPath = window.location.pathname;
    
    // Si on est dans le dossier pages/, on remonte d'un niveau
    if (currentPath.includes('/pages/')) {
        return '../data/';
    }
    // Sinon, on est à la racine (fonctionne aussi avec GitHub Pages)
    return 'data/';
}

// Détermine le chemin vers le dossier des images selon la page actuelle
function getImagesPath() {
    const currentPath = window.location.pathname;
    
    // Si on est dans le dossier pages/, on remonte d'un niveau
    if (currentPath.includes('/pages/')) {
        return '../assets/img/';
    }
    // Sinon, on est à la racine (fonctionne aussi avec GitHub Pages)
    return 'assets/img/';
}
