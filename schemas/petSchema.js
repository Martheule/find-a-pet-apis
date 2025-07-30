import { z } from "zod/v4";

const petSchema = z.object({
  name: z.string().min(1, "Pet name is required"),
  age: z.number().int().nonnegative("Age must be a non-negative integer"),
  breed: z.string().min(1, "Breed is required"),
  description: z.string().optional(),
  imageUrl: z.string().url("Image must be a valid URL").optional(),
});

export default petSchema;
