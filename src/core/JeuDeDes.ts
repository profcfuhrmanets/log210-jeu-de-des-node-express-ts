import { De } from "./de";
import { Joueur } from "./joueur";
import { NotFoundError } from "./errors/notFoundError";
import { AlreadyExistsError } from "./errors/alreadyExistsError";

export class JeuDeDes {
    // classe contrôleur GRASP, car JeuDeDes est un objet racine dans le MDD

    // map des Joueurs
    private _joueurs: Map<string, Joueur>;
    private _d1: De;
    private _d2: De;

    constructor() {
        this._joueurs = new Map<string, Joueur>();
        this._d1 = new De();
        this._d2 = new De();
    }

    /**
     *  opérations systèmes (du DSS), responsabilités données aux contrôleur GRASP
     */

    public demarrerJeu(nom: string): string {

        if (this._joueurs.get(nom)) {
            throw new AlreadyExistsError(`Joueur '${nom}' existe déjà.`);
        }

        const joueur = new Joueur(nom);
        this._joueurs.set(nom, joueur);
        // ne pas retourner l'objet de la couche domaine
        return JSON.stringify(joueur);
    }

    public jouer(nom: string): string {
        const joueur = this._joueurs.get(nom);
        if (!joueur) {
            throw new NotFoundError(`Joueur '${nom}' n'existe pas.`);
        }
        const somme = this.brasser()
        joueur.lancer();
        const gagne = somme === 7;
        if (gagne) joueur.gagner();
        const resultat = {
            nom: nom,
            somme: somme,
            lancers: joueur.lancers,
            reussites: joueur.lancersGagnes,
            v1: this._d1.valeur,
            v2: this._d2.valeur,
            message: `Vous avez ${(gagne ? "gagné!!!" : "perdu.")}`
        };
        // ne pas retourner l'objet de la couche domaine
        return JSON.stringify(resultat);
    }

    public terminerJeu(nom: string): string {
        if (!this._joueurs.get(nom)) {
            throw new NotFoundError(`Joueur '${nom}' n'existe pas.`);
        }
        this._joueurs.delete(nom);
        const resultat = {
            nom: nom,
            message: "Merci d'avoir joué."
        };
        // ne pas retourner l'objet de la couche domaine
        return JSON.stringify(resultat);
    }

    // d'autres méthodes (des RDCU)
    brasser() {
        this._d1.brasser();
        this._d2.brasser();
        const v1 = this._d1.valeur;
        const v2 = this._d2.valeur;
        const somme = v1 + v2;
        return somme;
    }

    public get joueurs() {
        return JSON.stringify(Array.from(this._joueurs.values()));
    }

}