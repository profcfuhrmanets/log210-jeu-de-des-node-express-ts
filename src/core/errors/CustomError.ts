export abstract class CustomError extends Error {
    abstract get code(): number;

    constructor(message: string) {
        super(message);
    }
}