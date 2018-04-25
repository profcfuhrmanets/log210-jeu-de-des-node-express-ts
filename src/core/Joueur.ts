export class Joueur {
    // classe inspirée de la classe conceptuelle (du MDD)
    nom : string;
    nbLancers : number;
    nbLancersGagnes : number;
    constructor(nom : string) {
        this.nom = nom;
        this.nbLancers = 0;
        this.nbLancersGagnes = 0;
    }

    public getNom() {
        return this.nom;
    }

    public getLancers() {
        return this.nbLancers;
    }

    public getLancersGagnes() {
        return this.nbLancersGagnes;
    }

    public lancer() {
        this.nbLancers++;
    }

    public gagner() {
        this.nbLancersGagnes++;
    }
}