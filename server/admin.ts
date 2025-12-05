import { prisma } from "@/lib/prisma";

type data = {
  id: number;
  createdAt: Date;
}[];

type dataChart =
  | {
      plateform: number;
      createdAt: Date;
    }
  | { site: number; createdAt: Date }[];

async function getPlateform() {
  const plateform = await prisma.plateform.findMany({
    select: { id: true, createdAt: true },
  });
  return plateform;
}

async function getSite() {
  const site = await prisma.site.findMany({
    select: { id: true, createdAt: true },
  });
  return site;
}

export const countIdbyCreateAt = async () => {
  const plateformData = await getPlateform();
  const siteData = await getSite();

  const formattedPlateformData = setData(plateformData).map((item) => ({
    plateform: item.id,
    date: item.createdAt,
  }));
  const formattedSiteData = setData(siteData).map((item) => ({
    site: item.id,
    date: item.createdAt,
  }));
  return flatData([...formattedPlateformData, ...formattedSiteData]);
};

function flatData(data: dataChart) {
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
