/*
  Warnings:

  - You are about to drop the column `avator` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `bio` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "avator",
DROP COLUMN "bio",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
ADD COLUMN     "birth" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "gender" TEXT,
ALTER COLUMN "email" DROP NOT NULL;
