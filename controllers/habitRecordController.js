import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { PrismaClient } from "@prisma/client";
import { asyncHandler } from "../middlewares/habitAsyncHandler.js";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

export const getCompletedHabits = asyncHandler(async (req, res) => {
  const { studyId } = req.query;

  try {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(
      today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1)
    );
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999);

    const completedHabits = await prisma.completedHabit.findMany({
      where: {
        habit: {
          checked: true,
          studyId: studyId,
        },
        completeDate: {
          gte: startOfWeek,
          lte: endOfDay,
        },
      },
      include: {
        habit: true,
      },
    });

    res.status(200).json(completedHabits);
  } catch (error) {
    res
      .status(500)
      .json({ error: "완료된 습관 조회 실패", details: error.message });
  }
});
