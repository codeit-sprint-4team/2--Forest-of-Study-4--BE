import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();


import { router as habitRoutes } from "./routes/habitRoutes.js";
import { studyRoutes } from "./routes/studyRoutes.js"; // 스터디 라우트 


const corsOptions = {
  origin: "*",
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.use("/habits", habitRoutes);
app.use("/api/studies", studyRoutes); // 스터디 라우트 연결

app.listen(process.env.PORT || 3000, () => console.log("Server Started"));
