// Script de navigation commun à toutes les pages
document.addEventListener('DOMContentLoaded', function() {
    // Déterminer la page actuelle basée sur le nom du fichier
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Mettre à jour le lien actif dans la navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('data-page');
        
        // Déterminer si c'est la page active
        let isActive = false;
        if (currentPage === 'index.html' && linkPage === 'feel-good') {
            isActive = true;
        } else if (currentPage === 'feel-good.html' && linkPage === 'feel-good') {
            isActive = true;
        } else if (currentPage === 'incroyable.html' && linkPage === 'incroyable') {
            isActive = true;
        } else if (currentPage === 'predictions.html' && linkPage === 'predictions') {
            isActive = true;
        } else if (currentPage === 'photo.html' && linkPage === 'photo') {
            isActive = true;
        }
        
        if (isActive) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
