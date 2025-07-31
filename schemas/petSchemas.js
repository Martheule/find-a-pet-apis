
//pet (Martha)

// // schemas/petSchemas.js

import { z } from 'zod';

export const createPetSchema = z.object({
  name: z.string().min(1),
  age: z.number().int().nonnegative(),
  breed: z.string().min(1),
  description: z.string().optional(),
  imageUrl: z.string().url().optional(),
});

export const updatePetSchema = createPetSchema.partial();