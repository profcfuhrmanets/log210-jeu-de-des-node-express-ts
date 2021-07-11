import { CustomError } from "./CustomError";

/**
 * @see Applying UML and Patterns, Chapter A35/F30
 */
export class AlreadyExistsError extends CustomError {
    public readonly code = 400;
}