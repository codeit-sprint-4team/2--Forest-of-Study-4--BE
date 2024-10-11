/*
  Warnings:

  - Added the required column `studyId` to the `CompletedHabit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studyId` to the `Habit` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CompletedHabit" DROP CONSTRAINT "CompletedHabit_habitId_fkey";

-- AlterTable
ALTER TABLE "CompletedHabit" ADD COLUMN     "studyId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Habit" ADD COLUMN     "studyId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Study" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Study_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_studyId_fkey" FOREIGN KEY ("studyId") REFERENCES "Study"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedHabit" ADD CONSTRAINT "CompletedHabit_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "Habit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompletedHabit" ADD CONSTRAINT "CompletedHabit_studyId_fkey" FOREIGN KEY ("studyId") REFERENCES "Study"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
