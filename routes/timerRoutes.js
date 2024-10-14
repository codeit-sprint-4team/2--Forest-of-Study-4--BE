import express from 'express';
import { completeFocusSession } from '../controllers/timerController.js';

const router = express.Router();

router.post('/timer/success', completeFocusSession);

export default router;
