import { TCategory } from "./categoryInterface";
import Category from "./categoryModel";

const postCategoryFromDb = async (categoryData: TCategory) => {
  // Create category in the database
  const result = await Category.create(categoryData);
  return result;
};

const updateACategoryIntoDB = async (
  id: string,
  payload: Partial<TCategory>,
) => {
  const result = await Category.findOneAndUpdate(
    { _id: id, isDeleted: false },
    payload,
    {
      new: true,
      runValidators: true,
    },
  );
  return result;
};

const deleteCategoryFromDB = async (id: string) => {
  const deletedCategory = await Category.findOneAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true, runValidators: true },
  );

  return deletedCategory;
};

const getAllCategoryFromDd = async () => {
  const result = await Category.find({ isDeleted: false });
  return result;
};

export const CategoryServices = {
  postCategoryFromDb,
  updateACategoryIntoDB,
  deleteCategoryFromDB,
  getAllCategoryFromDd,
};
