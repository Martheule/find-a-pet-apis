import { z } from 'zod/v4';

const userSchema = z.object({
  name: z
    .string('First name is required!')
    .min(1, 'First name needs to be at least one character'),
  email: z.email('Please enter a valid email!').toLowerCase(),
  password: z
    .string('Please provide a password.')
    .min(8, 'passwords needs to be minimum 8 characters'),
});

export default userSchema;
