import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { PrismaClient } from "@prisma/client";
import { asyncHandler } from "../middlewares/habitAsyncHandler.js";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

export const emoji = asyncHandler(async(req,res) => {
    const { emoji } = req.body;
    const newEmoji = await prisma.emoji.create({
        data: {emoji},
    });
    res.status(201).json(newEmoji);
})


export const getEmoji = asyncHandler(async(req,res) => {
    const emojis = await prisma.emoji.groupBy({
        by: ['emoji'],
        _count: {
            emoji: true,
        },
    });
    res.json(emojis)
});