import { z } from "zod";


export const loginSchema = z.object({
    email: z.string({ required_error: "Email is required!" }).email("Email is not valid!"),
    password: z.string({ required_error: "Password is required!" }).min(8, "Password should contain minimum 8 characters"),
});
export type LoginValues = z.infer<typeof loginSchema>;