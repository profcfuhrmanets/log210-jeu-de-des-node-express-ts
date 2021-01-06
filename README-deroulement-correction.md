# Déroulement des corrections interactives

Les corrections interactives à chaque itération seront réalisées en suivant le processus suivant. Les chargés de laboratoire veillent au bon déroulement de la correction, mais ce sont les étudiants qui doivent prendre l'initiative de suivre ces étapes à la lettre.

## Démonstration

L'objectif de cette partie est de montrer le fonctionnement de l'application au client. Elle suit les étapes suivantes :

1. Un étudiant ouvre son application et le document des exigences, côte à côte
1. L'étudiant sélectionne un cas d'utilisation ou un FURPS et démontre le fonctionnement de chaque étape du scénario principal et des scénarios alterntifs, s'il y a lieu
1. Le chargé de laboratoire mentionne à l'équipe les problèmes à corriger, s'il y a lieu. L'équipe est responsable de prendre des notes
1. Les étapes 2 et 3 sont répétées jusqu'à ce qu'il n'y ait plus de cas d'utilisation ou de FURPS à démontrer

## Évaluation de l'implémentation et des tests

L'objectif de cette partie et de montrer que l'application est conforme aux principes vus en classe et à la conception des étudiants. Elle suit les étapes suivantes :

1. L'étudiant ouvre le code de son application et sa conception, côte à côte
1. À partir du MDD, le chargé de laboratoire vérifie les éléments suivants :

    1. Le code contient uniquement les classes du MDD (si elles sont correctes), à l'exception des contrôleurs, des routeurs et des erreurs.
    1. Les classes du MDD contiennent les propriétés du MDD et la logique de validation du domaine

1. Le chargé de laboratoire sélectionne une opération du DSS. Il valide que :

    1. une méthode avec la même signature est présente dans un contrôleur. Elle doit :

        1. remplir son contrat
        1. suivre les étapes indiquées dans la RDCU
        1. être indépendante du routeur et de l'interface utilisateur

    1. une méthode avec le même nom est présente dans un routeur. Elle doit :

        1. commencer par /api/v1
        1. utiliser le verbe REST approprié
        1. extraire et convertir et valider la présence des paramètres de la requête HTTP
        1. faire un seul appel à la méthode du contrôleur et retourne sa réponse sous forme de JSON avec le code HTTP approprié
        1. intercepter et traiter les erreurs adéquatement
        1. :warning: Cette méthode ne doit pas retourner une vue. Pour ce faire, il faut faire une autre route qui appelle l'opération système.

    1. des tests pour valider le scénario principal, les scénarios alternatifs et la gestion des errreurs de l'opération système sont présents. Ils doivent :

        1. être exécutés pour montrer leur fonctionnement
        1. appeler la route appropriée
        1. valider son code HTTP
        1. valider chacun des champs de la réponse
        1. vérifier l'exécution des contrats d'opération
        1. :warning: En aucun cas les tests ne doivent accéder aux classes de l'application

1. Le chargé de laboratoire mentionne à l'équipe les problèmes à corriger, s'il y a lieu. L'équipe est responsable de prendre des notes
1. Les étapes 3 et 4 sont répétées jusqu'à ce qu'il n'y ait plus d'opérations systèmes à vérifier

1. Le chargé de laboratoire mentionne à l'équipe les points obtenus pour cette itération
