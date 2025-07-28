/*
  Warnings:

  - Added the required column `GroupSiteId` to the `site` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `site` ADD COLUMN `GroupSiteId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `GroupSite` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `GroupSite_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `site` ADD CONSTRAINT `site_GroupSiteId_fkey` FOREIGN KEY (`GroupSiteId`) REFERENCES `GroupSite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
