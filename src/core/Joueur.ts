export class Joueur {
    // classe inspirée de la classe conceptuelle (du MDD)
    private _nom : string;
    private _nbLancers : number;
    private _nbLancersGagnes : number;
    constructor(nom : string) {
        this._nom = nom;
        this._nbLancers = 0; 
        this._nbLancersGagnes = 0;
    }

    get nom() {
        return this._nom;
    }

    get lancers() {
        return this._nbLancers;
    }

    get lancersGagnes() {
        return this._nbLancersGagnes;
    }

    public lancer() {
        this._nbLancers++;
    }

    public gagner() {
        this._nbLancersGagnes++;
    }
}