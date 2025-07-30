import Pet from "../models/Pet.js";

export const getAllPets = async (req, res) => {
  const pets = await Pet.findAll();
  res.json(pets);
};

export const getSinglePet = async (req, res) => {
  const pet = await Pet.findByPk(req.params.id);
  if (!pet) return res.status(404).json({ message: "Pet not found" });
  res.json(pet);
};

export const createPet = async (req, res) => {
  const newPet = await Pet.create(req.body);
  res.status(201).json(newPet);
};

export const updatePet = async (req, res) => {
  const pet = await Pet.findByPk(req.params.id);
  if (!pet) return res.status(404).json({ message: "Pet not found" });

  await pet.update(req.body);
  res.json(pet);
};

export const deletePet = async (req, res) => {
  const pet = await Pet.findByPk(req.params.id);
  if (!pet) return res.status(404).json({ message: "Pet not found" });

  await pet.destroy();
  res.status(204).send();
};
