// Script pour la page "Tu es incroyable"
// Données intégrées pour éviter les problèmes CORS
const raisonsIncroyable = [
    "Tu as un sourire qui illumine la pièce.",
    "Tu es une excellente écoute et toujours là pour les autres.",
    "Tu as un sens de l'humour qui fait rire tout le monde.",
    "Tu es créative et tu vois la beauté là où d'autres ne la voient pas.",
    "Tu es courageuse et tu n'abandonnes jamais.",
    "Tu as un cœur généreux et bienveillant.",
    "Tu es intelligente et tu réfléchis avant d'agir.",
    "Tu es authentique et tu restes fidèle à toi-même.",
    "Tu inspires les autres par ta positivité.",
    "Tu es organisée et tu gères bien les choses.",
    "Tu as un style unique qui te ressemble.",
    "Tu es patiente et tu prends le temps qu'il faut.",
    "Tu es curieuse et tu aimes apprendre de nouvelles choses.",
    "Tu es une amie fidèle et de confiance.",
    "Tu as une énergie positive qui est contagieuse.",
    "Tu es résiliente et tu rebondis toujours.",
    "Tu es attentionnée aux détails qui comptent.",
    "Tu as une façon de voir le monde qui est précieuse.",
    "Tu es déterminée et tu vas jusqu'au bout de tes projets.",
    "Tu es une source de joie pour ceux qui t'entourent."
];

document.addEventListener('DOMContentLoaded', function() {
    const raisonBtn = document.getElementById('raison-btn');
    const raisonMessage = document.getElementById('raison-message');
    const counterValue = document.getElementById('counter-value');
    let counter = 0;

    if (!raisonBtn || !raisonMessage || !counterValue) {
        return;
    }

    // Afficher une raison aléatoire
    raisonBtn.addEventListener('click', function() {
        const randomRaison = raisonsIncroyable[Math.floor(Math.random() * raisonsIncroyable.length)];
        raisonMessage.textContent = randomRaison;
        raisonMessage.style.display = 'flex';
        counter++;
        counterValue.textContent = counter;
    });
});
