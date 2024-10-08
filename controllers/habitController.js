import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { PrismaClient } from "@prisma/client";
import { asyncHandler } from "../middlewares/habitAsyncHandler.js";
import { assert } from "superstruct";
import { CreateHabit, UpdateHabits } from "../utils/habitStruct.js";

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
    orderBy: {
      createdAt: "asc", // 'asc'는 오름차순 정렬, 'desc'는 내림차순 정렬
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

// 습관 상태 수정 PATCH
export const updateHabit = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { checked } = req.body;

  const updatedHabit = await prisma.habit.update({
    where: { id },
    data: { checked },
  });

  res.status(200).send(updatedHabit);
});

// 습관 업데이트 PUT
export const updateHabits = asyncHandler(async (req, res) => {
  assert(req.body, UpdateHabits);
  const { habits } = req.body;

  await prisma.habit.deleteMany({});

  await prisma.habit.createMany({
    data: habits.map((habit) => ({
      habitName: habit.habitName,
      checked: habit.checked,
    })),
  });

  const updatedHabits = await prisma.habit.findMany({
    select: {
      id: true,
      habitName: true,
      checked: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  res.status(200).send(updatedHabits);
});
//습관 삭제 DELETE
export const deleteHabit = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await prisma.completedHabit.deleteMany({
    where: { habitId: id },
  });

  await prisma.habit.delete({
    where: { id },
  });
  res.sendStatus(204);
});
