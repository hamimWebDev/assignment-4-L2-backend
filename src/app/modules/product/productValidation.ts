import { z } from "zod";

const ProductSchema = z.object({
  images: z.string().array(),
  name: z.string(),
  category: z.string(),
  oldPrice: z.string().optional(),
  newPrice: z.string(),
  rating: z.number(),
  inStock: z.number(),
  size: z.string(),
  brand: z.string(),
  shopArea: z.string(),
  policy: z.string(),
  policyDays: z.number(),
  contact_whatsapp: z.string(),
  contact_phone: z.string(),
  isDeleted: z.boolean().optional(),
});

export const productValidation = {
  ProductSchema,
};
