/*
  Warnings:

  - You are about to drop the `Banner` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CommunityHashtag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CommunityLike` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CommunityPhoto` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Message` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Room` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CommunityHashtagToCommunityPhoto` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_RoomToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Banner" DROP CONSTRAINT "Banner_userId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_photoId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userId_fkey";

-- DropForeignKey
ALTER TABLE "CommunityLike" DROP CONSTRAINT "CommunityLike_photoId_fkey";

-- DropForeignKey
ALTER TABLE "CommunityLike" DROP CONSTRAINT "CommunityLike_userId_fkey";

-- DropForeignKey
ALTER TABLE "CommunityPhoto" DROP CONSTRAINT "CommunityPhoto_userId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_roomId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_userId_fkey";

-- DropForeignKey
ALTER TABLE "_CommunityHashtagToCommunityPhoto" DROP CONSTRAINT "_CommunityHashtagToCommunityPhoto_A_fkey";

-- DropForeignKey
ALTER TABLE "_CommunityHashtagToCommunityPhoto" DROP CONSTRAINT "_CommunityHashtagToCommunityPhoto_B_fkey";

-- DropForeignKey
ALTER TABLE "_RoomToUser" DROP CONSTRAINT "_RoomToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_RoomToUser" DROP CONSTRAINT "_RoomToUser_B_fkey";

-- DropTable
DROP TABLE "Banner";

-- DropTable
DROP TABLE "Comment";

-- DropTable
DROP TABLE "CommunityHashtag";

-- DropTable
DROP TABLE "CommunityLike";

-- DropTable
DROP TABLE "CommunityPhoto";

-- DropTable
DROP TABLE "Message";

-- DropTable
DROP TABLE "Room";

-- DropTable
DROP TABLE "_CommunityHashtagToCommunityPhoto";

-- DropTable
DROP TABLE "_RoomToUser";
