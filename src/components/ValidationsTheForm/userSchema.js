import { z } from "zod";

const genders = ["male", "female", "other"]

export const userSchemaRegister = z.object({
  firstName: z
    .string()
    .min(3, {
      message: "First Name must be at least 3 characters long",
    })
    .max(200, {
      message: "First Name must be less than 200 characters long",
    }),
  lastName: z
    .string()
    // .refine((firstName) => !isNaN(firstName), {
    //   message: "tu nombre no debe llevar numeros",
    // })
    .min(3, {
      message: "Last Name must be at least 3 characters long",
    })
    .max(200, {
      message: "Last Name must be less than 200 characters long",
    }),
  email: z
    .string()
    .email({
      message: "Please enter a valid email",
    }),
  password: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters long",
    }),
  gender: z
    .enum(genders, {
      errorMap: () => ({ message: "Please select you gender" }),
    }),
});

// export const userSchemaLogin = z.object({
//   email: z
//     .string()
//     .email({
//       message: "Please enter a valid email",
//     }),
//   password: z
//     .string()
//     .min(6, {
//       message: "Password must be at least 6 characters long",
//     }),
// })
