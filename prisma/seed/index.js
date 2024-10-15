import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  // 각 시딩 파일에서 시딩 함수 호출
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