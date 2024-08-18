import express from "express";
import { ProductControllers } from "./productController";

const router = express.Router();

router.post("/", ProductControllers.createProduct);
router.put("/:id", ProductControllers.updateAProductIntoDB);
router.delete("/:id", ProductControllers.deleteProductFromDB);
router.get("/", ProductControllers.getAllProductFromDb);

export const ProductRoutes = router;
