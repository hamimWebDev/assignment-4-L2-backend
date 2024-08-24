import express from "express";
import { ProductControllers } from "./productController";

const router = express.Router();

router.post("/", ProductControllers.createProduct);
router.put("/:id", ProductControllers.updateAProductIntoDB);
router.delete("/:id", ProductControllers.deleteProductFromDB);
router.get("/", ProductControllers.getAllProductFromDb);
router.post("/:id", ProductControllers.MinusQuantityInStock);

export const ProductRoutes = router;
