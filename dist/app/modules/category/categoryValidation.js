"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryValidation = void 0;
const zod_1 = require("zod");
const CategorySchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: "Name is required" }).trim(),
    imgSrc: zod_1.z.string().min(1, { message: "Image source is required" }).trim(),
    isDeleted: zod_1.z.boolean().optional().default(false),
});
exports.categoryValidation = {
    CategorySchema,
};
