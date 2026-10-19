const { z } = require("zod");

const createUserSchema = z.object({
  name: z.string().trim().min(2).max(100),

  email: z.email().trim().toLowerCase(),

  age: z.number().int().min(18).max(100).optional(),
});

const updateUserSchema = createUserSchema
  .partial()
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field must be provided",
  });

module.exports = {
  createUserSchema,
  updateUserSchema,
};