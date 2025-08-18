/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `GroupSite` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `site_name_key` ON `site`;

-- CreateIndex
CREATE UNIQUE INDEX `GroupSite_title_key` ON `GroupSite`(`title`);
