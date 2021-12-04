/*
  Warnings:

  - You are about to drop the column `isAnswerd` on the `ArtQuestion` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ArtQuestion" DROP COLUMN "isAnswerd",
ADD COLUMN     "isAnswered" BOOLEAN NOT NULL DEFAULT false;
