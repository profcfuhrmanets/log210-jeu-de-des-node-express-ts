# Grille de correction des artéfact d'analyse et de conception
[README.md](./README.md)
- [Grille de correction des artéfact d'analyse et de conception](#grille-de-correction-des-artéfact-danalyse-et-de-conception)
  - [Grille de correction du MDD](#grille-de-correction-du-mdd)
  - [Grille de correction des DSS](#grille-de-correction-des-dss)
  - [Grille de correction des contrats](#grille-de-correction-des-contrats)
  - [Grille de correction des RDCU](#grille-de-correction-des-rdcu)
  - [Critères appliqué à tout les artéfact](#critères-appliqué-à-tout-les-artéfact)

## Grille de correction du MDD
|Modèle du domaine (MDD)|Pondération|Critères|
|-----------------------|:---------:|--------|
|Toutes les classes conceptuelles sont présentes|	3|Toutes les classes sont présentes (3)<br/>Presque toutes les classes sont présentes (2)<br/>Plusieurs classes manquantes (1)<br/>Beaucoup de classes manquantes (0)|
|Tous les attributs et leur type sont présents|	3|Tous les attributs ET leurs types sont présents (3)<br/>Presque tous les attributs ET leurs types sont présents (2)<br/>Plusieurs attributs manquants OU des types sont absents (1)<br/>Plusieurs attributs manquants ET des types sont absents (0)|
|Le vocabulaire du client est respecté|3|Le vocabulaire est respecté (3)<br/>Quelques erreurs de vocabulaire (1,5)<br/>Plusieurs erreurs de vocabulaire (0)|
|Toutes les associations sont présentes et descriptives|3|Toutes les associations sont présentes ET descriptives (3)<br/>La plupart des associations sont présentes ET descriptives (2)<br/>Plusieurs associations sont absentes OU ne sont pas descriptives (1)<br/>La majorité des associations sont absentes OU ne sont pas descriptives (0)|
|Toutes les cardinalités sont cohérentes|3|Toutes les cardinalités sont correctes (3)<br/>Quelques erreurs (1,5)<br/>Beaucoup d'erreurs (0)|
|Présence de classes, d'attributs logiciels, de méthodes ou de visibilités|-3|Peu d'éléments sont présents (-1)<br/>Quelques éléments sont présents (-2)<br/>Plusieurs éléments sont présents (-3)|
|Présence d'attributs ou d'associations hors de portée|-3|Peu d'éléments sont présents (-1)<br/>Quelques éléments sont présents (-2)<br/>Plusieurs éléments sont présents (-3)|
|Non-respect de la notation UML|-3|Peu d'erreurs (-1)<br/>Quelques erreurs (-2)<br />Beaucoup d'erreurs (-3)|
|Sous-total|	15| 	|
			
  
## Grille de correction des DSS
  
|Diagrammes de séquence système (DSS)|	Pondération	|	Critères|
|------|:-----:|----|
|Les opérations système sont bien nommées et ont les bons paramètres|	2|Toutes les opérations système sont bien nommées ET ont les bons paramètres (2)<br/>Presque toutes les opérations système sont bien nommées ET ont les bons paramètres (1)<br/>La plupart des opérations système sont bien nommées ET ont les bons paramètres (0)|
|Toutes les opérations système et leurs retours sont présents et corrects|	6|Toutes les opérations système sont présentes ET leur retours sont corrects (6)<br/>Toutes les opérations système sont présentes ET la plupart de leurs retours sont corrects (5)<br/>Presque toutes les opérations système sont présentes ET leurs retours sont corrects (3)<br/>Presque toutes les opérations système sont présentes OU la plupart des retours sont corrects (2)<br/>Quelques opérations système sont présentes OU quelques retours sont corrects (1)<br/>Peu d'opérations système sont présentes ET peu de retours sont corrects (0)|
|L'ordre du cas d'utilisation est respecté|	2|Aucune erreur (2)<br/>Une erreur (1)<br/>Plus d'une erreur (0)|
|Absence de titres|	-1|		Au moins un titre est absent (-1)|
|Présence de types complexes ou références à des technologies|	-2|	Présence de types complexes OU référence à des technologies (-1)<br/>Présence de types complexes ET référence à des technologies (-2)|
|Non-respect de la notation UML|	-3| Peu d'erreurs (-1)<br/>Quelques erreurs (-2)<br/>Beaucoup d'erreurs (-3)|
|Sous-total|	10|	 |	
			

## Grille de correction des contrats
|Contrats|	Pondération|Critères|
|---------|:------------:|--------|
|Les contrats documentent tous les changements permanents au système|	3| Tous les changements sont documentés (3)<br/>Presques tous les changements sont documentés (2)<br/>La plupart des changements sont documentés (1)<br/>Peu de changement sont documentés (0)|
|Les postconditions respectent le vocabulaire vu en classe et ont une bonne forme	|2| La forme ET le vocabulaire sont respectés (2)<br/>Peu d'erreurs dans la forme OU dans le vocabulaire (1)<br/>Plusieurs erreurs dans la forme OU dans le vocabulaire (0)|
|Non-respect de la signature des opérations système|	-2| Une erreur (-1)<br/>Plus d'une erreur (-2)|
|Postconditions hors de portée (ne documentent pas de changements permanents, présentes dans des méthodes qui ne modifient pas le système)|	-2	|	"Peu de postconditions hors de portée (-1)<br/>Quelques postconditions hors de portée (-2)|
|Référence à des classes ou attributs absents du MDD|	-2	| Une ou deux référence à des éléments absents (-1)<br/>Plus de deux références à des éléments absents (-2)|
|Sous-total|	5|	|
			

## Grille de correction des RDCU

|RDCU|Pondération|Critères|
|----|:-----------:|--------|			
|Les RDCU satisfont le retour de l'opération système|	5| Tous les RDCU satisfont le retour de l'opération système (5)<br/>Preques tous les RDCU satisfont le retour de l'opération système (4)<br/>La plupart des RDCU satisfont le retour de l'opération système (2)<br/>Peu de RDCU satisfont le retour de l'opération système (0)|
|Les RDCU satisfont les contrats d'opération	|5| Tous les RDCU satisfont les contrats d'opération (5)<br/>Presque tous les RDCU satisfont les contrats d'opération (4)<br/>La plupart des RDCU satisfont les contrats d'opération (2)<br/>Peu de RDCU satisfont les contrats d'opération (0)|
|Les justifications GRASP sont pertinentes et complètes	|5| Toutes les justifications sont pertinentes ET complètes (5)<br/>Presque toutes les justifications sont pertinentes ET complètes (4)<br/>La plupart des justifications sont pertinentes OU complètes (2)<br/>Peu de justifications sont pertinentes OU complètes (0)|
|Non-respect de la signature des opérations système|	-2| Une erreur (-1)<br/>Plus d'une erreur (-2)|
|Références à des technologies ou à des éléments absentes du MDD|	-2| Peu de références (-1)<br/>Quelques références (-2)|
|Non-respect de la notation UML	|-5|		Quelques erreurs (-1)<br/>Beaucoup d'erreurs (-3)
Énormément d'erreurs (-5)|
|Sous-total	|15|	|	
			

## Critères appliqué à tout les artéfact
|Déductions|	Pondération	|Critères|
|----------|:--------------:|--------|
|Mauvaise qualité du français|	-5| Quelques fautes (-1)<br/>Beaucoup de fautes (-3)<br/>Énormément de fautes (-5)|
|Mauvaise présentation du rapport|	-3| Peu d'erreurs de présentation (-1)<br/>Quelques erreurs de présentation OU absence du rapport en PDF (-2)<br/>Quelques erreurs de présentation ET absence du rapport en PDF (-3)|
|Pénalité pour refus de correction par le chargé de laboratoire|	-11,25|Refus (-25%)|
|Sous-total|	-19,25| 	|	


<u>Pénalité pour refus de correction par le chargé de laboratoire</u>: 
Un travail qui contient trop d’erreurs fréquentes peut être refusé par le chargé de laboratoire. L'équipe peut reprendre le travail avec une pénalité de 25%. Vérifiez attentivement la grille de correction et les notes de cours.		<u>**Ce paramêtre d'évaluation s'applique à tous les travaux remis pour correction.**</u>

**Grand total :** 45
			
