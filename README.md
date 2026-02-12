# Projet 1 - API Express + TypeScript

API minimale construite avec **Express 5** et **TypeScript**, dans le cadre de l'exercice CI/CD Master 1 (2025-2026).

## Routes

| Méthode | Route     | Réponse                                        |
| ------- | --------- | ---------------------------------------------- |
| GET     | `/`       | `{ "message": "Bienvenue sur l'API projet1" }` |
| GET     | `/health` | `{ "status": "ok" }`                           |

## Stack technique

- **Runtime** : Node.js
- **Framework** : Express 5
- **Langage** : TypeScript (strict mode)
- **Linter** : ESLint + typescript-eslint

## Scripts

```bash
npm install        # Installer les dépendances
npm run build      # Compiler TypeScript -> dist/
npm start          # Lancer le serveur (dist/index.js)
npm run ts         # Vérifier le typage (tsc --noEmit)
npm run lint       # Linter le code avec ESLint
```

## Structure du projet

```
src/
  index.ts          # Point d'entrée de l'API
dist/               # Code compilé (généré par tsc)
eslint.config.js    # Configuration ESLint
tsconfig.json       # Configuration TypeScript
```

## CI/CD

Une pipeline GitHub Actions est prévue pour se déclencher à chaque pull request sur `main`. Elle exécute :

1. Installation des dépendances
2. Vérification TypeScript (`npm run ts`)
3. Lint du code (`npm run lint`)

Objectif : empêcher le merge de code non valide.
