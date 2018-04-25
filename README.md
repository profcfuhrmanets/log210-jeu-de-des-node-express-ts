# Squelette pour un API simple dans Node, Express et TypeScript

## D'où vient l'idée de base pour ce squelette?

Le code original a été expliqué dans ce [blog post](http://mherman.org/blog/2016/11/05/developing-a-restful-api-with-node-and-typescript/#.WB3zyeErJE4).

Pour le cours [LOG210](https://www.etsmtl.ca/Programmes-Etudes/1er-cycle/Fiche-de-cours?Sigle=log210), nous utilisons la méthodologie documentée par [Craig Larman dans son livre Applying UML and Patterns](http://www.craiglarman.com/wiki/index.php?title=Book_Applying_UML_and_Patterns). Ce livre explique plusieurs exemples avec la technologie Java, qui n'est plus à la mode comme à l'époque où le livre a été écrit. 

Pourtant, il est encore possible de suivre cette méthodologie avec des technologies modernes comme JavaScript, Node.js, surtout en utilisant TypeScript. Cependant, il n'est pas évident de trouver des exemples qui respectent les éléments clés de la méthodologie: la séparation des couches (présentation, domaine) avec les opérations système et les classes du domaine. 

Ce squelette montre ces aspects importants, dans un contexte du *Jeu de dés*, qui est l'exemple utilisé dans le chapitre 1 du livre. Nous avons modifié l'exemple pour le rendre plus complexe (plusieurs opérations système). Les diagrammes sont expliqués plus bas.

## Voulez-vous utiliser ce squelette?

1. Fork/Clone
1. Install dependencies - `npm install`
1. Compile - `npm run build`
1. Compile assets - `gulp assets`
1. Run the development server - `npm start`
1. Test - `npm test`

## Artefacts

### Cas d'utilisation

#### Jouer aux dés.

1. Le Joueur demande à démarrer le jeu en s'identifiant. 
1. Le Joueur demande à lancer les dés. 
1. Le Système affiche le nom du joueur et le résultat du lancer des dés, ainsi que le nombre de lancers et le nombre de fois que le Joueur a gagné. Pour un lancer, si le total est égal à sept, le Joueur a gagné. Dans tous les autres cas, il a perdu. 
     Le Joueur répète l’étape 3 jusqu’à ce qu’il ait fini.
1. Le Joueur demande à terminer le jeu.
1. ~~Le Système affiche un tableau de bord avec les noms des joueurs et le ratio des parties gagnées (nombre de fois gagné / nombre de lancers).~~

### Diagramme de cas d’utilisation

![Diagramme de cas d'utilisation](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/profcfuhrmanets/log210-jeu-de-des-node-express-ts/master/docs/dcu.puml)

### Modèle du domaine

![Diagramme de classe du Modèle du domaine](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/profcfuhrmanets/log210-jeu-de-des-node-express-ts/master/docs/mdd.puml)

### Diagramme de séquence système (DSS)

![Diagramme de séquence système](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/profcfuhrmanets/log210-jeu-de-des-node-express-ts/master/docs/dss-jouer.puml)

### Réalisations de cas d'utilisation (RDCU)

![Diagramme de séquence, demarrerJeu](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/profcfuhrmanets/log210-jeu-de-des-node-express-ts/master/docs/rdcu-demarrerJeu.puml)
