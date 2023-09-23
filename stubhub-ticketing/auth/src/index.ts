import { json } from 'body-parser';
import cors from 'cors';
import express, { Express, urlencoded } from 'express';
import 'express-async-errors';
import mongoose from 'mongoose';

const app: Express = express();
const port = process.env.PORT || 5000;
app.use(json());
app.use(urlencoded({ extended: true }));

import { NotFoundError } from './errors/not-found-error';
import { errorHandler } from './middlewares/error-middleware';
import authRoutes from './routes/auth-routes';

{/* ↓↓↓ CORS Settings */}
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
{/* ↓↓↓ Route Handler */}
app.use(authRoutes);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);
{/* ↑↑↑ Route Handler */}

const start = async () => {
  try {
    {/* ↓↓↓ Mongoose Connect For Local Kubernetes*/}
     await mongoose.connect('mongodb://auth-mongo-clusterip-service:27017/auth');
    {/* ↓↓↓ Mongoose Connect For Local Environment*/}
    //await mongoose.connect('mongodb://localhost:27017/stubhub-ticketing-auth');
    console.log('Connected to MongoDb successful');
  } catch (error) {
    console.error(error);
  }

 {/* ↓↓↓ Server start */}
  app.listen(port, () => {
    console.log("first workding")
    console.log(`Auth app listening on port ${port}`);
  });
};

start();
