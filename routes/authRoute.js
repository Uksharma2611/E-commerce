import express from "express";
import {
  registerController,
  loginController,
  testContoller,
} from "../controllers/authController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";
//router object
const router = express.Router();

//routing
//REGISTER || METHOD
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//test routes
router.get('/test',requireSignIn,testContoller)

export default router;
