import express from "express";
import { getAllScores, getUserScores, postNewScore } from "../controllers/scores.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getAllScores);
router.get("/:id/friends", verifyToken, getUserScores);

/* Create */
router.post("/",  postNewScore);

export default router;
