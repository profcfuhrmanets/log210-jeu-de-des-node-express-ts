export class JeuDeDes {
    // classe contrôleur GRASP

    constructor() {
    }

    // opérations systèmes
    public static jouer() {
        // retourner deux valeurs aléatoires
        let d1 = Math.floor(Math.random() * 6 + 1);
        let d2 = Math.floor(Math.random() * 6 + 1);
        let résultat = "Premier dé = " + d1 + 
                        " et deuxième dé = " + d2 + 
                        " pour une somme de " + (d1 + d2) + 
                        ". Vous avez " + (d1 + d2 == 7 ? "gagné!!!" : "perdu.");
        return résultat;
    }
}