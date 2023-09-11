import { NextFunction, Request, Response } from 'express';
import { AuthCustomErrorHandler } from '../errors/auth-custom-error-handler';

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    const error = new Error(`Not Found -${req.originalUrl}`);
    res.status(404);
    next(error);
};

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AuthCustomErrorHandler) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: 'Something is wrong',
      errors: err.serializeErrors(),
      data: null,
    });
  }
};



