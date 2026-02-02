# Site Feel Good

Un site web simple, rigolo et feel-good créé avec HTML, CSS et JavaScript vanilla.

## 🚀 Démarrage

### Option 1 : Avec Node.js (recommandé)

1. Ouvrez un terminal dans le dossier du projet
2. Lancez le serveur :
   ```bash
   node server.js
   ```
   Ou si vous avez npm installé :
   ```bash
   npm start
   ```

3. Ouvrez votre navigateur et allez sur : **http://localhost:8000**

### Option 2 : Avec Python (si Node.js n'est pas installé)

```bash
# Python 3
python3 -m http.server 8000

# Ou Python 2
python -m SimpleHTTPServer 8000
```

Puis ouvrez : **http://localhost:8000**

### Option 3 : Avec PHP

```bash
php -S localhost:8000
```

## 📁 Structure du projet

```
sisters-website/
├── index.html              # Page d'accueil
├── data/                   # Données JSON
│   ├── messages.json
│   ├── raisons.json
│   ├── predictions.json
│   └── images.json
├── pages/                  # Pages individuelles
│   ├── feel-good.html
│   ├── incroyable.html
│   ├── predictions.html
│   └── photo.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── utils.js
│   │   ├── navigation.js
│   │   ├── feel-good.js
│   │   ├── incroyable.js
│   │   ├── predictions.js
│   │   └── photo.js
│   └── img/                # Images locales
└── server.js               # Serveur HTTP simple
```

## 🌐 Déploiement sur GitHub Pages

Le site est configuré pour fonctionner sur GitHub Pages dans le sous-dossier `/sisters-website`.

### Configuration GitHub Pages

1. Assurez-vous que votre dépôt GitHub contient tous les fichiers du projet
2. Allez dans les **Settings** de votre dépôt GitHub
3. Dans la section **Pages**, configurez :
   - **Source** : `main` (ou `master`) branch
   - **Folder** : `/sisters-website` (ou laissez `/root` si vous avez mis les fichiers à la racine)
4. Votre site sera accessible à : `https://votre-username.github.io/sisters-website/`

### Fichier `.nojekyll`

Le fichier `.nojekyll` est présent pour désactiver Jekyll sur GitHub Pages, ce qui permet de servir les fichiers statiques correctement.

## ⚠️ Important

**Note** : Les données sont maintenant intégrées directement dans les fichiers JavaScript, donc le site fonctionne aussi en ouvrant directement les fichiers HTML (double-clic). Cependant, pour un développement optimal, utilisez un serveur HTTP local.
