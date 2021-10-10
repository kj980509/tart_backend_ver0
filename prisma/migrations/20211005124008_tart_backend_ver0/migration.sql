/*
  Warnings:

  - You are about to drop the column `category` on the `Art` table. All the data in the column will be lost.
  - You are about to drop the column `madeDate` on the `Art` table. All the data in the column will be lost.
  - Added the required column `EndWorkingDay` to the `Art` table without a default value. This is not possible if the table is not empty.
  - Added the required column `EndWorkingMonth` to the `Art` table without a default value. This is not possible if the table is not empty.
  - Added the required column `EndWorkingYear` to the `Art` table without a default value. This is not possible if the table is not empty.
  - Added the required column `StartWorkingDay` to the `Art` table without a default value. This is not possible if the table is not empty.
  - Added the required column `StartWorkingMonth` to the `Art` table without a default value. This is not possible if the table is not empty.
  - Added the required column `StartWorkingYear` to the `Art` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Art` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Art" DROP COLUMN "category",
DROP COLUMN "madeDate",
ADD COLUMN     "EndWorkingDay" INTEGER NOT NULL,
ADD COLUMN     "EndWorkingMonth" INTEGER NOT NULL,
ADD COLUMN     "EndWorkingYear" INTEGER NOT NULL,
ADD COLUMN     "StartWorkingDay" INTEGER NOT NULL,
ADD COLUMN     "StartWorkingMonth" INTEGER NOT NULL,
ADD COLUMN     "StartWorkingYear" INTEGER NOT NULL,
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);
