import { PrismaClient } from "@prisma/client";
import { STUDY_DATA, HABIT_DATA, COMPLETE_HABIT_DATA } from "./mock.js";

const prisma = new PrismaClient();

async function main() {
  // 기존 데이터 삭제
  // 목 데이터 삽입
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
