// pet (martha)

// routes/petRouter.js 

import petSchema from "../schemas/petSchema.js";
import validateSchema from "../middlewares/validateSchema.js";

import {Router} from 'express';
import {
  getAllPets,
  getPetById,
  createPet,
  updatePet,
  deletePet,
} from '../controllers/petController.js';

//import {
//  petSchema,
//} from '../schemas/petSchemas.js';

import validate from '../middleware/validate.js';

const petRouter = Router();

petRouter.get('/', getAllPets);
petRouter.get('/:id', getPetById);
petRouter.post('/', validate(petSchema), createPet);
petRouter.put('/:id', validate(petSchema), updatePet);
petRouter.delete('/:id', deletePet);

export default petRouter;