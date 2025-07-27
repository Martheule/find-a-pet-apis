import User from '../models/User.js';

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch Users' });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const id = +req.params.id;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: 'user not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'something went wrong' });
  }
};

const createUser = async (req, res) => {
  try {
    const {
      body: { name, email, password },
    } = req;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: 'name, email, and password are required',
      });
    }
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'something went wrong' });
  }
};

const updateUser = async (req, res) => {
  try {
    const {
      body: { name, email, password },
      params: { id },
    } = req;
    if (!name || !email || !password)
      return res
        .status(400)
        .json({ message: 'name, email and password are required' });
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json('user nt found');
    await user.update(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'something went wrong' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: 'user not found' });
    await user.destroy();
    res.json({ message: 'user deleted' });
  } catch (error) {
    res.status(500).json({ message: 'something went wrong' });
  }
};
export { getAllUsers, getSingleUser, createUser, updateUser, deleteUser };
