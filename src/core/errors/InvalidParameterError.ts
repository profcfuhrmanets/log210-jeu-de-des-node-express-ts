/**
 * @see Applying UML and Patterns, Chapter A35/F30
 */
export class InvalidParameterError extends Error {
    private _code:number = 400;

    constructor(message:string) {
        super(message);
    }

    get code() {
        return this._code;
    }
}