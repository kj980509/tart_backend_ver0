/*
  Warnings:

  - You are about to drop the column `minimumPrice` on the `Art` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Art" DROP COLUMN "minimumPrice",
ADD COLUMN     "minimumBidPrice" INTEGER;
