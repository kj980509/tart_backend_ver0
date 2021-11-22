/*
  Warnings:

  - You are about to drop the column `EndWorkingDay` on the `Art` table. All the data in the column will be lost.
  - You are about to drop the column `EndWorkingMonth` on the `Art` table. All the data in the column will be lost.
  - You are about to drop the column `EndWorkingYear` on the `Art` table. All the data in the column will be lost.
  - You are about to drop the column `StartWorkingDay` on the `Art` table. All the data in the column will be lost.
  - You are about to drop the column `StartWorkingMonth` on the `Art` table. All the data in the column will be lost.
  - You are about to drop the column `StartWorkingYear` on the `Art` table. All the data in the column will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `WorkingEndDay` to the `Art` table without a default value. This is not possible if the table is not empty.
  - Added the required column `WorkingEndMonth` to the `Art` table without a default value. This is not possible if the table is not empty.
  - Added the required column `WorkingEndYear` to the `Art` table without a default value. This is not possible if the table is not empty.
  - Added the required column `WorkingStartDay` to the `Art` table without a default value. This is not possible if the table is not empty.
  - Added the required column `WorkingStartMonth` to the `Art` table without a default value. This is not possible if the table is not empty.
  - Added the required column `WorkingStartYear` to the `Art` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Art" DROP COLUMN "EndWorkingDay",
DROP COLUMN "EndWorkingMonth",
DROP COLUMN "EndWorkingYear",
DROP COLUMN "StartWorkingDay",
DROP COLUMN "StartWorkingMonth",
DROP COLUMN "StartWorkingYear",
ADD COLUMN     "WorkingEndDay" INTEGER NOT NULL,
ADD COLUMN     "WorkingEndMonth" INTEGER NOT NULL,
ADD COLUMN     "WorkingEndYear" INTEGER NOT NULL,
ADD COLUMN     "WorkingStartDay" INTEGER NOT NULL,
ADD COLUMN     "WorkingStartMonth" INTEGER NOT NULL,
ADD COLUMN     "WorkingStartYear" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Category";

-- CreateTable
CREATE TABLE "ArtCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ArtCategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Art" ADD CONSTRAINT "Art_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ArtCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
