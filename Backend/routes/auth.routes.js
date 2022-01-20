import { Router } from "express";
import * as authController from "../controllers/authcontroller";
const router = Router();
import { verifySignup } from "../middlewares";

/* router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
}); */

router.post(
  "/signup",
  [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted],
  authController.signUp
);

router.post("/signin", authController.signIn);

export default router;
