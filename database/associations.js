import Category from "../models/Category.js";
import Pet from "../models/Pet.js";
import User from "../models/User.js";
import sequelize from "./find-a-pet.js";

export const setupAssociations = function () {
  // Pet belongs to a User (owner)
  User.hasMany(Pet);
  Pet.belongsTo(User);

  // Pet belongs to a Category
  Category.hasMany(Pet);
  Pet.belongsTo(Category);
};

sequelize.sync({ alter: true });
