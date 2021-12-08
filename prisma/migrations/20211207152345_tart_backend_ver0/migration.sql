/*
  Warnings:

  - You are about to drop the column `minimumBidPrice` on the `Art` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Art" DROP COLUMN "minimumBidPrice",
ADD COLUMN     "minimumPrice" INTEGER;
