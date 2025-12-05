"use server";

import { prisma } from "@/lib/prisma";
import { countIdbyCreateAt } from "../../server/admin";
import { Chart } from "./_components/chart";
import { ListUsers } from "./_components/listUsers";
import { Users } from "./_components/users";

export default async function Page() {
  const users = await prisma.user.findMany({
    select: { id: true, name: true, email: true },
  });

  const chartData = await countIdbyCreateAt();

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
