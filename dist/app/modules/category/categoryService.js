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
exports.CategoryServices = void 0;
const categoryModel_1 = __importDefault(require("./categoryModel"));
const postCategoryFromDb = (categoryData) => __awaiter(void 0, void 0, void 0, function* () {
    // Create category in the database
    const result = yield categoryModel_1.default.create(categoryData);
    return result;
});
const updateACategoryIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield categoryModel_1.default.findOneAndUpdate({ _id: id, isDeleted: false }, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteCategoryFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedCategory = yield categoryModel_1.default.findOneAndUpdate({ _id: id }, { isDeleted: true }, { new: true, runValidators: true });
    return deletedCategory;
});
const getAllCategoryFromDd = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield categoryModel_1.default.find({ isDeleted: false });
    return result;
});
exports.CategoryServices = {
    postCategoryFromDb,
    updateACategoryIntoDB,
    deleteCategoryFromDB,
    getAllCategoryFromDd,
};
