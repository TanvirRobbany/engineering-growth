const {z} = require('zod');

const userSchema = z.object({
    name: z.string().trim().min(2, "Name must contain at least 2 characters").max(100, "Name cannot exceed 100 characters"),
    email: z.string().trim().email("Please provide a valid email address"),
    password: z.string().min(8, "Password must contain at least 8 characters"),
});

module.exports = userSchema;