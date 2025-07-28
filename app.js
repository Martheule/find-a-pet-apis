import express from "express";
import { DataTypes } from 'sequelize';
import Category from ‘./Category.js’;
import Product from './Product.js';

// middleware to parse request body
app.use(express.json());

// mini app per resource
// app.use();
// app.use();

// products (martha)
app.use(‘/products’, productRouter);

export { Category, Product };

//app localhost
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});