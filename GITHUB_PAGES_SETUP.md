# Configuration GitHub Pages - Guide de dépannage

## 🔍 Diagnostic de l'erreur 404

Si vous obtenez une erreur 404 sur `https://loulegall.github.io/sisters-website/`, voici comment résoudre le problème.

## ✅ Configuration correcte

### Option 1 : Dépôt nommé `sisters-website` (recommandé)

Si votre dépôt GitHub s'appelle **`sisters-website`**, alors :

1. **Les fichiers doivent être à la racine du dépôt** (pas dans un sous-dossier)
2. **Configuration GitHub Pages** :
   - Allez dans **Settings** → **Pages**
   - **Source** : `Deploy from a branch`
   - **Branch** : `main` (ou `master`)
   - **Folder** : `/ (root)` ← **IMPORTANT : racine, pas `/sisters-website`**

3. **Structure attendue dans le dépôt** :
```
loulegall/sisters-website/          (racine du dépôt GitHub)
├── index.html                      ← Doit être ici
├── .nojekyll
├── assets/
├── pages/
├── data/
└── ...
```

4. **URL d'accès** : `https://loulegall.github.io/sisters-website/`

### Option 2 : Dépôt avec sous-dossier

Si vous avez mis les fichiers dans un sous-dossier `/sisters-website/` dans votre dépôt :

1. **Configuration GitHub Pages** :
   - **Source** : `Deploy from a branch`
   - **Branch** : `main`
   - **Folder** : `/sisters-website` ← Le sous-dossier

2. **Structure dans le dépôt** :
```
loulegall/votre-repo/              (racine du dépôt)
└── sisters-website/                (sous-dossier)
    ├── index.html
    ├── .nojekyll
    └── ...
```

## 🛠️ Vérifications à faire

1. **Vérifiez que `index.html` existe** :
   - Le fichier doit être présent dans le dépôt
   - Il doit être commité et poussé sur GitHub

2. **Vérifiez le fichier `.nojekyll`** :
   - Ce fichier doit être présent à la racine (ou dans le sous-dossier si vous utilisez Option 2)
   - Il empêche Jekyll de traiter les fichiers

3. **Attendez quelques minutes** :
   - GitHub Pages peut prendre 1-5 minutes pour déployer
   - Videz le cache de votre navigateur (Ctrl+F5 ou Cmd+Shift+R)

4. **Vérifiez les logs de déploiement** :
   - Allez dans **Settings** → **Pages**
   - Regardez les logs de déploiement pour voir s'il y a des erreurs

## 🔧 Solution rapide

Si vous avez toujours une erreur 404, essayez ceci :

1. **Vérifiez l'URL exacte** :
   - `https://loulegall.github.io/sisters-website/` (avec le slash final)
   - `https://loulegall.github.io/sisters-website/index.html`

2. **Vérifiez que tous les fichiers sont commités** :
   ```bash
   git status
   git add .
   git commit -m "Fix GitHub Pages deployment"
   git push
   ```

3. **Forcez un nouveau déploiement** :
   - Dans **Settings** → **Pages**, changez la branche puis remettez-la
   - Ou faites un commit vide : `git commit --allow-empty -m "Trigger deployment"`

## 📝 Checklist

- [ ] Le fichier `index.html` est à la racine du dépôt (ou dans le bon sous-dossier)
- [ ] Le fichier `.nojekyll` est présent
- [ ] Tous les fichiers sont commités et poussés sur GitHub
- [ ] GitHub Pages est activé dans les Settings
- [ ] La bonne branche est sélectionnée
- [ ] Le bon dossier est sélectionné (`/` pour racine ou `/sisters-website` pour sous-dossier)
- [ ] Vous avez attendu quelques minutes après le push

## 🆘 Si ça ne fonctionne toujours pas

1. Vérifiez les logs de déploiement dans GitHub Pages
2. Essayez d'accéder directement à `https://loulegall.github.io/sisters-website/index.html`
3. Vérifiez que le dépôt est public (ou que vous avez GitHub Pro pour les dépôts privés)
4. Contactez le support GitHub si nécessaire
