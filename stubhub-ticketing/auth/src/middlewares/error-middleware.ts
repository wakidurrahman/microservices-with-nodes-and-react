import { NextFunction, Request, Response } from 'express';
import { AuthCustomErrorHandler } from '../errors/auth-custom-error-handler';
import Message from '../utils/message';


const sendErrorDev = (err: { statusCode: any; status: any; message: any; stack: any; }, res: Response<any, Record<string, any>>) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err: { isOperational: any; statusCode: any; status: any; message: any; }, res: Response<any, Record<string, any>>) => {
  // Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });

    // Programming or other unknown error: don't leak error details
  } else {
    // 1) Log error
    console.error('ERROR 💥', err);

    // 2) Send generic message
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong!',
    });
  }
};

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    const error = new Error(`Not Found -${req.originalUrl}`);
    res.status(404);
    next(error);
};

export const errorHandler = (
  err: Error | any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AuthCustomErrorHandler) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: Message.SOME_THING_MISSING,
      errors: err.serializeErrors(),
      data: null,
    });
  }

    // Mongoose validation error
    if (err.name === 'ValidationError' && err.errors) {
      const errors = Object.values(err.errors).map((el: any) => el.message);
      const message = `Invalid input data. ${errors.join('. ')}`;
      // eslint-disable-next-line prefer-const
      let valErrors: any[] = [];
      Object.keys(err.errors).forEach((key) =>
        valErrors.push(err.errors[key].message)
      );
      res.status(422).json({
        status: 'error',
        message: Message.SOME_THING_MISSING,
        errors: valErrors,
        data: null,
      });
      // stop further execution in this callback
      return;
    }

    if (process.env.NODE_ENV === 'development') {
      err.statusCode = err.statusCode || 500;
      err.status = err.status || 'error';
      return sendErrorDev(err, res);
    } else if (process.env.NODE_ENV === 'production') {
      err.statusCode = err.statusCode || 500;
      err.status = err.status || 'error';
      return sendErrorProd(err, res);
    }
};



