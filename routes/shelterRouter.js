import { Router } from "express";
import {
  getAllShelters,
  getSingleShelter,
  createShelter,
  updateShelter,
  deleteShelter
} from "../controllers/shelterController.js";
import validateSchema from "../middlewares/validateSchema.js";
import shelterSchema from "../schemas/shelterSchema.js";

const shelterRouter = Router();

shelterRouter.route("/").get(getAllShelters).post(validateSchema(validateSchema), createShelter);
shelterRouter
  .route("/:id")
  .get(getSingleShelter)
  .put(validateSchema(shelterSchema), updateShelter)
  .delete(deleteShelter);

export default shelterRouter;
