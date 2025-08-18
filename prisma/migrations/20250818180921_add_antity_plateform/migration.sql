-- CreateTable
CREATE TABLE `plateform` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NULL,
    `GroupSiteId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `plateform_url_key`(`url`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `plateform` ADD CONSTRAINT `plateform_GroupSiteId_fkey` FOREIGN KEY (`GroupSiteId`) REFERENCES `GroupSite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
