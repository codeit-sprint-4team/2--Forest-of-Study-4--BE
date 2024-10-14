import express from "express";
import { getCompletedHabit } from "../controllers/habitRecordController.js";

const router = express.Router();

router.get("/completedHabits", getCompletedHabit);

export default router;
