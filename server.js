import { app } from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('if you can read this... Good Job. Server is working! ');
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
