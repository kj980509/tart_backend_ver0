/*
  Warnings:

  - You are about to drop the column `isSeccessed` on the `Bid` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Bid" DROP COLUMN "isSeccessed",
ADD COLUMN     "isSuccessed" BOOLEAN NOT NULL DEFAULT false;
