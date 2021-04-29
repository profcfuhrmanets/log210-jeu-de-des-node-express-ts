# Énoncé du laboratoire 1 en équipe
[README.md](./README.md)
- [Énoncé du laboratoire #1 en équipe](#énoncé-du-laboratoire-1-en-équipe)
	- [Introduction](#introduction)
	- [Déploiement du système](#déploiement-du-système)
	- [Documents de référence](#documents-de-référence)
		- [Squelettes pour commencer le SGA](#squelettes-pour-commencer-le-sga)
	- [SGB](#sgb)
	- [Application frontale et persistance minimalistes](#application-frontale-et-persistance-minimalistes)
	- [Modalités d’évaluation](#modalités-dévaluation)
		- [Déroulement des itérations](#déroulement-des-itérations)
	- [Processus d’évaluation des laboratoires](#processus-dévaluation-des-laboratoires)
		- [Processus et planification](#processus-et-planification)
		- [Implémentation et tests](#implémentation-et-tests)
	- [Dates de remises](#dates-de-remises)
		- [Correction interactive du rapport de l’itération 1](#correction-interactive-du-rapport-de-litération-1)
	- [Conclusion](#conclusion)
	- [Annexe A](#annexe-a)
## Introduction
Le laboratoire consiste à analyser, concevoir, implémenter et tester une solution pour satisfaire les besoins en ce qui concerne une application cliente. Voir le document des exigences du client.

## Déploiement du système
Le diagramme suivant décrit les différentes parties du système. Nous cherchons à simplifier les aspects techniques qui ne sont pas le sujet principal du cours: framework d’application frontale, services REST, utilisation de bases de données, etc.
  
![deploiement](http://www.plantuml.com/plantuml/png/ZLF1RXCn4BtxAqP5eecKZGG73YYAcX0K5I5Kkd0Y72QxazIgTsniRz8AzNiW5tvYVunPRpPLomLBk_6C9s_UU-Ez215zh2kZmgrcXnuh2F7UaBozBfwT5BPobebZdahayBLIvr572QwmkCKj1SZWNLy62urR-QDIR4k2ixct-q0UAeayqndyL23h10lVPiuPNM3Kbc7ZBKSqjE9AiwxGw11fvCPqDru9eRRNdjOmY5GvWv72SCKKeMPmL8Fq-u0xp0klNVmE663vzL8zz5Jo-n2RtnMrTOBKDbnnAP3ed1SgEeIsmue7-N8sx9bgZkGtM11SspfAGOlRRichLF14G66v-LKB_q16GeDGDOTuOqjhx5PBtddhR6WE1E8lV4HV8IUgWjBXbHXnZQ4bR4tTiGnQz8fvKfUdxM8kzCuXBROnaIhNxQxFWioazc7q67-kEz5X1Fyc6RMd9oSKYt4V4PUfJIBu0F_XwTfw6JZMTydE-R3Zlfp3P3AtpHzXp5OwJgVmuarQegSN8cMVscQJb-Zb-cI5zeMXpD0cJY4NLJ8C9pzWA2ZD6niWT97utse6rUx5-BhKo54IISmpFA-tDmAuQ6bpDxuJgcyEeJOHezWgK3-EBcMgyqdm9ByJ1M6iJkQ8Aqfk72IcsU1uI-0jpAukuVfz_WLOxmXhUAMEHrbfzvobsSlJX_s8kroYcINl7f6Kkf2syZN-1G00)

Il faut que la solution respecte la séparation des couches présentation et domaine. Les opérations système doivent être le mécanisme pour traverser ces deux couches (pas de logique applicative dans la couche présentation). Pour vérifier cet aspect, la figure suivante est utile:
  
![figure-f16.24-web](https://www.plantuml.com/plantuml/png/dLLjRzem4FuCl-BaIHEje86sczH1efMNlaoiLC3sOHsQJ7A09sDdZaFRJVr1-ntxOpid5AX6gtQHeZZEtVdkUPwxl4yiDpRIjXY9gU7n34xXLx6GBw-yNP1yZ5BgqBSwBcSlFXleYRtc1c5mcrYSG-L-qTBAuerbvGaj59-ZpyvGBj2AaEURYVY9VcqVThrHlLZ0Q8fmzRJnKNxgLgFLbzpIXLGwUaP8I6OyHd-iRsXfRoNw4o4bHcLmpr1BRNnsFHCM6GKj0a0XhCBLilvFLiY4MqmDku-a5roEd1qawJX7BvGfWMA-LGbGM5wRPr6oXImW-C1QEWrd2B7vypj1PRaLMh5wZlvtYkFBEcmfgj8RI_4ZHLPV5rTVdPRLuQA_YgB998eO7PdjrrQbN79Yu1h7NrL9yOMOPbNjhCfIsc9ULe6SAW64-ojNE1iEB-6qCmIFny9RrBm8vzmOD1ymzLf691HcdJDLQ0IQIbFBo86wIhAspeR1-c25csG8jH39QCFfuFbEUSshn1kDuN6psu5chz_kz7rMPN3SFJ-zy5ctSp9aGMFOfxiTD9h1kxvEYSA6rwItlXUKEZUnmIJPQNZEm7EMNXOj21uNaXJJcRrrNNIzmZ87SxEAU_yyQMBgRhkSQe_9wG7TZd2sJM6HddEXyB-rbODv-23l3FnO2sN_GRyCMwXuyw_t4tmNmeCNKpSEtf48szZ6fE6DW_-dAq_uxOiIlii6XbESuvYIjvpCNb80V5xkVZnljxiT1itJLg_R8uSyBp8ywLqCuUIurTd665pspY-6bS7v5_fyn08TlqOUafJh9fiiaD2yVeqah0NMvmYbA8NsO42oTc6NSBbxsoaFezUgp7NAHkkNb9xlP2sp6UqX-3cksPK14mdw3waGIQZxUmVbV9EhAH5KEQoEYaKtVhEEMOyVu76S2gGECP0g65EhqioyvpNYoSpnkbQvMGuTOiH5MaiOzlRse9IW960a1wcd3iIlYa1PTiiE6nNlYkzHHVId_0i0 "figure-f16.24-web")


Notez que la logique du routeur (web) est simple : 
* décortiquer l’argument, p. ex. nom, de la requête et 
* appeler une opération système, p. ex. demarrerJeu(nom), qui est une méthode définie dans une classe (le contrôleur GRASP) dans la couche domaine.

[Cette petite présentation](https://log210-cfuhrman.github.io/log210-valider-architecture-couches/#/) vous donne d’autres astuces pour valider votre solution sur le plan de la séparation des couches. 


## Documents de référence
### Squelettes pour commencer le SGA
En plus de ce squelette de démarrage de projet pour Node.js, des exemples de code supplémentaire pour vous aider dans votre projet sont aussi disponibles: : https://github.com/profcfuhrmanets/exemples-ts

> Les solutions impliquant les langages et technologies autres que ceux dans le squelette ne sont pas permises.

Beaucoup de frameworks Web sont faciles à utiliser pour une application simple, mais il n’est pas toujours possible d’appliquer une bonne conception lorsqu’il s’agit d’une application complexe. Pour le respect des aspects importants de la conception (séparation des couches, opérations système avec contrôleur indépendant, possibilité d’avoir des modèles du domaine complexes, etc.), **vous ne pouvez pas utiliser les technologies/solutions suivantes :**
* Framework d’interface utilisateur: Vue.js, React, Angular
* Base de données: SQL et NoSQL

## SGB

Le système de gestion des bordereaux des étudiants (SGB) est un système externe utilisé par votre application pour récupérer les informations sur les enseignants, les cours, les étudiants ainsi que sauvegarder les notes obtenues par les étudiants lors de la réalisation d’un questionnaire ou la correction d’un devoir. **Vous n’avez pas à modifier ce système.**

SGB est une application ayant son propre modèle du domaine (comprenant les concepts comme l’université, les cours, les groupes-cours, les étudiants, les évaluations - [voir l’Annexe A](#annexe-a)). Bien que votre application SGA ne traite que l’aspect pédagogique en ligne, votre analyse de SGA doit comprendre les classes conceptuelles de SGB.

Veuillez noter que l’implémentation proposée de ce système n’a aucun mécanisme de persistance des données. Il possède une interface de configuration permettant de nettoyer le contenu correspondant aux notes ou de modifier la latence de celui-ci.
https://github.com/yvanross/log210-systeme-gestion-bordereau-node-express-ts

L'API de SGB est disponible avec le code source ou à l'adresse suivante: https://cc-yvanross.github.io/8e8addd727f14edfd8c50bd99633c611956f0439/dist/docs/index.html

## Application frontale et persistance minimalistes
Vous devez implémenter une interface utilisateur minimaliste pour la réalisation de chacun des cas d’utilisation. Le but du laboratoire étant d’appliquer la méthodologie d’analyse et de conception enseignée dans LOG210, le squelette à un mécanisme simple pour faire l’application frontale. Il s’agit des templates HTML (pug, etc.) plutôt qu’un framework complexe comme Angular.js, React, Vue, etc. Pour la même raison, les technologies de bases de données ne sont pas proposées pour la solution. Il est possible de réaliser le laboratoire sans passer du temps sur ces aspects que vous verrez plus en profondeur dans d’autres cours spécialisés.

## Modalités d’évaluation
### Déroulement des itérations
Chaque itération nécessite un avancement (évolution) sur le plan des exigences par une valeur minimale indiquée. Seuls les cas d’utilisation de l’itération 1 sont obligatoires. Par la suite, vous pouvez choisir les cas d’utilisation que vous voulez, à condition de **respecter le nombre minimal de points additionnels pour chaque itération.** Vous devez viser au moins **un cas d’utilisation additionnel pour l’itération 2 et un additionnel pour l’itération 3.**

Les tests (S1 - Contrainte de développement: environnement de test) **sont obligatoires à chaque itération.**

Les points associés à chaque exigence sont définis dans la grille de correction.

#### Itération 1 - 3 points

**Obligatoire :**
  - CU01-Gérer cours
  - CU02-Gérer questions

#### Itération 2 - 3 points additionnels

**Suggestion :**
  - CU05-Gérer questionnaire
  - support question type choix multiple
  - support question type mise en correspondance
	
####  Itération 3 - 5 points additionnels

**Suggestion :**
  - CU07-Passer questionnaires
  - support question type choix multiple
  - support question type mise en correspondance

## Processus d’évaluation des laboratoires
Le travail de laboratoire sera évalué en deux volets, soit la partie **processus et planification** et la partie **implémentation et tests.**

Voir la grille de correction pour plus de détails.

| Évaluation                 | Itération 1 | Itération 2 | Itération 3 | Total       |
|:---------------------------|:-----------:|:-----------:|:-----------:|:-----------:|
| Processus et planification | a           | b           | c           | (a + b + c) |
| Implémentation et tests    | -           | -           | d           | d           |
	
###  Processus et planification
Les critères d’évaluation de chaque itération (a, b, c) sont documentés dans les gabarits de chaque remise. Voir les gabarits de planification et de conception dans le squelette pour connaître les artéfacts à remettre.

### Implémentation et tests
Vous recevrez une rétroaction vers la fin de chaque itération, selon le processus itératif et évolutif. Notez que seulement l’évaluation (d) de la dernière itération comptera pour la note. De cette manière, on peut réduire les conséquences négatives des erreurs de planification et des difficultés avec la maîtrise des nouvelles technologies qui sont normales au début du projet.

Cependant, il peut y avoir une pénalité à la fin d’une itération si les critères de la grille de pointage ne sont pas respectés.

Le calcul de la note pour cette évaluation est le suivant :

![](http://www.plantuml.com/plantuml/png/SoWkIImgoKqioU1AiTKeBirLK0h8pymhKOelZi_Kr3Sqv798pKi1oGC0)

![](http://www.plantuml.com/plantuml/png/SoWkIImgAStDuIhEpimhI2nAp5L8IapEJY_AByrBISxFoIzIA2bAp2i6IgNcbN11rEScbcHmnIIdPkP4fzJQ6keP6d0vfEQbW8J13A1v0000)

Si une équipe ne réussit pas à répondre adéquatement à une exigence (fonctionnalité, tests, correspondance aux artéfacts), elle ne sera pas utilisée dans le calcul. 

Pour les valeurs de d dépassant 100%, le maximum est 110%.

## Dates de remises
Notez que le calendrier des séances est différent pour chaque groupe-cours, mais les dates de remises suivent cette planification. Le rapport doit être prêt pour la démo afin de montrer la correspondance entre la conception et la solution.

| Itération | Plan d’itération     | Démo / Rapport  |
| --------: | :-------------------- | :-------------- |
|         1 | Fin séance 3 du labo  | Début séance 6  |
|         2 | Fin séance 7 du labo  | Début séance 9  |
|         3 | Fin séance 10 du labo | Début séance 12 |

### Correction interactive du rapport de l’itération 1
À la deuxième semaine de l’itération 1, vous devrez présenter les artéfacts, l’implémentation et les tests des CU01a et CU01b à votre chargé de laboratoire. Vous recevrez des commentaires pour vous aider avant la remise de votre premier rapport et de votre première démo. Cette activité est informelle, mais votre participation est notée et obligatoire.

## Conclusion
Vous ne devez implémenter que les cas d’utilisation que vous aurez spécifiés dans votre plan d’itération, mais vous pouvez utiliser le document d’exigences complet pour trouver l’information nécessaire à la réalisation de vos cas d’utilisation. 

Assurez-vous que votre implémentation respecte la séparation des couches présentation et domaine.

Prenez note que nous sommes ouverts à toutes suggestions permettant d’apporter des améliorations au laboratoire. Normalement, le document est dans le mode suggestion. Vous pouvez donc modifier le document ou y apporter des commentaires. Nous analyserons chacune de vos suggestions.
Merci de votre participation et bon laboratoire.

## Annexe A

![SGB](http://www.plantuml.com/plantuml/img/dLJBYjj04BphAnhdO0Xu8LSHmcRNZabWan37jrp6CosvsNc8cTQ22Vc0_PFuE_HZQOtNMidub8laxggfBbLRkasi8hVEmiDo2Plrno8zaczKL0uI7opADPBk6IDaf_HZ7KFhZGusHE2eV188FHTxCWWEUHzCEXNe6Zv8o-qmfc9kiMBW097gFOEXY9ef-8A9PTn3CDrVkPiMJ72AF8ghkwAOzrTjLKemstfw4YdYxZW3bM0BRxIkAgtXT_7dJ5hvX5HxvJbpLdv40cXYT_J1bR2Hn_ErTAQL3csCX7Pe3RhTCxU61bcUoEfWy3j6fxn40IEz_vztBqZAi_AloRX4jKGraf4CuwZnAg9OsL2t-CkFzCxDI-7Xs5fst4pEhEyd1YmvOlow--oJZjJqUqobPCs4KM0o9uKhZkv2D1XHjLcshwuPw9wVb6rLhvjvkPuu03uqE4f0PlxCdS649CrIVx91iIWNMvYzcy5YaMyN6PJmhQeamGzZritDsrc_QD48qLq5lO0hrzX0FNmXEkMU1_teZWr63l5qPC8KcWHTmh8xIgmik4oOocJyvJ_U2uY_5-I2ivbJNWulZBoamfJkA82S_CJD0eVC4xmlCc5axBI24hw8OwyifNxwBNeZduX_)


[README.md](./README.md)
