"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidation = void 0;
const zod_1 = require("zod");
const ProductSchema = zod_1.z.object({
    images: zod_1.z.string().array(),
    name: zod_1.z.string(),
    category: zod_1.z.string(),
    oldPrice: zod_1.z.string().optional(),
    newPrice: zod_1.z.string(),
    rating: zod_1.z.number(),
    inStock: zod_1.z.number(),
    size: zod_1.z.string(),
    brand: zod_1.z.string(),
    shopArea: zod_1.z.string(),
    policy: zod_1.z.string(),
    PolicyDays: zod_1.z.number(),
    contact_whatsapp: zod_1.z.string(),
    contact_phone: zod_1.z.string(),
    isDeleted: zod_1.z.boolean().optional(),
});
exports.productValidation = {
    ProductSchema,
};
