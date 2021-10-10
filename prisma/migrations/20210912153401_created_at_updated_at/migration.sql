/*
  Warnings:

  - You are about to drop the column `usernam` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userName]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_usernam_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "usernam",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");
