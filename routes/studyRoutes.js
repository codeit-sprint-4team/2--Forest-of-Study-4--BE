import { Router } from "express";
import {
  getStudies,
  createStudy,
  getStudyById,
} from "../controllers/studyController.js";

const router = Router();

router.get("/studies", getStudies);
router.post("/studies", createStudy);
router.get("/studies/:studyId", getStudyById);

export default router;
