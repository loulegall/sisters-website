// Script pour la page Prédictions
// Données intégrées pour éviter les problèmes CORS
const predictionsFoireuses = [
    "Aujourd'hui, tu auras faim à 16h précises. C'est écrit dans les astres.",
    "Tu vas oublier quelque chose d'important... mais tu vas te souvenir juste à temps !",
    "Tu vas rire sans raison apparente dans les prochaines heures. C'est normal.",
    "Un chat va croiser ton chemin et ça va améliorer ta journée.",
    "Tu vas recevoir un message qui va te faire sourire aujourd'hui.",
    "Tu vas avoir envie de quelque chose de sucré. La prédiction est formelle.",
    "Tu vas te souvenir d'un bon souvenir oublié aujourd'hui.",
    "Tu vas faire une découverte surprenante dans les 24h.",
    "Tu vas avoir une idée géniale sous la douche ou avant de dormir.",
    "Tu vas croiser quelqu'un qui va te faire penser à quelque chose d'agréable.",
    "Tu vas avoir envie de danser sur une musique que tu entendras.",
    "Tu vas trouver la solution à un problème qui te tracassait.",
    "Tu vas avoir envie de prendre une photo de quelque chose de joli.",
    "Tu vas faire une pause et te dire 'c'est bien comme ça'.",
    "Tu vas avoir une conversation intéressante avec quelqu'un aujourd'hui."
];

document.addEventListener('DOMContentLoaded', function() {
    const predictionBtn = document.getElementById('prediction-btn');
    const predictionMessage = document.getElementById('prediction-message');

    if (!predictionBtn || !predictionMessage) {
        return;
    }

    // Afficher une prédiction aléatoire
    predictionBtn.addEventListener('click', function() {
        const randomPrediction = predictionsFoireuses[Math.floor(Math.random() * predictionsFoireuses.length)];
        predictionMessage.textContent = randomPrediction;
        predictionMessage.style.display = 'flex';
    });
});
