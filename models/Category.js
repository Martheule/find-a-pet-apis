import { DataTypes } from 'sequelize';
import sequelize from '../database/find-a-pet.js';

const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Category.sync({ alter: true });
export default Category;
