"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const productController_1 = require("./productController");
const router = express_1.default.Router();
router.post("/", productController_1.ProductControllers.createProduct);
router.put("/:id", productController_1.ProductControllers.updateAProductIntoDB);
router.delete("/:id", productController_1.ProductControllers.deleteProductFromDB);
router.get("/", productController_1.ProductControllers.getAllProductFromDb);
exports.ProductRoutes = router;
