"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const categoryController_1 = require("./categoryController");
const router = express_1.default.Router();
router.post("/", categoryController_1.CategoryControllers.createCategory);
router.put("/:id", categoryController_1.CategoryControllers.updateACategoryIntoDB);
router.delete("/:id", categoryController_1.CategoryControllers.deleteCategoryFromDB);
router.get("/", categoryController_1.CategoryControllers.getAllCategoryFromDd);
exports.CategoryRoutes = router;
