"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const categoryRoutes_1 = require("../app/modules/category/categoryRoutes");
const productRoutes_1 = require("../app/modules/product/productRoutes");
exports.router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/category",
        route: categoryRoutes_1.CategoryRoutes,
    },
    {
        path: "/product",
        route: productRoutes_1.ProductRoutes,
    },
];
moduleRoutes.forEach((route) => exports.router.use(route.path, route.route));
