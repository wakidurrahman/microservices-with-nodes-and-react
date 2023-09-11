import { AuthCustomErrorHandler } from './auth-custom-error-handler';

export class DatabaseConnectionError extends AuthCustomErrorHandler {
  statusCode = 500;
  reason = 'Error connection to database';
  constructor() {
    super('Error connection to DB');

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: this.reason }];
  }
}
