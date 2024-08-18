import { Router } from "express";
import { CategoryRoutes } from "../app/modules/category/categoryRoutes";
import { ProductRoutes } from "../app/modules/product/productRoutes";

export const router = Router();

const moduleRoutes = [
  {
    path: "/category",
    route: CategoryRoutes,
  },
  {
    path: "/product",
    route: ProductRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
