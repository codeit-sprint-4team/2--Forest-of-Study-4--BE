import { STUDY_DATA } from "../mock/studyMock.js";

export async function seedStudy(prisma) {
  // 기존 데이터 삭제
  await prisma.study.deleteMany();

  //데이터 삽입
  await prisma.study.createMany({
    data: STUDY_DATA,
    skipDuplicates: true,
  });
  console.log("Seeding completed successfully");
}
