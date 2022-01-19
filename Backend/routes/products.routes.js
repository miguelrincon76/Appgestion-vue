import { Router } from "express";
const router = Router();

import * as productsCtrl from "../controllers/products.controller";
import { authJwt } from "../middlewares";

router.get("/", productsCtrl.getProducts);

router.get("/:productId", productsCtrl.getProductById);

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  productsCtrl.createProduct
);

router.put(
  "/:productId",
  [authJwt.verifyToken, authJwt.isAdmin],
  productsCtrl.updateProductById
);

router.delete(
  "/:productId",
  [authJwt.verifyToken, authJwt.isAdmin],
  productsCtrl.deleteProductById
);

export default router;
