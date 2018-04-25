import { De } from "./De";
import { Joueur } from "./Joueur";

export class JeuDeDes {
    // classe contrôleur GRASP

    // map des Joueurs
    joueurMap: Map<string, Joueur>;
    d1 : De;
    d2 : De;

    constructor() {
        console.log("Initialiser JeuDeDes");
        this.joueurMap = new Map<string, Joueur>();
        this.d1 = new De();
        this.d2 = new De();        
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
        let joueur = this.joueurMap.get(nom);
        if (joueur === undefined) {
            // joueur n'existe pas
            throw new Error("Joueur '" + nom + "' n'existe pas.");
        }
        this.d1.brasser();
        this.d1.brasser();
        let v1 = this.d1.getValeur();
        let v2 = this.d2.getValeur();
        let somme = v1 + v2;
        joueur.lancer();
        if (somme == 7) joueur.gagner();
        let résultat = {
            nom: nom,
            somme: somme,
            lancers: joueur.getLancers(),
            reussites: joueur.getLancersGagnes(),
            v1: v1,
            v2: v2,
            message: "Vous avez " + (somme == 7 ? "gagné!!!" : "perdu.")
        };
        return résultat;
    }

    public terminerJeu(nom: string) {
        if (this.joueurMap.get(nom) === undefined) {
            // joueur n'existe pas
            throw new Error("Joueur '" + nom + "' n'existe pas.");
        }
        this.joueurMap.delete(nom);
        let résultat = {
            nom: nom,
            message: "Merci d'avoir joué."
        };
        return résultat;
    }


}