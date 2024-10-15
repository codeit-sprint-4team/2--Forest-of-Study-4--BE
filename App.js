import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();
import { router as habitRoutes } from "./routes/habitRoutes.js";
import habitRecordRoutes from "./routes/habitRecordRoutes.js";
import emojiRoutes from "./routes/emojiRoutes.js"

const corsOptions = {
  origin: "*",
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.use("/habits", habitRoutes);
app.use("/records", habitRecordRoutes);
app.use("/emojis", emojiRoutes);

app.listen(process.env.PORT || 3000, () => console.log("Server Started"));
