// routes/studyRoutes.js
import express from "express";
import { updateStudy, deleteStudy } from "../controllers/studyController.js";

const router = express.Router();

// 스터디 수정: PUT /api/studies/:studyId
router.put("/:studyId", updateStudy);

// 스터디 삭제: DELETE /api/studies/:studyId
router.delete("/:studyId", deleteStudy);

export default router;
