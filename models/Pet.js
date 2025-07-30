import { DataTypes } from "sequelize";
import sequelize from "../database/find-a-pet.js";

const Pet = sequelize.define("Pet", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  breed: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_adopted: Boolean,
  description: {
    type: DataTypes.TEXT,
  },
  imageUrl: {
    type: DataTypes.STRING,
  },
});

Pet.sync({ alter: true });
export default Pet;
