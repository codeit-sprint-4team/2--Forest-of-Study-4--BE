import { PrismaClient } from "@prisma/client";
import { seedHabit } from "./habitSeed.js";
import { seedStudy } from "./studySeed.js";
import express from "express"; 
import { router as studyManagerRoutes } from "./src/routes/studyManagerRoutes.js";

const prisma = new PrismaClient();
const app = express();

app.use(express.json()); // JSON 파싱 미들웨어 등록
app.use("/api", studyManagerRoutes); // 라우트 연결


async function main() {
  console.log("Starting seeding process...");
  await seedStudy(prisma);
  await seedHabit(prisma);
  console.log("Seeding process completed.");
}

//데이터베이스와의 연결 종료
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

