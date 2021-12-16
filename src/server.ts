import express, { Request, Response } from 'express';

const app = express();

const PORT = 3333;

app.get("/", (_req: Request, res: Response) => {
  return res.json({ message: 'Hello, world' })
});

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
