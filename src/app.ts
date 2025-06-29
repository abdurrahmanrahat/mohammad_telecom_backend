import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import path from 'path';
import { globalErrHandler } from './app/middlewares/globalErrHandler';
import { notFound } from './app/middlewares/notFound';
import router from './app/routes';
const app: Application = express();

// parsers
app.use(express.json());
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://modammad-telecom.vercel.app',
      'https://api.mdtelbd.com',
    ],
    credentials: true,
  }),
);

// application routes
app.use('/api/v1', router);

// Serve the uploads folder statically
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// global error handler
app.use(globalErrHandler);

// not found
app.use(notFound);

export default app;
