export class De {
    // classe inspirée de la classe conceptuelle (du MDD)
    valeur : number;
    constructor() {
        this.brasser();
    }

    // opérations systèmes
    public brasser() {
        this.valeur = Math.floor(Math.random() * 6 + 1);
    }

    public getValeur() {
        return this.valeur;
    }
}