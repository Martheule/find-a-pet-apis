import Category from '../models/Category.js';

const getAllCategories = async (req, res) => {
  const categories = await Category.findAll();
  res.json(categories);
};

const getSingleCategory = async (req, res) => {
  const {
    params: { id },
  } = req;
  const category = await Category.findByPk(id);
  if (!category) throw new Error('Category not found', { cause: 404 });
  res.json(category);
};

const createCategory = async (req, res) => {
  const {
    sanitizedBody: { name },
  } = req;
  const found = await Category.findOne({ where: { name } });
  if (found)
    throw new Error('Category with that name already exists', { cause: 401 });
  const category = await Category.create(req.sanitizedBody);
  res.json(category);
};

const updateCategory = async (req, res) => {
  const {
    params: { id },
  } = req;
  const category = await Category.findByPk(id);
  if (!category) throw new Error('Category not found', { cause: 404 });
  await category.update(req.sanitizedBody);
  res.json(category);
};

const deleteCategory = async (req, res) => {
  const {
    params: { id },
  } = req;
  const category = await Category.findByPk(id);
  if (!category) throw new Error('Category not found', { cause: 404 });
  await category.destroy();
  res.json({ message: 'Category deleted' });
};

export {
  getAllCategories,
  getSingleCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
