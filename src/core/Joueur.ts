export class Joueur {
    // classe inspirée de la classe conceptuelle (du MDD)
    nom : string;
    constructor(nom : string) {
        this.nom = nom;
    }

    public getNom() {
        return this.nom;
    }
}