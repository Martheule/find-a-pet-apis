//products (Martha)

const { Product, Category } = require('../models');

exports.getAllProducts = async (req, res) => {
  const { categoryId } = req.query;
  const where = categoryId ? { categoryId } : {};
  const products = await Product.findAll({ where });
  res.json(products);
};

exports.getProductById = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
};

exports.createProduct = async (req, res) => {
  const { categoryId } = req.body;
  const category = await Category.findByPk(categoryId);
  if (!category) return res.status(400).json({ error: 'Invalid categoryId' });

  const product = await Product.create(req.body);
  res.status(201).json(product);
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ error: 'Product not found' });

  await product.update(req.body);
  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ error: 'Product not found' });

  await product.destroy();
  res.status(204).send();
};
