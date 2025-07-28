
import { DataTypes } from 'sequelize';
import sequelize from '../db/find-a-pet.js';
import Category from './Category.js';
import Product from './Product.js';


export default (schema) => (req, res, next) => {
  try {
    req.body = schema.parse(req.body);
    next();
  } catch (err) {
    res.status(400).json({ error: err.errors });
  }
};