import express, { Request, Response } from 'express';
import router from './routes';

const app = express();

const PORT = 3333;

app.use(express.json());

app.use(router);

app.get("/", (_req: Request, res: Response) => {
  return res.json({ message: 'Hello, world' })
});

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
