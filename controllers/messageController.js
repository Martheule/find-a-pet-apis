import Message from "../models/Message.js";
import Pet from "../models/Pet.js";
import User from "../models/User.js";

const getAllMessages = async (req, res) => {
  const messages = await Message.findAll({
    order: [["createdAt", "DESC"]],
  });

  res.json(messages);
};

const getSingleMessage = async (req, res) => {
  const {
    params: { id },
  } = req;

  const message = await Message.findByPk(id);

  if (!message) throw new Error("Message not found", { cause: 404 });
  res.json(message);
};

const createMessage = async (req, res) => {
  const {
    sanitizedBody: { petId, message, receiverId },
  } = req;

  const newMessage = await Message.create({
    senderId: 6, // 使用Alice的ID
    receiverId: receiverId,
    petId,
    message,
  });

  res.status(201).json(newMessage);
};

const deleteMessage = async (req, res) => {
  const {
    params: { id },
  } = req;

  const message = await Message.findByPk(id);
  if (!message) throw new Error("Message not found", { cause: 404 });

  await message.destroy();
  res.json({ message: "Message deleted" });
};

export { getAllMessages, getSingleMessage, createMessage, deleteMessage };
