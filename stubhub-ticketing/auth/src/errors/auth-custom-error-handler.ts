export abstract class AuthCustomErrorHandler extends Error {
    abstract statusCode: number;

    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this , AuthCustomErrorHandler.prototype)
    }

    abstract serializeErrors(): {message: string, field?: string}[] 
}