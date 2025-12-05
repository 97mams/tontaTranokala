import { prisma } from "@/lib/prisma";

/**
 * Type definition for data with id and createdAt date
 */
type data = {
  id: number;
  createdAt: Date;
}[];

/**
 * Get platform data
 *
 * @returns {id:number, createdAt: Date}[]
 */
async function getPlateform() {
  const plateform = await prisma.plateform.findMany({
    select: { id: true, createdAt: true },
  });
  return plateform;
}

/**
 * Get site data
 *
 * @returns {id:number, createdAt: Date}[]
 */
async function getSite() {
  const site = await prisma.site.findMany({
    select: { id: true, createdAt: true },
  });
  return site;
}

/**
 * Count id by createdAt date for site and platform
 *
 * @returns {site:number, plateform:number, date:string}[]
 */
export const countIdbyCreateAt = async () => {
  const plateformData = await getPlateform();
  const siteData = await getSite();
  return unionSitePlateform(
    flatData(setData(plateformData)),
    flatData(setData(siteData))
  );
};

function unionSitePlateform(
  siteData: data,
  plateformData: data
): { site: number; plateform: number; date: Date }[] {
  const site = siteData.map((item) => {
    return { site: item.id as number, date: item.createdAt as Date };
  });
  const plateform = plateformData.map((item) => {
    return { plateform: item.id as number, date: item.createdAt as Date };
  });
  const result: { site: number; plateform: number; date: Date }[] = [];
  site.forEach((siteItem, k) => {
    const plateformItem = plateform.find((p) => p.date === siteItem.date);
    result.push({
      site: siteItem.site,
      plateform: plateform[k].plateform,
      date: siteItem.date,
    });
  });
  return result;
}

/**
 * Count id grouped by createdAt date
 *
 * @param data {id: number, createdAt: Date}
 * @returns {id: number, createdAt: string} with count of id grouped by createdAt date
 */
function flatData(data: data) {
  const result: any[] = [];
  for (let index = 0; index < data.length - 1; index++) {
    let id = 1;
    if (data[index].createdAt === data[index + 1]?.createdAt) {
      id += 1;
    } else if (data[index].createdAt === data[index - 1]?.createdAt) {
      continue;
    } else {
      id = 1;
    }
    result.push({ id: id, createdAt: data[index].createdAt });
  }
  return result;
}

/**
 * convert Date to Year-Month-Day format
 *
 * @param data {id: number , createdAt: Date}
 * @returns {id: number , createdAt: string} in Year-Month-Day format
 */
function setData(data: data) {
  const array: any[] = [];
  for (let i = 0; i < data.length; i++) {
    const formattedDate = DayMonthYear(data[i].createdAt);
    array.push({ id: data[i].id, createdAt: formattedDate });
  }
  return array;
}

/**
 * convert Date to Year-Month-Day format
 *
 * @param date
 * @returns {Date} in Year-Month-Day format
 */
function DayMonthYear(date: Date) {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}
