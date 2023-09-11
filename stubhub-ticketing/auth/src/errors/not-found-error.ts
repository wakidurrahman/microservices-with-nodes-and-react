import { AuthCustomErrorHandler } from './auth-custom-error-handler';

export class NotFoundError extends AuthCustomErrorHandler {
  statusCode = 404;
  reason = 'Not Found originalUrl'; 
  constructor() {
    super('Route not found');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: this.reason }];
  }
}