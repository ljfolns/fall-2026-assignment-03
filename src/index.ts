import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import usersRouter from './routes/users.js';
import ticketsRouter from './routes/tickets.js';
import authMiddleware from './middleware/auth.js';

export const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-User-Id');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());

app.use(authMiddleware)

app.use('/users', usersRouter);
app.use('/tickets', ticketsRouter);

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;
