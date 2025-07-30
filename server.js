import { app } from "./app.js";
import dotenv from "dotenv";
import { setupAssociations } from "./database/associations.js";

dotenv.config();

// TODO: Import Associations just call it
setupAssociations();

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
