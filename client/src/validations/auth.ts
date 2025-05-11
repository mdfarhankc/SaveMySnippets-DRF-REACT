import { z } from "zod";


export const loginSchema = z.object({
    email: z.string({ required_error: "Email is required!" }).email("Email is not valid!"),
    password: z.string({ required_error: "Password is required!" }),
});
export type LoginValues = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
    email: z.string({ required_error: "Email is required." })
        .trim()
        .email("Email is invalid"),
    password: z.string({ required_error: "Password is required." })
        .trim()
        .min(8, { message: "Password must contain 8 characters." }),
    confirm_password: z.string({ required_error: "Confirm password is required" })
        .trim()
        .min(8, { message: "Confirm password must contain 8 characters." }),
    first_name: z.string({ required_error: "Firstname is required." })
        .trim()
        .min(2, { message: "Firstname must be at least 2 characters." })
        .max(20, { message: "Firstname must not be longer than 20 characters." }),
    last_name: z.string({ required_error: "Lastname is required." })
        .trim()
        .min(2, { message: "Lastname must be at least 2 characters." })
        .max(20, { message: "Lastname must not be longer than 20 characters." }),
}).refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match.",
    path: ["confirm_password"],
});
export type RegisterValues = z.infer<typeof registerSchema>;

export const logoutSchema = z.object({
    refresh_token: z.string()
        .min(1, { message: "Refresh token is required." }),
});
export type LogoutValues = z.infer<typeof logoutSchema>;