import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters.")
    .max(50, "Name is too long."),

  email: z.string().trim().email("Please enter a valid email address."),

  message: z
    .string()
    .trim()
    .min(3, "Message must be at least 3 characters.")
    .max(1000, "Message is too long."),
});

export type ContactFormData = z.infer<typeof contactSchema>;
