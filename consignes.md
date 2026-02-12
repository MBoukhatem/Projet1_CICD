EXERCICE CI/CD MASTER 1 2025_2026


1.Créer une API minimale en Node js avec le framework de votre choix (Express, Fastify etc…)
l’api doit avoir au moins une route (“/”, “health” etc…) qui renvoie une réponse JSON

2. mettre en place un linter 
installer et configurez un outil de lint (ESLint)
Ajouter un script npm “lint”

3. Ajouter typescript au projet 
installer et configurer typescript
le projet doit compiler sans erreur 
Ajouter un script npm “ts”

4. versionner le projet sur un repo git  
deux branches : develop / staging, main

5. Mettre en place une pipeline CI avec github Actions
Créer un workflow github Actions 
qui se déclenche à chaque pull request sur main 
le workflow doit 
installer les dépendances
vérifier TS 
Linter le code 
Objectif : empêcher le merge du code non valide 

BONUS : 

Dockeriser l’API
Créer un test unitaire (avec Jest) et l’implémenter dans le workflow github Actions

