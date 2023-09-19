import { json } from 'body-parser';
import cors from 'cors';
import express, { Express, urlencoded } from 'express';
import 'express-async-errors';
import mongoose from 'mongoose';

const app: Express = express();
app.use(json());
app.use(urlencoded({ extended: true }));

import { NotFoundError } from './errors/not-found-error';
import { errorHandler } from './middlewares/error-middleware';
import authRoutes from './routes/auth-routes';

// CORS設定
app.use(cors());
app.use(authRoutes);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await mongoose.connect('mongodb://auth-mongo-clusterip-service:27017/auth');
    console.log('Connected to MongoDb successful');
  } catch (error) {
    console.error(error);
  }

  app.listen(port, () => {
    console.log(`Auth app listening on port ${port}`);
  });
};

start();
