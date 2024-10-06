-- DropForeignKey
ALTER TABLE "CompletedHabit" DROP CONSTRAINT "CompletedHabit_habitId_fkey";

-- DropForeignKey
ALTER TABLE "CompletedHabit" DROP CONSTRAINT "CompletedHabit_studyId_fkey";

-- DropForeignKey
ALTER TABLE "Habit" DROP CONSTRAINT "Habit_studyId_fkey";

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_studyId_fkey" FOREIGN KEY ("studyId") REFERENCES "Study"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedHabit" ADD CONSTRAINT "CompletedHabit_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "Habit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedHabit" ADD CONSTRAINT "CompletedHabit_studyId_fkey" FOREIGN KEY ("studyId") REFERENCES "Study"("id") ON DELETE CASCADE ON UPDATE CASCADE;
