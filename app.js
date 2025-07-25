import express from "express";

//app port
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// initialize the app
export const app = express();

// middleware to parse request body
app.use(express.json());

// mini app per resource
// app.use();
// app.use();

// products (martha)
const Category = require('./Category');
const Product = require('./Product');

Category.hasMany(Product, { foreignKey: 'categoryId' });
Product.belongsTo(Category, { foreignKey: 'categoryId' });

const productRouter = require('./routers/productRouter');
app.use('/products', productRouter);


//app localhost
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  });