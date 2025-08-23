-- DropForeignKey
ALTER TABLE `plateform` DROP FOREIGN KEY `plateform_GroupSiteId_fkey`;

-- DropForeignKey
ALTER TABLE `site` DROP FOREIGN KEY `site_GroupSiteId_fkey`;

-- DropIndex
DROP INDEX `plateform_GroupSiteId_fkey` ON `plateform`;

-- DropIndex
DROP INDEX `site_GroupSiteId_fkey` ON `site`;

-- AddForeignKey
ALTER TABLE `site` ADD CONSTRAINT `site_GroupSiteId_fkey` FOREIGN KEY (`GroupSiteId`) REFERENCES `GroupSite`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plateform` ADD CONSTRAINT `plateform_GroupSiteId_fkey` FOREIGN KEY (`GroupSiteId`) REFERENCES `GroupSite`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
