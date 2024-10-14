import { Router } from "express";
import {
  getStudies,
  createStudy,
  getStudyById,
} from "../controllers/studyCreateController.js";

const router = Router();

router.get("/studies", getStudies);
router.post("/studies", createStudy);
router.get("/studies/:studyId", getStudyById);

export default router;
