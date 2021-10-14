/*
  Warnings:

  - Added the required column `artId` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "artId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_artId_fkey" FOREIGN KEY ("artId") REFERENCES "Art"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
