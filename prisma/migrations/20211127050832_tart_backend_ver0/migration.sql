/*
  Warnings:

  - Added the required column `artId` to the `ArtQuestion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ArtQuestion" ADD COLUMN     "artId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ArtQuestion" ADD CONSTRAINT "ArtQuestion_artId_fkey" FOREIGN KEY ("artId") REFERENCES "Art"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
