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
exports.ProductServices = void 0;
const productModel_1 = __importDefault(require("./productModel"));
const postProductFromDb = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    // Create product in the database
    const result = yield productModel_1.default.create(productData);
    return result;
});
const updateAProductIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield productModel_1.default.findOneAndUpdate({ _id: id, isDeleted: false }, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedProduct = yield productModel_1.default.findOneAndUpdate({ _id: id }, { isDeleted: true }, { new: true, runValidators: true });
    return deletedProduct;
});
const getAllProductFromDb = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield productModel_1.default.find(Object.assign({ isDeleted: false }, (query.category ? { category: query.category } : {})));
    return result;
});
exports.ProductServices = {
    postProductFromDb,
    updateAProductIntoDB,
    deleteProductFromDB,
    getAllProductFromDb,
};
