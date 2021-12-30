Pour les équipes qui ne sont pas habituées à faire des tests, je vous suggère d'utiliser la structure de test de ce répertoire.

Je vous propose d'utiliser un répertoire de test par cas d'utilisation.

Vous devez commencer par faire des tests au niveau des classes du modèle du domaine. Insérez vos tests dans le fichier model.test.ts. Réaliser l'implémentation en mode TDD en commençant par les classes ayant le moins de couplage.

Ensuite, vous complétez avec les tests du contrôleur correspondant au cas d'utilisation.

Ensuite, vous réalisez les tests des routes correspondant à chaque appel du contrôleur.

C'est un processus simple, mais qui vous aidera grandement si vous n'êtes pas familier avec les tests.

Chaque fichier contient un exemple de code de test.

J'ai aussi ajouté un répertoire cypress dans le répertoire principal. Celui-ci permet d'ajouter des tests d'interfaces usager.  Ce type de test est optionnel.