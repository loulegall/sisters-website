// Script de navigation commun à toutes les pages
// Fonctionne avec GitHub Pages et en local
document.addEventListener('DOMContentLoaded', function() {
    // Déterminer la page actuelle basée sur le chemin
    const pathname = window.location.pathname;
    let currentPage = pathname.split('/').pop() || 'index.html';
    
    // Gérer le cas où on est à la racine (index.html ou juste /)
    if (currentPage === '' || currentPage === 'sisters-website' || pathname.endsWith('/')) {
        currentPage = 'index.html';
    }
    
    // Mettre à jour le lien actif dans la navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('data-page');
        const linkHref = link.getAttribute('href');
        
        // Déterminer si c'est la page active
        let isActive = false;
        
        // Page Feel Good (feel-good.html uniquement maintenant)
        if (currentPage === 'feel-good.html' && linkPage === 'feel-good') {
            isActive = true;
        } 
        // Page Incroyable
        else if (currentPage === 'incroyable.html' && linkPage === 'incroyable') {
            isActive = true;
        } 
        // Page Prédictions
        else if (currentPage === 'predictions.html' && linkPage === 'predictions') {
            isActive = true;
        } 
        // Page Photo
        else if (currentPage === 'photo.html' && linkPage === 'photo') {
            isActive = true;
        }
        
        // Vérifier aussi si le lien correspond à la page actuelle
        if (!isActive && linkHref) {
            const linkPath = linkHref.split('/').pop();
            if (linkPath === currentPage || (linkPath === '' && currentPage === 'index.html')) {
                isActive = true;
            }
        }
        
        if (isActive) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        }
    });
});
