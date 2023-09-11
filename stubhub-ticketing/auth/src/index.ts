import { json } from 'body-parser';
import cors from 'cors';
import express, { Express, urlencoded } from 'express';
;
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

app.listen(port, () => {
  console.log(`Auth app listening on port ${port}`);
});
