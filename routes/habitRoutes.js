import express from "express";
import {
  getHabits,
  createHabit,
  deleteHabit,
} from "../controllers/habitController.js";

export const router = express.Router();

router.get("/", getHabits);
router.post("/", createHabit);
router.delete("/:id", deleteHabit);
