import express from "express";
import userRouter from "./routes/userRouter.js";
import categoryRouter from "./routes/categoryRouter.js";
import errorHandler from "./middlewares/errorHandler.js";
import petRouter from "./routes/petRouter.js";
import shelterRouter from "./routes/shelterRouter.js";
import messageRoutes from "./routes/messageRouter.js";

export const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/category", categoryRouter);
app.use("/pets", petRouter);
app.use("/shelter", shelterRouter);
app.use("/api/messages", messageRoutes);

app.use((req, res) => {
  throw new Error("Page Not Found!", { cause: 404 });
});

app.use(errorHandler);
