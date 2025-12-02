"use server";

import { prisma } from "@/lib/prisma";
import { Chart } from "./_components/chart";
import { ListUsers } from "./_components/listUsers";
import { Users } from "./_components/users";
import { dataChart } from "../../server/admin";

type chartData = {
  day: string;
  total: number;
};

export default async function Page() {
  const users = await prisma.user.findMany({
    select: { id: true, name: true, email: true },
  });

  const chartData = await dataChart();

  if (!users) {
    return "without users";
  }

  const usersCount = users.length;

  return (
    <div className="w-full overflow-scroll pt-8 px-20 flex flex-col gap-4">
      <Users />
      <Chart data={chartData} />
      <ListUsers data={users} />{" "}
    </div>
  );
}
