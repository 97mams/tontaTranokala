"use server";

import { prisma } from "@/lib/prisma";

type chartData = {
  day: string;
  plateform: string;
  site: string;
};

// export async function chartData(): chartData[] {}

export async function dataChart() {
  const site: chartData[] = await prisma.$queryRaw`
     SELECT
    DATE(createdAt) AS day,
    COUNT(*) AS site
  FROM site
  GROUP BY DATE(createdAt)
  ORDER BY day;
`;
  console.log(site);

  const plateform: chartData[] = await prisma.$queryRaw`
     SELECT
    DATE(createdAt) AS day,
    COUNT(*) AS plateform
  FROM plateform
  GROUP BY DATE(createdAt)
  ORDER BY day;
`;
  return chartDataChema(plateform, site);
}

/**
 *  format for data chart
 * @param plateform:String
 * @param site:Number
 * @returns
 */
function chartDataChema(
  plateform: Array<{ day: string; plateform: string }>,
  site: Array<{ day: string; site: string }>
) {
  let result: chartData[] = [];

  for (let i = 0; i < site.length; i++) {
    const siteDate = site[i].day;

    if (getDATE(siteDate) === getDATE(plateform[i].day)) {
      result.push({
        day: getDATE(siteDate),
        plateform: Array.from(plateform[i].plateform)[0],
        site: site[i].site,
      });
    } else {
      result.push({
        day: getDATE(siteDate),
        plateform: plateform[i] ? Array.from(plateform[i].plateform)[0] : 0,
        site: site[i].site,
      });
    }
  }

  return result;
}

function getDATE(date: string) {
  const d = new Date(date);
  return d.getMonth() + "-" + d.getDay() + "-" + d.getFullYear();
}
