/*
  Warnings:

  - Added the required column `type` to the `jobs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "jobs" ADD COLUMN     "type" "JobType" NOT NULL;
