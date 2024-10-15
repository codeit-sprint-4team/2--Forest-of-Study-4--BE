import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

import { router as habitRoutes } from "./routes/habitRoutes.js";
import habitRecordRoutes from "./routes/habitRecordRoutes.js";
import studyRoutes from "./routes/studyRoutes.js";
import { router as studyManagerRoutes } from "./routes/studyManagerRoutes.js"; // 구조 분해 할당,,

const corsOptions = {
  origin: "*",
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.use("/habits", habitRoutes);
app.use("/records", habitRecordRoutes);
app.use("/api", studyRoutes);
app.use("/api/studies", studyManagerRoutes);

app.listen(process.env.PORT || 3000, () => console.log("Server Started"));