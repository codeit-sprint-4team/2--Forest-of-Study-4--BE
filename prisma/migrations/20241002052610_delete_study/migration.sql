/*
  Warnings:

  - You are about to drop the column `studyId` on the `CompletedHabit` table. All the data in the column will be lost.
  - You are about to drop the column `studyId` on the `Habit` table. All the data in the column will be lost.
  - You are about to drop the `Study` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CompletedHabit" DROP CONSTRAINT "CompletedHabit_habitId_fkey";

-- DropForeignKey
ALTER TABLE "CompletedHabit" DROP CONSTRAINT "CompletedHabit_studyId_fkey";

-- DropForeignKey
ALTER TABLE "Habit" DROP CONSTRAINT "Habit_studyId_fkey";

-- AlterTable
ALTER TABLE "CompletedHabit" DROP COLUMN "studyId";

-- AlterTable
ALTER TABLE "Habit" DROP COLUMN "studyId";

-- DropTable
DROP TABLE "Study";

-- AddForeignKey
ALTER TABLE "CompletedHabit" ADD CONSTRAINT "CompletedHabit_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "Habit"("id") ON DELETE CASCADE ON UPDATE CASCADE;
