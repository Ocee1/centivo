import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', userRoutes);

// Test route
app.get('/', (req: Request, res: Response) => {
  res.send('Centivo App running on port 3300');
});

export default app;