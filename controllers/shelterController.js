import Shelter from "../models/Shelter.js";

export const getAllShelters = async (req, res) => {
  const shelter = await Shelter.findAll();
  res.json(shelter);
};

export const getSingleShelter = async (req, res) => {
  const shelter = await Shelter.findByPk(req.params.id);
  if (!shelter) return res.status(404).json({ message: "Shelter not found" });
  res.json(shelter);
};

export const createShelter = async (req, res) => {
  const newShelter = await Shelter.create(req.body);
  res.status(201).json(newShelter);
};

export const updateShelter = async (req, res) => {
  const shelter = await Shelter.findByPk(req.params.id);
  if (!shelter) return res.status(404).json({ message: "Shelter not found" });

  await shelter.update(req.body);
  res.json(shelter);
};

export const deleteShelter = async (req, res) => {
  const shelter = await Shelter.findByPk(req.params.id);
  if (!shelter) return res.status(404).json({ message: "Shelter not found" });

  await shelter.destroy();
  res.status(204).send();
};
