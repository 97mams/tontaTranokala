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

  const formattedPlateformData = setData(plateformData);
  const formattedSiteData = setData(siteData);
  return flatData([...formattedPlateformData, ...formattedSiteData]);
};

/**
 * Count id grouped by createdAt date
 *
 * @param data {id: number, createdAt: Date}
 * @returns {id: number, createdAt: string} with count of id grouped by createdAt date
 */
function flatData(data: data) {
  const result: any[] = [];
  console.log("data", data);
  for (let index = 0; index < data.length - 1; index++) {
    let id = 1;
    if (data[index].createdAt === data[index + 1]?.createdAt) {
      console.log("true");
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
 * convert Date to Day-Month-Year format
 *
 * @param data {id: number , createdAt: Date}
 * @returns {id: number , createdAt: string} in Day-Month-Year format
 */
function setData(data: data) {
  const array: any[] = [];
  for (let i = 0; i < data.length; i++) {
    const formattedDate = DayMonthYear(data[i].createdAt);
    array.push({ id: data[i].id, createdAt: formattedDate });
  }
  return array;
}

function DayMonthYear(date: Date) {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}
