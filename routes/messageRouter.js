import { Router } from "express";
import {
  getAllMessages,
  getSingleMessage,
  createMessage,
  deleteMessage,
} from "../controllers/messageController.js";
import validateSchema from "../middlewares/validateSchema.js";
import messageSchema from "../schemas/messageSchema.js";

const messageRouter = Router();

messageRouter
  .route("/")
  .get(getAllMessages)
  .post(validateSchema(messageSchema), createMessage);

messageRouter.route("/:id").get(getSingleMessage).delete(deleteMessage);

export default messageRouter;
