/*
  Warnings:

  - Added the required column `background` to the `Study` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Study` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nickname` to the `Study` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Study` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `Study` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Study" ADD COLUMN     "background" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "nickname" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ALTER COLUMN "name" SET NOT NULL;
