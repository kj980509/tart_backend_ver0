/*
  Warnings:

  - Added the required column `artId` to the `ArtAnswer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ArtAnswer" ADD COLUMN     "artId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ArtAnswer" ADD CONSTRAINT "ArtAnswer_artId_fkey" FOREIGN KEY ("artId") REFERENCES "Art"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
