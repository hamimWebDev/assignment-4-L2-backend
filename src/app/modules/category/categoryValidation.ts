import { z } from "zod";

const CategorySchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).trim(),
  imgSrc: z.string().min(1, { message: "Image source is required" }).trim(),
  isDeleted: z.boolean().optional().default(false),
});

export const categoryValidation = {
  CategorySchema,
};
