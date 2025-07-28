//products (Martha)

import { Op } from 'sequelize';
import Product from '../models/Product.js';
import Category from '../models/Category.js';

export const getAllProducts = async (req, res) => {
  const { categoryId, limit = 10, offset = 0, query } = req.query;

  const where = {};
  if (categoryId) where.categoryId = categoryId;
  if (query) where.name = { [Op.iLike]: `%${query}%` };

  const products = await Product.findAll({
    where,
    limit: parseInt(limit),
    offset: parseInt(offset),
  });

  res.json(products);
};

export const getProductById = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
};

export const createProduct = async (req, res) => {
  const { categoryId } = req.body;
  const category = await Category.findByPk(categoryId);
  if (!category) return res.status(400).json({ error: 'Invalid categoryId' });

  const product = await Product.create(req.body);
  res.status(201).json(product);
};

export const updateProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ error: 'Product not found' });

  await product.update(req.body);
  res.json(product);
};

export const deleteProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ error: 'Product not found' });

  await product.destroy();
  res.status(204).send();
};
