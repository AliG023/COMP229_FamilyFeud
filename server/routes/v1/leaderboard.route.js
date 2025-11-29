import express from "express";

import leaderboardController from "../../controllers/leaderboard.controller.js";
import authMiddleware from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", authMiddleware.requireSignin, leaderboardController.getLeaders);

export default router;
