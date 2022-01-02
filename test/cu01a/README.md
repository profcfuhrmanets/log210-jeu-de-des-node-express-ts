# Conseils pour les tests

Pour les équipes qui ne sont pas habituées à faire des tests, on vous suggère d'utiliser la structure de test de ce répertoire.

On vous propose d'utiliser un répertoire de test par cas d'utilisation.

Vous devez commencer par faire des tests à la portée des classes du modèle du domaine.
Insérez vos tests dans le fichier model.test.ts.
Réalisez l'implémentation en mode TDD en commençant par les classes ayant le moins de dépendances vers d'autres classes.

Ensuite, vous complétez avec les tests du contrôleur correspondant au cas d'utilisation.

Ensuite, vous réalisez les tests des routes correspondant à chaque appel du contrôleur.

C'est un processus simple, mais qui vous aidera grandement si vous n'êtes pas familier avec les tests.

Chaque fichier contient un exemple de code de test.

Il y a un répertoire Cypress dans le répertoire principal.
Celui-ci permet d'ajouter des tests d'interfaces utilisateur (aussi nommés tests de bout en bout ou «end-to-end tests»).
Ce type de test est facultatif, mais très utile.
