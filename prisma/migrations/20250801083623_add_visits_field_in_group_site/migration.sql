-- DropIndex
DROP INDEX `site_GroupSiteId_fkey` ON `site`;

-- AlterTable
ALTER TABLE `groupsite` ADD COLUMN `visits` INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE `site` ADD CONSTRAINT `site_GroupSiteId_fkey` FOREIGN KEY (`GroupSiteId`) REFERENCES `GroupSite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
