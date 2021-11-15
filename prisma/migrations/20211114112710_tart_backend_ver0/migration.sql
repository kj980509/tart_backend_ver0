/*
  Warnings:

  - You are about to drop the column `postCommentId` on the `PostCommentLike` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[commentId,userId]` on the table `PostCommentLike` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `commentId` to the `PostCommentLike` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PostCommentLike" DROP CONSTRAINT "PostCommentLike_postCommentId_fkey";

-- DropIndex
DROP INDEX "PostCommentLike_postCommentId_userId_key";

-- AlterTable
ALTER TABLE "PostCommentLike" DROP COLUMN "postCommentId",
ADD COLUMN     "commentId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "PostCommentLike_commentId_userId_key" ON "PostCommentLike"("commentId", "userId");

-- AddForeignKey
ALTER TABLE "PostCommentLike" ADD CONSTRAINT "PostCommentLike_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "PostComment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
