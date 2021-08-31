export default abstract class AbstractError extends Error {
    /**
     * Donne le code HTTP.
     * https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP
     */
    abstract get code(): number;

    constructor(message: string) {
        super(message);
    }
}