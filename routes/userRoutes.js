import { Router } from 'express';
import {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/user.js';
import { create } from 'domain';

const userRouter = Router();

userRouter.route('/').get(getAllUsers).post(createUser);
userRouter.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

export default userRouter;
