import { z } from "zod/v4";

const shelterSchema = z.object({
  shelter: z.string().min(1, "Shelter name is required"),
  zipcode: z.number().int().nonnegative("zip must be a non-negative integer"),
  location: z.string().min(1, "location of shelter is required"),
  description: z.string().optional(),
  imageUrl: z.string().url("Image must be a valid URL").optional(),
});

export default shelterSchema;
