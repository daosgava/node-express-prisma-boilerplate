import express from "express";
import { userController } from "../../controllers/index.js";
const router = express.Router();

/* GET users listing. */
router.get("/allUsers", userController.getAllUser);
router.post("/createUser", userController.createUser);

export default router;
