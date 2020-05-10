# Département de génie logiciel et des TI

## LOG210 - Analyse et conception de logiciels

**Titre**

**Itération ?**

|                      |                           |
|----------------------|---------------------------|
|Noms                  |Nom, Prénom, Code permanent|
|Équipe                |YY                         |
|Chargés de laboratoire|                           |

# Grille de correction

> Quelques consignes à respecter pour la présentation du rapport :
> - Tous vos diagrammes doivent être faits avec <https://plantuml.com/fr/>
> - Vous devez intégrer les images dans le rapport (n'utilisez pas des liens vers des fichiers)
> - Mettez à jour la grille de correction pour correspondre à vos cas d'utilisation
> - Mettez à jour la table des matières
> - Retirez les instructions du rapport avant la remise
> - Vous devez exporter ce fichier en format PDF et l'ajouter dans votre repository pour faciliter la correction des chargés de laboratoire

| Modèle du domaine                                       | Pondération | Note |
|---------------------------------------------------------|:-----------:|:----:|
| Tous les cas d'utilisation sont représentés             | 1           |      |
| Tous les concepts nécessaires sont présents et corrects | 5           |      |
| Tous les attributs sont présents dans les modèles       | 2           |      |
| Toutes les associations sont présentes dans les modèles | 2           |      |
| Toutes les cardinalités sont cohérentes                 | 3           |      |
| La notation UML est respectée                           | 2           |      |
| **Total**                                               | 15          |      |

> Copiez la section suivante pour correspondre au nombre de cas d'utilisation du rapport

| CUXX - Nom du cas d'utilisation                        | Pondération | Note |
|--------------------------------------------------------|:-----------:|:----:|
| Les DSS respectent le déroulement du cas d'utilisation | 10          |      |
| La notation UML des DSS est respectée                  | 3           |      |
| Les contrats sont cohérents avec le DSS                | 2           |      |
| Qualité des post-conditions                            | 5           |      |
| Complétude des contrats                                | 5           |      |
| Les RDCU sont cohérents avec le DSS et les contrats    | 6           |      |
| Les justifications GRASP sont pertinentes et complètes | 6           |      |
| La notation UML des RDCU est respectée                 | 3           |      |
| **Total**                                              | 40          |      |

| Déductions                                  | Pondération | Note |
|---------------------------------------------|:-----------:|:----:|
| Qualité du français (-0,25 point par faute) | -5          |      |
| Présentation du rapport                     | -3          |      |
| **Total**                                   | -8          |      |

### Total global : XX%

# Introduction

> Courte introduction pour expliquer à quoi correspond cette itération. Quels sont les objectifs à atteindre et comment on les atteint?

# Modèle du domaine

> Le MDD est cumulatif : vous devez ajouter des classes et associations à chaque itération. Utilisez un code de couleur pour chaque itération afin de faire ressortir les changements. Voir les stéréotypes personnalisés : <https://plantuml.com/fr/class-diagram>

> Vous devez représenter les codes de catégories (classes et associations) dans votre MDD, à partir du document suivant : [https://drive.google.com/file/d/1FOxOf6FUNjyoU4YouLRsSANbfe0ADgeD/view?usp=sharing](https://drive.google.com/file/d/1FOxOf6FUNjyoU4YouLRsSANbfe0ADgeD/view?usp=sharing)\
> **Note :** vous devez utiliser votre courriel <xxx@etsmtl.net> pour accéder au lien

> Intégrez votre MDD ici

> Rédigez le texte explicatif du MDD

## Tableau des responsabilités

> Complétez le tableau des éléments pour expliquer la responsabilité de chaque classe

|Élément|Responsabilité|
|---|---|
|Élément 1|Responsabilité 1|

## Code de couleur
> Précisez le code de couleur pour chaque itération

|Itération|Couleur   |
|:-------:|:--------:|
|1        |Couleur 1 |

# CUXX - Nom du cas d'utilisation

> Copiez cette section pour chaque cas d'utilisation à présenter. Si des opérations se répètent, ajoutez un hyperlien vers le contrat précédent

> Intégrez votre DSS ici

1. operation(param:String, param:Integer)

> Rédigez votre contrat ici. Vous devez le documenter selon le standard vu en classe

**Post-conditions :**
- A
- B

> Intégrez votre RDCU ici. Il doit satisfaire le contrat ainsi que le retour de l'opération système

2. ...
