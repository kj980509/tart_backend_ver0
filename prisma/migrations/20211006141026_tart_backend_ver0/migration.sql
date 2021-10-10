/*
  Warnings:

  - You are about to drop the column `file` on the `ArtPhoto` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `ArtPhoto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ArtPhoto" DROP COLUMN "file",
ADD COLUMN     "imageUrl" TEXT NOT NULL;
