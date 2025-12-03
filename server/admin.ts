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
  const castPlateform = plateform.map(Object.values);
  const castSite = site.map(Object.values);

  console.log(castPlateform);
  const result: any[] = [];
  for (let i = 0; i < castPlateform.length; i++) {
    const p = new Set(castPlateform[i]);
    const s = new Set(castSite[i]);
    s.union(p);
  }

  console.log("result", result);
  return [];
}

function getDATE(date: string) {
  const d = new Date(date);
  const newD = d.getDay() + "-" + d.getMonth() + "-" + d.getFullYear();
  return newD;
}
