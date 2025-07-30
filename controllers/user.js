import User from '../models/User.js';

const getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

const getSingleUser = async (req, res) => {
  const {
    params: { id },
  } = req;
  const user = await User.findByPk(id);
  if (!user) throw new Error('User not found', { cause: 404 });
  res.json(user);
};

const createUser = async (req, res) => {
  const {
    sanitizedBody: { email },
  } = req;
  const found = await User.findOne({ where: { email } });
  if (found)
    throw new Error('User with that email already exists', { cause: 401 });
  const user = await User.create(req.sanitizedBody);
  res.json(user);
};

const updateUser = async (req, res) => {
  const {
    params: { id },
  } = req;
  const user = await User.findByPk(id);
  if (!user) throw new Error('User not found', { cause: 404 });
  await user.update(req.body);
  res.json(user);
};

const deleteUser = async (req, res) => {
  const {
    params: { id },
  } = req;
  const user = await User.findByPk(id);
  if (!user) throw new Error('User not found', { cause: 404 });
  await user.destroy();
  res.json({ message: 'User deleted' });
};

export { getAllUsers, getSingleUser, createUser, updateUser, deleteUser };
