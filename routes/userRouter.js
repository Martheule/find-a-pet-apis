import { Router } from 'express';
import {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/user.js';
import validateSchema from '../middlewares/validateSchema.js';
import userSchema from '../schemas/userSchema.js';

const userRouter = Router();

userRouter
  .route('/')
  .get(getAllUsers)
  .post(validateSchema(userSchema), createUser);
userRouter
  .route('/:id')
  .get(getSingleUser)
  .put(validateSchema(userSchema), updateUser)
  .delete(deleteUser);

export default userRouter;
