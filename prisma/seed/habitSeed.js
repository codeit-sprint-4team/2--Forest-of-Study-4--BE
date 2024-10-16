import { HABIT_DATA, COMPLETE_HABIT_DATA } from "../mock/habitMock.js";

export async function seedHabit(prisma) {
  // 기존 데이터 삭제
  await prisma.habit.deleteMany();
  await prisma.completedHabit.deleteMany();

  //데이터 삽입
  await prisma.habit.createMany({
    data: HABIT_DATA,
    skipDuplicates: true,
  });

  await prisma.completedHabit.createMany({
    data: COMPLETE_HABIT_DATA,
    skipDuplicates: true,
  });

  console.log("Seeding completed successfully");
}
