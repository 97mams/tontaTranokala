"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { PersonalInfo } from "../../_components/user/personalInfo";
import { ChartRadialLabel } from "../../_components/user/Radical.Chart";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const user = await prisma.user.findUnique({
    where: { id: id },
    select: { id: true, name: true, email: true },
  });

  const userData = await prisma.groupSite.findMany({
    where: { userId: id },
    include: { siteId: true, palteformId: true },
  });

  const totalSites = userData.filter((site) => site.type == "site").length;
  const totalPalteforms = userData.filter(
    (site) => site.type == "palteform"
  ).length;

  const chartData = [
    {
      type: "plateform",
      registers: totalPalteforms,
      fill: "var(--color-plateform)",
    },
    {
      type: "site",
      registers: totalSites,
      fill: "var(--color-site)",
    },
  ];

  if (!user) {
    return redirect("/admin");
  }

  return (
    <div className="p-8 w-full">
      <h1 className="text-2xl font-bold mb-4">User Detail</h1>
      <PersonalInfo user={user} />
      <ChartRadialLabel user={chartData} />
    </div>
  );
}
