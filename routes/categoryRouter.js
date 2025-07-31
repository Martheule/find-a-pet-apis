import { Router } from 'express';
import {
  getAllCategories,
  getSingleCategory,
  updateCategory,
  createCategory,
  deleteCategory,
} from '../controllers/categories.js';
import validateSchema from '../middlewares/validateSchema.js';
import categorySchema from '../schemas/categorySchema.js';

const categoryRouter = Router();

categoryRouter
  .route('/')
  .get(getAllCategories)
  .post(validateSchema(categorySchema), createCategory);
categoryRouter
  .route('/:id')
  .get(getSingleCategory)
  .put(validateSchema(categorySchema), updateCategory)
  .delete(deleteCategory);

export default categoryRouter;
