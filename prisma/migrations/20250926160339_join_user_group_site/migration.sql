/*
  Warnings:

  - Added the required column `userId` to the `GroupSite` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `GroupSite` ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `GroupSite` ADD CONSTRAINT `GroupSite_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
