/*
  Warnings:

  - Made the column `studyId` on table `CompletedHabit` required. This step will fail if there are existing NULL values in that column.
  - Made the column `studyId` on table `Habit` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "CompletedHabit" ALTER COLUMN "studyId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Habit" ALTER COLUMN "studyId" SET NOT NULL;
