import { Dé } from "./De";
import { Joueur } from "./Joueur";

export class JeuDeDes {
    // classe contrôleur GRASP

    // map des Joueurs
    joueurMap: Map<string, Joueur>;

    constructor() {
        console.log("Initialiser JeuDeDes");
        this.joueurMap = new Map<string, Joueur>();
    }

    /**
     *  opérations systèmes
     */

    public demarrerJeu(nom: string) {

        if (this.joueurMap.get(nom) !== undefined) {
            // joueur existe déjà
            throw new Error("Joueur '" + nom + "' existe déjà.");
        }

        // 
        let joueur = new Joueur(nom);
        this.joueurMap.set(nom, joueur);

        this.joueurMap.forEach((value: Joueur, key: string) => {
            console.log(key, value);
        });

        return joueur;
    }



    public jouer(nom: string) {
        if (this.joueurMap.get(nom) === undefined) {
            // joueur n'existe pas
            throw new Error("Joueur '" + nom + "' n'existe pas.");
        }

        let d1 = new Dé();
        let d2 = new Dé();
        let v1 = d1.getValeur();
        let v2 = d2.getValeur();
        let somme = v1 + v2;
        let résultat = {
            nom: nom,
            v1: v1,
            v2: v2,
            somme: somme,
            message: "Vous avez " + (somme == 7 ? "gagné!!!" : "perdu.")
        };
        return résultat;
    }
}