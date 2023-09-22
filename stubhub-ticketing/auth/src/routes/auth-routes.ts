// https://zenn.dev/himorishige/articles/5084aab24c9f35
import express, { NextFunction, Request, Response } from 'express';

import asyncHandler from 'express-async-handler';
import { body, validationResult } from 'express-validator';
import { getParticularUser } from '../controllers/auth-controller';
import { BadRequestError } from '../errors/bad-request-error';
import { RequestValidationError } from '../errors/request-validation-error';
import { User } from '../models/user-model';
import { createUserService, findAllQuery } from '../services/auth-service';
import Message from '../utils/message';

const router = express.Router();

/**
 * Create all kinds of platforms user  into this application
 * @desc      Register/SignUp user, Create a new local account.
 * @route     POST /api/v1/auth/register
 * @access    Public
 */

router.post(
  '/api/v1/auth/register',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters'),
  ],
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    // 1) check request body is empty!
    if (!req.body) {
      return next(new BadRequestError(`${Message.REQUEST_BODY_IS_EMPTY}`));
    }
    console.log(req.body);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }

    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new BadRequestError('Email in use');
    }
    await createUserService({ email, password });

    res.status(201).json({
      status: 'success',
      message: Message.CREATE_SUCCESSFUL,
      data: null,
    });
  })
);

/**
 * @desc      Sign/login in using email and password.
 * @route     POST /api/v1/auth/signin
 * @access    Public
 */
router.post(
  '/api/v1/auth/signin',
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    console.log(req.body);
    res.send('Hi there!');
  })
);
/**
 * @desc      signout from this platform.
 * @route     POST /api/v1/auth/signout
 * @access    Public
 */
router.post(
  '/api/v1/auth/signout',
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    console.log(req.body);
    res.send('Hi there!');
  })
);

/**
 *
 * @desc     Get all users.
 * @route     GET /api/v1/auth/users
 * @access    Public
 */
router.get(
  '/api/v1/auth/users',
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const users = await findAllQuery(User, {})
    console.log(users)
    res.status(200).json({
      status: 'success',
      message: Message.DATA_FETCH,
      data: users,
    });
  })
);
/**
 * @desc      Register/SignUp user, Create a new local account.
 * @route     GET /api/v1/auth/currentuser
 * @access    Public
 */
router.route('/api/v1/auth/currentuser').get(getParticularUser);

export default router;
