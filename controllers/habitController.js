import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { PrismaClient } from "@prisma/client";
import { asyncHandler } from "../middlewares/habitAsyncHandler.js";
import { assert } from "superstruct";
import { CreateHabit } from "../utils/habitStruct.js";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

//습관 조회 GET
export const getHabits = asyncHandler(async (req, res) => {
  const habits = await prisma.habit.findMany({
    select: {
      id: true,
      habitName: true,
      checked: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  res.send(habits);
});

//습관 등록 POST
export const createHabit = asyncHandler(async (req, res) => {
  assert(req.body, CreateHabit);

  const habit = await prisma.habit.create({
    data: req.body,
  });
  res.status(201).send(habit);
});

//습관 삭제 DELETE
export const deleteHabit = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await prisma.habit.delete({
    where: { id },
  });
  res.sendStatus(204);
});
