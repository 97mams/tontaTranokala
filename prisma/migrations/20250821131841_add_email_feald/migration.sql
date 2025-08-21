/*
  Warnings:

  - Added the required column `email` to the `plateform` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passWord` to the `plateform` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `plateform` ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `passWord` VARCHAR(191) NOT NULL;
