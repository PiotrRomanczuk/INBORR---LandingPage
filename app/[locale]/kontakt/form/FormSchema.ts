import z from "zod";

export const FormSchema = z.object({
    firstName: z.string().min(1).max(50),
    lastName: z.string().min(1).max(50),
    email: z.string().email(),
    phone: z.string().min(9).max(12),
    message: z.string().min(1).max(1000),
  });