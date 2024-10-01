import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

const corsOptions = {
  origin: ["http://localhost:3000"],
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.listen(process.env.PORT || 3000, () => console.log("Server Started"));
