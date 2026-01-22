import express from "express";
import * as authController from "#api/controllers/auth.controller.js";
import { asyncHandler } from "#shared/utils/asyncHandler.js";

const router = express.Router();

router.post("/login", asyncHandler(authController.login));

export default router;