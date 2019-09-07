# Squelette pour un API simple dans Node, Express et TypeScript

[![Build Status](https://travis-ci.org/profcfuhrmanets/log210-jeu-de-des-node-express-ts.svg?branch=master)](https://travis-ci.org/profcfuhrmanets/log210-jeu-de-des-node-express-ts)
[![Coverage Status](https://coveralls.io/repos/github/profcfuhrmanets/log210-jeu-de-des-node-express-ts/badge.svg?branch=master)](https://coveralls.io/github/profcfuhrmanets/log210-jeu-de-des-node-express-ts?branch=master)

Ce squelette est proposé pour commencer les projets en LOG210. Il possède les qualités suivantes:

 - il est simple pour les débutants en LOG210
   - il n'y a pas de framework pour le front-end ni pour la persistance, mais ça n'empêche pas d'ajouter ces dimensions.
   - il est seulement [REST niveau 1](https://restfulapi.net/richardson-maturity-model/#level-one), mais ça n'empêche pas de modifier l'API pour qu'il soit [REST niveau 3](https://restfulapi.net/richardson-maturity-model/#level-three). 
 - il est orienté objet (avec TypeScript)
 - il contient des tests pour l'API (avec Mocha)
 - il fait une séparation entre les couches présentation et domaine, selon la méthodologie de conception du cours LOG210 (Larman)
 - il fonctionne sur Windows 10 (et probablement d'autres systèmes d'exploitation avec Node)

> **NB**: Il existe également [une variante de ce squelette pour Python/Flask](https://github.com/profcfuhrmanets/log210-jeu-de-des-python-flask).

## D'où vient l'idée de base pour ce squelette?

Le code original a été expliqué dans ce [blog post](http://mherman.org/blog/2016/11/05/developing-a-restful-api-with-node-and-typescript/#.WB3zyeErJE4).

Dans le cadre du cours [LOG210 de l'ÉTS](https://www.etsmtl.ca/Programmes-Etudes/1er-cycle/Fiche-de-cours?Sigle=log210), nous utilisons la méthodologie documentée par [Craig Larman dans son livre *Applying UML and Patterns*](http://www.craiglarman.com/wiki/index.php?title=Book_Applying_UML_and_Patterns). Ce livre documente beaucoup de principes avec des exemples en Java, qui n'est plus à la mode comme à l'époque où le livre a été écrit. 

Pourtant, il est encore possible de suivre cette méthodologie avec des technologies modernes comme JavaScript, Node.js, surtout en utilisant TypeScript. Cependant, il n'est pas évident de trouver des exemples de ces technologies qui respectent les éléments clés de la méthodologie de Larman: la séparation des couches (présentation, domaine) avec les opérations système et les classes du domaine. 

Ce squelette montre ces aspects importants, dans le contexte du *Jeu de dés*, qui est l'exemple utilisé dans le chapitre 1 du livre du cours. Nous avons modifié l'exemple pour le rendre un peu plus complexe (plusieurs opérations système). Les diagrammes (faits avec [PlantUML](https://stackoverflow.com/questions/32203610/how-to-integrate-uml-diagrams-into-gitlab-or-github)) sont présentés plus bas dans la partie Artefacts.

L'éditeur [Visual Studio Code](https://code.visualstudio.com/) est très utile mais n'est pas nécessaire avec ce squelette.

## Voulez-vous utiliser ce squelette?

1. (Créer une fork et) Cloner
1. Installer les dépendences node - `npm install`
1. Compiler - `npm run build`
1. Lancer serveur de développement - `npm start`
1. Accéder à la page template de l'application - `http://localhost:3000`
   <details>
     <summary>Regarder exemple de la fonctionnalité</summary>
 
     <p>
 
     ![GIF animé de la fonctionnalité de l'application Jeu de Dés](https://user-images.githubusercontent.com/7606540/64476621-da3be480-d15e-11e9-8063-f34552e4d91e.gif)

    </p>
   </details>
1. Lancer les tests (pas besoin de lancer le serveur d'abord) - `npm test`

## Développement piloté par les tests (TDD)

   <details>
     <summary>Plus de détails</summary><p>

![États du TDD](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/profcfuhrmanets/log210-jeu-de-des-python-flask/master/docs/tdd.puml&fmt=svg)

Le développement piloté par les tests (Test-Driven Development, TDD) est une façon de développer des logiciels en commençant par les tests. Il y a plusieurs avantages de cette façon de faire et ce squelette supporte la méthodologie.

Le TDD suit un cycle particulier, comme vous pouvez voir à l'image plus haut:

1. Écrire un nouveau test
2. Exécuter le test (qui échouera)
3. Écrire juste assez de code pour faire passer le test
4. Refactoriser le code (et les tests) au besoin et recommencer

> Il y a des tests pour tous les appels de l'API du serveur web, mais on devrait
également faire des tests pour les autres classes (p.ex. au niveau test unitaire 
des classes du domaine).

  </p>
  </details>

## Couplage souhaitable entre la couche Présentation et la couche Domaine

Dans un bon design (selon Larman), on évite que la couche Présentation ait la responsabilité de gérer les évènements système (opérations système). Larman présente dans son livre un exemple avec un JFrame (en Java Swing) à la figure F16.24. On l'adapte ici au contexte d'un service Web dans le framework Express (Node.js):

![Diagramme de séparation des couches avec une opération système envoyée au contrôleur GRASP](http://www.plantuml.com/plantuml/proxy?fmt=svg&src=https://raw.githubusercontent.com/profcfuhrmanets/log210-jeu-de-des-node-express-ts/master/docs/figure-f16.24-web.puml?cacheinc=6)

Dans la figure ci-dessus, l'objet `:JeuDeDes` (qui est un objet en dehors de la couche présentation) reçoit l'opération système `demarrerJeu(nom)` selon le principe GRASP Contrôleur. Ce squelette respecte cette séparation.

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

![Diagramme de cas d'utilisation](http://www.plantuml.com/plantuml/proxy?fmt=svg&src=https://raw.githubusercontent.com/profcfuhrmanets/log210-jeu-de-des-node-express-ts/master/docs/dcu.puml?cacheinc=5)

### Modèle du domaine

![Diagramme de classe du Modèle du domaine](http://www.plantuml.com/plantuml/proxy?fmt=svg&src=https://raw.githubusercontent.com/profcfuhrmanets/log210-jeu-de-des-node-express-ts/master/docs/mdd.puml?cacheinc=5)

### Diagramme de séquence système (DSS)

![Diagramme de séquence système](http://www.plantuml.com/plantuml/proxy?fmt=svg&src=https://raw.githubusercontent.com/profcfuhrmanets/log210-jeu-de-des-node-express-ts/master/docs/dss-jouer.puml?cacheinc=5)

### Réalisations de cas d'utilisation (RDCU)

![Diagramme de séquence, demarrerJeu](http://www.plantuml.com/plantuml/proxy?fmt=svg&src=https://raw.githubusercontent.com/profcfuhrmanets/log210-jeu-de-des-node-express-ts/master/docs/rdcu-demarrerJeu.puml?cacheinc=5)

![Diagramme de séquence, demarrerJeu](http://www.plantuml.com/plantuml/proxy?fmt=svg&src=https://raw.githubusercontent.com/profcfuhrmanets/log210-jeu-de-des-node-express-ts/master/docs/rdcu-jouer.puml?cacheinc=5)

![Diagramme de séquence, demarrerJeu](http://www.plantuml.com/plantuml/proxy?fmt=svg&src=https://raw.githubusercontent.com/profcfuhrmanets/log210-jeu-de-des-node-express-ts/master/docs/rdcu-terminerJeu.puml?cacheinc=5)

