export abstract class AuthCustomErrorHandler extends Error {
    abstract statusCode: number;

    constructor(message: string | undefined) {
        super(message);

        Object.setPrototypeOf(this , AuthCustomErrorHandler.prototype)
    }

    abstract serializeErrors(): {message: string, field?: string}[] 
}