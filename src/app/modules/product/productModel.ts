import mongoose from "mongoose";
import { TProduct } from "./productInterface";

const productSchema = new mongoose.Schema({
  images: [String],
  name: { type: String, required: true },
  category: { type: String, required: true },
  oldPrice: String,
  newPrice: { type: String, required: true },
  rating: { type: Number, required: true },
  inStock: { type: Number, required: true },
  size: { type: String, required: true },
  brand: { type: String, required: true },
  shopArea: { type: String, required: true },
  policy: { type: String, required: true },
  policyDays: { type: Number, require: true },
  contact_whatsapp: { type: String, required: true },
  contact_phone: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
});

const Product = mongoose.model<TProduct>("Product", productSchema);

export default Product;
