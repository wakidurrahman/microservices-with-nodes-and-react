import express from 'express';
import asyncHandler from 'express-async-handler';

export type PostType = {
  _id: string;
  createdAt: number;
  updatedAt?: number;
  title: string;
  body: string;
  image: string;
  like: number;
  publish: boolean;
};



export const singUpUser = asyncHandler(async (req: express.Request, res: express.Response, next: express.NextFunction ) => {
  console.log(req.body)
  res.status(200).json({
    status: "Ok"
  })
})
/**
 * Fetch Particular user
 * GET /posts
 */
export const  getParticularUser = asyncHandler(async (req: express.Request, res: express.Response, next: express.NextFunction ) => {
  res.status(201).json({
    status: "Ok"
  })
})
