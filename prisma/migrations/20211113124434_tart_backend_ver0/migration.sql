/*
  Warnings:

  - You are about to drop the `Feed` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FeedComment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FeedLike` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FeedPhoto` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Message` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Room` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_RoomToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Feed" DROP CONSTRAINT "Feed_userId_fkey";

-- DropForeignKey
ALTER TABLE "FeedComment" DROP CONSTRAINT "FeedComment_feedId_fkey";

-- DropForeignKey
ALTER TABLE "FeedComment" DROP CONSTRAINT "FeedComment_userId_fkey";

-- DropForeignKey
ALTER TABLE "FeedLike" DROP CONSTRAINT "FeedLike_feedId_fkey";

-- DropForeignKey
ALTER TABLE "FeedLike" DROP CONSTRAINT "FeedLike_userId_fkey";

-- DropForeignKey
ALTER TABLE "FeedPhoto" DROP CONSTRAINT "FeedPhoto_feedId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_roomId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_userId_fkey";

-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_artId_fkey";

-- DropForeignKey
ALTER TABLE "_RoomToUser" DROP CONSTRAINT "_RoomToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_RoomToUser" DROP CONSTRAINT "_RoomToUser_B_fkey";

-- DropTable
DROP TABLE "Feed";

-- DropTable
DROP TABLE "FeedComment";

-- DropTable
DROP TABLE "FeedLike";

-- DropTable
DROP TABLE "FeedPhoto";

-- DropTable
DROP TABLE "Message";

-- DropTable
DROP TABLE "Room";

-- DropTable
DROP TABLE "_RoomToUser";
