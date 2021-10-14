/*
  Warnings:

  - A unique constraint covering the columns `[feedId,userId]` on the table `FeedLike` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `imageUrl` to the `FeedPhoto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FeedPhoto" ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "FeedLike_feedId_userId_key" ON "FeedLike"("feedId", "userId");
