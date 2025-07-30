import { Router } from "express";
import {
  getAllPets,
  createPet,
  getSinglePet,
  updatePet,
  deletePet,
} from "../controllers/petController.js";
import validateSchema from "../middlewares/validateSchema.js";
import petSchema from "../schemas/petSchema.js";

const petRouter = Router();

petRouter.route("/").get(getAllPets).post(validateSchema(petSchema), createPet);
petRouter
  .route("/:id")
  .get(getSinglePet)
  .put(validateSchema(petSchema), updatePet)
  .delete(deletePet);

export default petRouter;
