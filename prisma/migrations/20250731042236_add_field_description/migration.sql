/*
  Warnings:

  - Added the required column `description` to the `site` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `GroupSite_title_key` ON `groupsite`;

-- DropIndex
DROP INDEX `site_GroupSiteId_fkey` ON `site`;

-- AlterTable
ALTER TABLE `site` ADD COLUMN `description` VARCHAR(191) NOT NULL,
    MODIFY `url` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `site` ADD CONSTRAINT `site_GroupSiteId_fkey` FOREIGN KEY (`GroupSiteId`) REFERENCES `GroupSite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
