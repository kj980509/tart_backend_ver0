/*
  Warnings:

  - Added the required column `basePrice` to the `Art` table without a default value. This is not possible if the table is not empty.
  - Added the required column `presentPrice` to the `Art` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Art" ADD COLUMN     "basePrice" INTEGER NOT NULL,
ADD COLUMN     "presentPrice" INTEGER NOT NULL;
