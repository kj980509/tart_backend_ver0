/*
  Warnings:

  - Added the required column `category` to the `Art` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Art" ADD COLUMN     "category" TEXT NOT NULL;
