import { Sequelize } from "sequelize";
import { app } from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
