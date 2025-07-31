import { DataTypes } from "sequelize";
import sequelize from "../database/find-a-pet.js";

const Shelter = sequelize.define("Shelter", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  zipcode: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  imageUrl: {
    type: DataTypes.STRING,
  },
});

Shelter.sync({ alter: true });
export default Shelter;
