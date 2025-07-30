import { z } from 'zod/v4';

const validateSchema = (schema) => {
  return (req, res, next) => {
    const { data, error } = schema.safeParse(req.body);

    if (error) {
      throw new Error(z.prettifyError(error), { cause: 400 });
    } else {
      req.sanitizedBody = data;
      next();
    }
  };
};

export default validateSchema;
