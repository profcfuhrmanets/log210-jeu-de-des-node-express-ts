# Squelette pour un API simple dans Node, Express et TypeScript

Ce squelette est proposé pour débuter les projets en LOG210. Il possède les qualités suivantes:

 - il est simple pour les débutants en LOG210
   - il n'y a pas de framework pour le front-end ni pour la persistance, mais ça n'empêche pas d'ajouter ces dimensions.
   - il est seulement [REST niveau 1](https://restfulapi.net/richardson-maturity-model/#level-one), mais ça n'empêche pas de modifier l'API pour qu'il soit [REST niveau 3](https://restfulapi.net/richardson-maturity-model/#level-three). 
 - il est orienté objet (avec TypeScript)
 - il contient des tests pour l'API (avec Mocha)
 - il est documenté selon la méthodologie du cours (Larman)
 - il fonctionne sur Windows 10 (et probablement d'autres systèmes d'exploitation avec Node)

## D'où vient l'idée de base pour ce squelette?

Le code original a été expliqué dans ce [blog post](http://mherman.org/blog/2016/11/05/developing-a-restful-api-with-node-and-typescript/#.WB3zyeErJE4).

Dans le cadre du cours [LOG210 de l'ÉTS](https://www.etsmtl.ca/Programmes-Etudes/1er-cycle/Fiche-de-cours?Sigle=log210), nous utilisons la méthodologie documentée par [Craig Larman dans son livre *Applying UML and Patterns*](http://www.craiglarman.com/wiki/index.php?title=Book_Applying_UML_and_Patterns). Ce livre documente beaucoup de principes avec des exemples en Java, qui n'est plus à la mode comme à l'époque où le livre a été écrit. 

Pourtant, il est encore possible de suivre cette méthodologie avec des technologies modernes comme JavaScript, Node.js, surtout en utilisant TypeScript. Cependant, il n'est pas évident de trouver des exemples de ces technologies qui respectent les éléments clés de la méthodologie de Larman: la séparation des couches (présentation, domaine) avec les opérations système et les classes du domaine. 

Ce squelette montre ces aspects importants, dans le contexte du *Jeu de dés*, qui est l'exemple utilisé dans le chapitre 1 du livre du cours. Nous avons modifié l'exemple pour le rendre un peu plus complexe (plusieurs opérations système). Les diagrammes (faits avec [PlantUML](https://stackoverflow.com/questions/32203610/how-to-integrate-uml-diagrams-into-gitlab-or-github)) sont présentés plus bas dans la partie Artefacts.

L'éditeur [Visual Studio Code](https://code.visualstudio.com/) est très utile mais n'est pas nécessaire avec ce squelette.

## Voulez-vous utiliser ce squelette?

1. Fork/Clone
1. Install dependencies - `npm install`
1. Compile - `npm run build`
1. Compile assets - `gulp assets`
1. Run the development server - `npm start`
1. Test - `npm test`

## Artefacts d'analyse et de conception

### Cas d'utilisation

#### Jouer aux dés.

1. Le Joueur demande à démarrer le jeu en s'identifiant. 
1. Le Joueur demande à lancer les dés. 
1. Le Système affiche le nom du joueur et le résultat du lancer des dés, ainsi que le nombre de lancers et le nombre de fois que le Joueur a gagné. Pour un lancer, si le total est égal à sept, le Joueur a gagné. Dans tous les autres cas, il a perdu. 

*Le Joueur répète l’étape 3 jusqu’à ce qu’il ait fini.*

4. Le Joueur demande à terminer le jeu.
1. ~~Le Système affiche un tableau de bord avec les noms des joueurs et le ratio des parties gagnées (nombre de fois gagné / nombre de lancers).~~

### Diagramme de cas d’utilisation

![Diagramme de cas d'utilisation](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/profcfuhrmanets/log210-jeu-de-des-node-express-ts/master/docs/dcu.puml?cacheinc=1)

### Modèle du domaine

![Diagramme de classe du Modèle du domaine](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/profcfuhrmanets/log210-jeu-de-des-node-express-ts/master/docs/mdd.puml?cacheinc=1)

### Diagramme de séquence système (DSS)

![Diagramme de séquence système](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/profcfuhrmanets/log210-jeu-de-des-node-express-ts/master/docs/dss-jouer.puml?cacheinc=1)

### Réalisations de cas d'utilisation (RDCU)

![Diagramme de séquence, demarrerJeu](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/profcfuhrmanets/log210-jeu-de-des-node-express-ts/master/docs/rdcu-demarrerJeu.puml?cacheinc=1)

![Diagramme de séquence, demarrerJeu](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/profcfuhrmanets/log210-jeu-de-des-node-express-ts/master/docs/rdcu-jouer.puml?cacheinc=1)

![Diagramme de séquence, demarrerJeu](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/profcfuhrmanets/log210-jeu-de-des-node-express-ts/master/docs/rdcu-terminerJeu.puml?cacheinc=1)

