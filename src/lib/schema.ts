import { z } from "zod";

const signInSchema = z.object({
  email: z.union([z.string().email(), z.string().regex(/^\d{10}$/)]),
  password: z.string().min(6),
});

export { signInSchema };
