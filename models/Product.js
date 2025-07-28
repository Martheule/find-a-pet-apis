import { DataTypes } from 'sequelize';
import sequelize from '../db/find-a-pet.js';
import Category from './Category.js';
import Product from './Product.js';

app.use(‘/products’, productRouter);

export { Category, Product };


const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: DataTypes.STRING,
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  image: DataTypes.STRING,
});

export default Product;
