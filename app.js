import express from "express";
import { DataTypes } from 'sequelize';
import Category from ‘./Category.js’;
import sequelize from "./database/find-a-pet.js";
import { Pet } from "./models/pet.js";

// middleware to parse request body
app.use(express.json());

// mini app per resource
// app.use();
// app.use();

// pets (martha)
app.use(‘/pet’, productRouter);

export { Category, Pet };

//app localhost
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});