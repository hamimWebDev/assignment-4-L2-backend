import express from "express";
import { CategoryControllers } from "./categoryController";

const router = express.Router();

router.post("/", CategoryControllers.createCategory);
router.put("/:id", CategoryControllers.updateACategoryIntoDB);
router.delete("/:id", CategoryControllers.deleteCategoryFromDB);
router.get("/", CategoryControllers.getAllCategoryFromDd);

export const CategoryRoutes = router;
