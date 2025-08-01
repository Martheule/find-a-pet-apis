import { DataTypes } from "sequelize";
import sequelize from "../database/find-a-pet.js";

const Message = sequelize.define(
  "Message",
  {
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    senderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    receiverId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    petId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "Messages",
    timestamps: true,
  }
);

Message.sync({ alter: true });

export default Message;
