// https://zenn.dev/himorishige/articles/5084aab24c9f35
import express, { NextFunction, Request, Response } from 'express';

import asyncHandler from 'express-async-handler';
import { body, validationResult } from 'express-validator';
import { getParticularUser } from '../controllers/auth-controller';
import { BadRequestError } from '../errors/bad-request-error';
import { RequestValidationError } from '../errors/request-validation-error';
import { User } from '../models/user-model';

const router = express.Router();

// SignUpUser

router.post(
  '/api/users/signup',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters'),
  ],
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
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

    const user = User.build({ email, password });
    await user.save();

    res.status(201).send(user);
  })
);

// GET Particular user
router.route('/api/users/currentuser').get(getParticularUser);

export default router;
