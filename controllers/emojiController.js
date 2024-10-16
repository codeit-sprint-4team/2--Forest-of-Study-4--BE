import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { PrismaClient } from "@prisma/client";
import { asyncHandler } from "../middlewares/habitAsyncHandler.js";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

export const emoji = asyncHandler(async (req, res) => {
  const { emoji } = req.body;
  const studyId = req.query.studyId;

  const newEmoji = await prisma.emoji.create({
    data: {
      emoji,
      study: {
        connect: {
          id: studyId, // studyId를 통해 기존 Study와 연결
        },
      },
    },
  });
  res.status(201).json(newEmoji);
});

export const getEmoji = asyncHandler(async (req, res) => {
  const studyId = req.query.studyId;

  if (!studyId) {
    return res.status(400).json({ error: "studyId is required" });
  }

  const emojis = await prisma.emoji.groupBy({
    by: ["emoji"],
    where: {
      studyId: studyId,
    },
    _count: {
      emoji: true,
    },
  });

  res.status(200).json(emojis);
});
