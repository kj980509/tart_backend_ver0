/*
  Warnings:

  - You are about to drop the column `minimunPrice` on the `Art` table. All the data in the column will be lost.
  - Added the required column `minimumPrice` to the `Art` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Art" DROP COLUMN "minimunPrice",
ADD COLUMN     "minimumPrice" INTEGER NOT NULL;
