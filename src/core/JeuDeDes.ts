import { Dé } from "./De";

export class JeuDeDes {
    // classe contrôleur GRASP

    constructor() {
    }

    // opérations systèmes
    public static jouer() {
        // TODO créer deux valeurs aléatoires avec les objets Dé
        let d1 = new Dé();
        let d2 = new Dé();
        let v1 = d1.getValeur();
        let v2 = d2.getValeur();
        let somme = v1 + v2;
        let résultat = "Premier dé = " + v1 + 
                        " et deuxième dé = " + v2 + 
                        " pour une somme de " + somme + 
                        ". Vous avez " + (somme == 7 ? "gagné!!!" : "perdu.");
        return résultat;
    }
}