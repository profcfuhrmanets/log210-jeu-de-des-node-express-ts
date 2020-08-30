# Rapport itération X - équipe Y

## LOG210-année-session-groupe (ex. LOG210-2020-été-g01)

### Coéquipiers

- Nom, Prénom, Code universel
- Nom, Prénom, Code universel

### Chargés de laboratoire

- Nom, Prénom
- Nom, Prénom

# Grille de correction

<details><summary>Cliquez ici pour lire les consignes obligatoires</summary>
<p>

- Tous vos diagrammes doivent être faits avec <https://plantuml.com/fr/>
- Les diagrammes doivent être visibles dans ce rapport
- Mettez à jour la grille de correction pour correspondre à la portée de l'itération
- Supprimer les textes explicatifs du gabarit (sauf ces consignes-ci)
- Vous devez exporter ce fichier en format PDF et l'ajouter dans votre dépôt
</p>
</details>

> ⚠️ **Un travail qui contient trop d’erreurs fréquentes peut être refusé par le chargé de laboratoire. L'équipe peut reprendre le travail avec une pénalité de 25%. Vérifiez attentivement la grille de correction et les notes de cours**

| Modèle du domaine                                       | Pondération | Note |
|---------------------------------------------------------|:-----------:|:----:|
| Tous les cas d'utilisation sont représentés             | 1           |      |
| Toutes les classes conceptuelles nécessaires sont présentes et correctes | 5           |      |
| Tous les attributs sont présents       | 3           |      |
| Toutes les associations sont présentes | 3           |      |
| Toutes les cardinalités sont cohérentes                 | 3           |      |
| La notation UML n'est pas respectée                           | jusqu'à -5           |      |
| Classes/associations/attributs hors de portée | jusqu'à -5           |      |
| **Total**                                               | 15          |      |

> Copiez la section suivante pour correspondre au nombre de cas d'utilisation du rapport

| CUXX - Nom du cas d'utilisation                        | Pondération | Note |
|--------------------------------------------------------|:-----------:|:----:|
| Les DSS respectent le déroulement du cas d'utilisation | 10          |      |
| Les contrats sont cohérents avec le DSS                | 2           |      |
| Qualité des post-conditions:<br>bonne forme, <br>vocabulaire provenant du MDD                          | 4           |      |
| Complétude des contrats                                | 4           |      |
| Les RDCU sont cohérents avec le DSS et les contrats    | 5           |      |
| Les justifications GRASP sont pertinentes et complètes | 5           |      |
| **Total**                                              | 30          |      |

| Déductions                                  | Pondération | Note |
|---------------------------------------------|:-----------:|:----:|
| La notation UML n'est pas respectée (DSS/RDCU)                 | -5          |      |
| Mauvaise qualité du français: <br>quelques fautes (-1), <br>beaucoup de fautes (-3), <br>énormément de fautes (-5) | -5          |      |
| Mauvaise présentation du rapport                     | -3          |      |
| **Total**                                   | -13          |      |

### Total global : XX%

# Introduction

> Courte introduction pour expliquer à quoi correspond cette itération. Quels sont les objectifs à atteindre et comment les atteint-on?

# Modèle du domaine

> Le MDD est cumulatif : vous devez y ajouter des éléments à chaque itération (ou corriger les erreurs), selon la portée (et votre meilleure compréhension du problème) visée par votre solution. Utilisez une légende dans le MDD pour indiquer la couleur de chaque itération afin de faire ressortir les changements. Voir les stéréotypes personnalisés : <https://plantuml.com/fr/class-diagram> et [comment faire une légende avec couleurs en PlantUML](https://stackoverflow.com/questions/30999290/how-to-generate-a-legend-with-colors-in-plantuml).

> Intégrez votre MDD ici (le MDD doit être visible dans ce rapport)

# CUXX - Nom du cas d'utilisation

> Copiez cette section pour chaque cas d'utilisation à présenter. 

## DSS CUXX - Nom du cas d'utilisation

> Intégrez votre DSS ici

> Pour chaque opération système dans le DSS, il y a un contrat d'opération et une RDCU

### `operationX(nom: String, toto:Integer)`

> Si une opération a déjà été documentée dans un autre DSS, ajoutez un hyperlien vers le contrat précédent.

**Contrat d'opération**

> Rédigez le contrat d'opération pour `operationX(...)` ici. Vous devez le documenter selon le standard vu dans les notes de cours (pas de préconditions!!).

**RDCU**

> Intégrez la RDCU pour `operationX(...)` ici. Il doit satisfaire le contrat ainsi que le retour des informations, le cas échéant.
