"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const CatchAsync_1 = require("../Utils/CatchAsync");
const SendResponse_1 = require("../Utils/SendResponse");
const productValidation_1 = require("./productValidation");
const productService_1 = require("./productService");
const createProduct = (0, CatchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = req.body;
    const zodData = productValidation_1.productValidation.ProductSchema.parse(productData);
    const result = yield productService_1.ProductServices.postProductFromDb(zodData);
    (0, SendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Product added successfully",
        data: result,
    });
}));
const updateAProductIntoDB = (0, CatchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const productData = req.body;
    const result = yield productService_1.ProductServices.updateAProductIntoDB(id, productData);
    (0, SendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Product is updated successfully",
        data: result,
    });
}));
const deleteProductFromDB = (0, CatchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield productService_1.ProductServices.deleteProductFromDB(id);
    (0, SendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Product is deleted successfully",
        data: result,
    });
}));
const getAllProductFromDb = (0, CatchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = {};
    if (req.query.category) {
        query.category = req.query.category;
    }
    const result = yield productService_1.ProductServices.getAllProductFromDb(query);
    (0, SendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Products retrieved successfully",
        data: result,
    });
}));
const MinusQuantityInStock = (0, CatchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { quantity } = req.body;
    if (typeof quantity !== "number" || quantity <= 0) {
        return res.status(http_status_1.default.BAD_REQUEST).json({
            success: false,
            message: "Invalid quantity provided",
        });
    }
    const result = yield productService_1.ProductServices.updateAProductIntoDB(id, {
        $inc: { inStock: -quantity },
    });
    (0, SendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Product stock quantity is updated successfully",
        data: result,
    });
}));
exports.ProductControllers = {
    createProduct,
    updateAProductIntoDB,
    deleteProductFromDB,
    getAllProductFromDb,
    MinusQuantityInStock,
};
