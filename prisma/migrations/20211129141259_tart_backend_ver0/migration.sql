/*
  Warnings:

  - Added the required column `explain` to the `Art` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Art" ADD COLUMN     "explain" TEXT NOT NULL;
