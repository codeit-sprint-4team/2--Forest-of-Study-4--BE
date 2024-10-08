import express from "express";
import {
  getHabits,
  createHabit,
  updateHabit,
  updateHabits,
  deleteHabit,
} from "../controllers/habitController.js";

export const router = express.Router();

router.get("/", getHabits);
router.post("/", createHabit);
router.patch("/:id", updateHabit);
router.put("/", updateHabits);
router.delete("/:id", deleteHabit);
