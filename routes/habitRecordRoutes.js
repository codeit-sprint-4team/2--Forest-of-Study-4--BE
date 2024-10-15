import express from "express"
import getcompletedHabit from "../controllers/habitrecord"

const router = express.Router();

router.get("/completedHabits", getcompletedHabit);

export default router;