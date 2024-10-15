import { PrismaClient } from "@prisma/client";
import { seedHabit } from "./habitSeed.js";
import { seedStudy } from "./studySeed.js";

const prisma = new PrismaClient();

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


  console.log(process.cwd());