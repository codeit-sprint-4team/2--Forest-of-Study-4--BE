import express from "express";
import { getCompletedHabits } from "../controllers/habitRecordController.js";

const router = express.Router();

router.get("/completedHabits", getCompletedHabits);

export default router;
