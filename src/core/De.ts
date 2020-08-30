export class De {
    // classe inspirée de la classe conceptuelle (du MDD)
    private _valeur : number;
    constructor() {
        this.brasser();
    }

    // opérations systèmes
    public brasser() {
        this._valeur = Math.floor(Math.random() * 6 + 1);
    }

    get valeur() {
        return this._valeur;
    }
}