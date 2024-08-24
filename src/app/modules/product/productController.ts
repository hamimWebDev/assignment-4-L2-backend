import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../Utils/CatchAsync";
import { sendResponse } from "../Utils/SendResponse";
import { productValidation } from "./productValidation";
import { ProductServices } from "./productService";
import { TProduct } from "./productInterface";

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const productData: TProduct = req.body;

  const zodData = productValidation.ProductSchema.parse(productData);

  const result = await ProductServices.postProductFromDb(zodData);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Product added successfully",
    data: result,
  });
});

const updateAProductIntoDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const productData: Partial<TProduct> = req.body;

  const result = await ProductServices.updateAProductIntoDB(id, productData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product is updated successfully",
    data: result,
  });
});

const deleteProductFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await ProductServices.deleteProductFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product is deleted successfully",
    data: result,
  });
});

const getAllProductFromDb = catchAsync(async (req: Request, res: Response) => {
  const query: { category?: string } = {};
  if (req.query.category) {
    query.category = req.query.category as string;
  }

  const result = await ProductServices.getAllProductFromDb(query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products retrieved successfully",
    data: result,
  });
});

const MinusQuantityInStock = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { quantity } = req.body as { quantity: number };

  if (typeof quantity !== "number" || quantity <= 0) {
    return res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Invalid quantity provided",
    });
  }

  const result = await ProductServices.updateAProductIntoDB(id, {
    $inc: { inStock: -quantity },
  } as Partial<TProduct>);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product stock quantity is updated successfully",
    data: result,
  });
});

export const ProductControllers = {
  createProduct,
  updateAProductIntoDB,
  deleteProductFromDB,
  getAllProductFromDb,
  MinusQuantityInStock,
};
