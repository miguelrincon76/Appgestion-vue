import { Router } from "express";
const router = Router();

import * as materialsCtrl from "../controllers/materials.controller";
import { authJwt } from "../middlewares";

router.get("/", materialsCtrl.getMaterials);

router.get("/:materialId", materialsCtrl.getMaterialById);

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  materialsCtrl.createMaterial
);

router.put(
  "/:materialId",
  [authJwt.verifyToken, authJwt.isBudgeter],
  materialsCtrl.updateMaterialById
);

router.delete(
  "/:materialId",
  [authJwt.verifyToken, authJwt.isAdmin],
  materialsCtrl.deleteMaterialById
);

export default router;
