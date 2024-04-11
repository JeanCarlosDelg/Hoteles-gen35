import { z } from "zod";

const genders = ["male", "female", "other"];

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

const ratings = ["5", "4", "3", "2", "1"];

export const userSchemaReview = z.object({
  rating: z
    .enum(ratings, {
      errorMap: () => ({ message: "Please send your rating." }),
  }),
  comment: z
    .string()
    .min(10, {message: "Your comment must have a minimum of 10 characters."})
    .max(200, {message: "Your comment must have a maximum of 200 characters."})
});
