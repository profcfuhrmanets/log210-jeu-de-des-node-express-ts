import AbstractError from "./abstractError";

/**
 * @see Applying UML and Patterns, Chapter A35/F30
 */
export class NotFoundError extends AbstractError {
    public readonly code = 404;
}