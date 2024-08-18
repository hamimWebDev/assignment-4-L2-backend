import httpStatus from "http-status";
import { catchAsync } from "../Utils/CatchAsync";
import { sendResponse } from "../Utils/SendResponse";
import { categoryValidation } from "./categoryValidation";
import { CategoryServices } from "./categoryService";

const createCategory = catchAsync(async (req, res) => {
  const categoryData = req.body;

  const zodData = categoryValidation.CategorySchema.parse(categoryData);

  const result = await CategoryServices.postCategoryFromDb(zodData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category added successfully",
    data: result,
  });
});

const updateACategoryIntoDB = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await CategoryServices.updateACategoryIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category is updated successfully",
    data: result,
  });
});

const deleteCategoryFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await CategoryServices.deleteCategoryFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category is deleted successfully",
    data: result,
  });
});

const getAllCategoryFromDd = catchAsync(async (req, res) => {
  const result = await CategoryServices.getAllCategoryFromDd();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Categories retrieved successfully",
    data: result,
  });
});

export const CategoryControllers = {
  createCategory,
  updateACategoryIntoDB,
  deleteCategoryFromDB,
  getAllCategoryFromDd,
};
