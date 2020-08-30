/**
 * @see Applying UML and Patterns, Chapter A35/F30
 */
export class NotFoundError extends Error {
    private _code:number = 404;

    constructor(message:string) {
        super(message);
    }

    get code() {
        return this._code;
    }
}