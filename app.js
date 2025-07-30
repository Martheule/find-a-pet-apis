import express from 'express';
import userRouter from './routes/userRouter.js';
import categoryRouter from './routes/categoryRouter.js';
import errorHandler from './middlewares/errorHandler.js';

// initialize the app
export const app = express();

// middleware to parse request body
app.use(express.json());

// mini app per resource
app.use('/users', userRouter);
app.use('/category', categoryRouter);
// app.use();
// app.use();

//
// app.use((req, res) => {
//   throw new Error('Page Not Found!', { cause: 404 });
// });
//

app.use(errorHandler);
