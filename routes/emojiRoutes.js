import express from "express";
import { emoji, getEmoji } from "../controllers/emojiController.js"; // 작성한 controller에서 함수 가져오기

const router = express.Router();

router.post("/emoji", emoji);

router.get("/emoji", getEmoji);

export default router;
