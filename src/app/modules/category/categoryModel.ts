import mongoose from "mongoose";
import { TCategory } from "./categoryInterface";

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  imgSrc: {
    type: String,
    required: true,
    trim: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const Category = mongoose.model<TCategory>("Category", CategorySchema);

export default Category;
