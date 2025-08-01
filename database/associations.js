import Category from "../models/Category.js";
import Pet from "../models/Pet.js";
import User from "../models/User.js";
import Message from "../models/Message.js";
import sequelize from "./find-a-pet.js";

export const setupAssociations = function () {
  // Pet belongs to a User (owner)
  User.hasMany(Pet);
  Pet.belongsTo(User);

  // Pet belongs to a Category
  Category.hasMany(Pet);
  Pet.belongsTo(Category);

  // Message belongs to Users and Pet
  User.hasMany(Message, { foreignKey: "senderId", as: "sentMessages" });
  User.hasMany(Message, { foreignKey: "receiverId", as: "receivedMessages" });

  Message.belongsTo(User, { foreignKey: "senderId", as: "sender" });
  Message.belongsTo(User, { foreignKey: "receiverId", as: "receiver" });

  Message.belongsTo(Pet, { foreignKey: "petId" });
};

sequelize.sync({ alter: true });
