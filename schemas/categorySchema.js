import { z } from 'zod/v4';

const categorySchema = z.object({
  name: z
    .string('Category name is required!')
    .min(1, 'Category name needs to be at least one character'),
});

export default categorySchema;
