import { z } from "zod/v4";

const messageSchema = z.object({
  message: z.string().min(1, "Message content is required"),
  petId: z.number().int().positive("Pet ID must be a positive integer"),
  receiverId: z.number().int().positive("Receiver ID must be a positive integer"),
});

export default messageSchema;
