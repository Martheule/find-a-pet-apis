//pet (Martha)

// controllers/petController.js

import { Op } from 'sequelize';
import Category from '../models/pet.js';

export async function getAllPets(req, res) {
  try {
    const pets = await Pet.findAll();
    res.json(pets);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch pets' });
  }
}

export async function getPetById(req, res) {
  try {
    const pet = await Pet.findByPk(req.params.id);
    if (!pet) return res.status(404).json({ error: 'Pet not found' });
    res.json(pet);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch pet' });
  }
}

export async function createPet(req, res) {
  try {
    const pet = await Pet.create(req.body);
    res.status(201).json(pet);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create pet' });
  }
}

export async function updatePet(req, res) {
  try {
    const pet = await Pet.findByPk(req.params.id);
    if (!pet) return res.status(404).json({ error: 'Pet not found' });

    await pet.update(req.body);
    res.json(pet);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update pet' });
  }
}

export async function deletePet(req, res) {
  try {
    const pet = await Pet.findByPk(req.params.id);
    if (!pet) return res.status(404).json({ error: 'Pet not found' });

    await pet.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete pet' });
  }
}
export default petController;