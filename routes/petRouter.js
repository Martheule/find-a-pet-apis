// pet (martha)

// routes/petRouter.js 

import express from 'express';
import {
  getAllPets,
  getPetById,
  createPet,
  updatePet,
  deletePet,
} from '../controllers/petController.js';

import {
  createPetSchema,
  updatePetSchema,
} from '../schemas/petSchemas.js';

import validate from '../middleware/validate.js';

const router = express.Router();

router.get('/', getAllPets);
router.get('/:id', getPetById);
router.post('/', validate(createPetSchema), createPet);
router.put('/:id', validate(updatePetSchema), updatePet);
router.delete('/:id', deletePet);

export default petRouter;