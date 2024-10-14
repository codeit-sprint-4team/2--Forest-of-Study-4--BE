import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { PrismaClient } from "@prisma/client";
import { asyncHandler } from "../middlewares/habitAsyncHandler.js";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

export const getCompletedHabit = asyncHandler(async (req, res) => {
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

    const weeklyRecords = await prisma.completedHabit.findMany({
      where: {
        studyId: studyId,
        completeDate: {
          gte: startOfWeek,
          lte: endOfDay,
        },
      },
    });
    const groupedByDay = groupByDay(weeklyRecords);

    res.status(200).json(groupedByDay);
  } catch (error) {
    res.status(500).json({ error: "기록 조회 실패" });
  }
});

const groupByDay = (records) => {
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  const grouped = {};

  days.forEach((day) => {
    grouped[day] = [];
  });

  records.forEach((record) => {
    const date = new Date(record.completeDate);
    const dayIndex = date.getDay();
    const dayName = days[dayIndex === 0 ? 6 : dayIndex - 1];

    grouped[dayName].push(record);
  });

  return grouped;
};
