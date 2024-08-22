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
exports.CategoryControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const CatchAsync_1 = require("../Utils/CatchAsync");
const SendResponse_1 = require("../Utils/SendResponse");
const categoryValidation_1 = require("./categoryValidation");
const categoryService_1 = require("./categoryService");
const createCategory = (0, CatchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryData = req.body;
    const zodData = categoryValidation_1.categoryValidation.CategorySchema.parse(categoryData);
    const result = yield categoryService_1.CategoryServices.postCategoryFromDb(zodData);
    (0, SendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Category added successfully",
        data: result,
    });
}));
const updateACategoryIntoDB = (0, CatchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield categoryService_1.CategoryServices.updateACategoryIntoDB(id, req.body);
    console.log(result);
    (0, SendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Category is updated successfully",
        data: result,
    });
}));
const deleteCategoryFromDB = (0, CatchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield categoryService_1.CategoryServices.deleteCategoryFromDB(id);
    (0, SendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Category is deleted successfully",
        data: result,
    });
}));
const getAllCategoryFromDd = (0, CatchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield categoryService_1.CategoryServices.getAllCategoryFromDd();
    (0, SendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Categories retrieved successfully",
        data: result,
    });
}));
exports.CategoryControllers = {
    createCategory,
    updateACategoryIntoDB,
    deleteCategoryFromDB,
    getAllCategoryFromDd,
};
