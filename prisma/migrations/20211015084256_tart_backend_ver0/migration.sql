/*
  Warnings:

  - Added the required column `minimunPrice` to the `Art` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Art" ADD COLUMN     "minimunPrice" INTEGER NOT NULL;
