import { TProduct } from "./productInterface";
import Product from "./productModel";

const postProductFromDb = async (productData: TProduct) => {
  // Create product in the database
  const result = await Product.create(productData);
  return result;
};

const updateAProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await Product.findOneAndUpdate(
    { _id: id, isDeleted: false },
    payload,
    {
      new: true,
      runValidators: true,
    },
  );
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const deletedProduct = await Product.findOneAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true, runValidators: true },
  );

  return deletedProduct;
};

const getAllProductFromDb = async (query: { category?: string }) => {
  const result = await Product.find({
    isDeleted: false,
    ...(query.category ? { category: query.category } : {}),
  });
  return result;
};

export const ProductServices = {
  postProductFromDb,
  updateAProductIntoDB,
  deleteProductFromDB,
  getAllProductFromDb,
};
