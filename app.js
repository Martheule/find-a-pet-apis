import express from 'express';
import userRouter from './routes/userRoutes.js';

// initialize the app
export const app = express();

// middleware to parse request body
app.use(express.json());

// mini app per resource
app.use('/users', userRouter);
// app.use();
// app.use();
