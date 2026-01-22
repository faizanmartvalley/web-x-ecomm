import express from "express";
import { homePage } from "#web/controllers/home.controller.js";
import { asyncHandler } from "#shared/utils/asyncHandler.js";

const router = express.Router();

router.get("/", asyncHandler(homePage));

export default router;