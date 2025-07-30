import Category from "../models/Category";

export const setupAssociations = function () {
  // Pet belongs to a User (owner)
  User.hasMany(Pet);
  Pet.belongsTo(User);

  // Pet belongs to a Category
  Category.hasMany(Pet);
  Pet.belongsTo(Category);
};
