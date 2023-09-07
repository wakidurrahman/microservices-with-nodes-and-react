import { json } from 'body-parser';
import express, { Express, Request, Response, urlencoded } from 'express';
const app: Express = express();
app.use(json());
app.use(urlencoded({ extended: true }));
const port = 3000;

app.get('/api/users/currentuser', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`Auth app listening on port ${port}`);
});
