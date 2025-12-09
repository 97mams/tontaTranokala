"use server";

import { prisma } from "@/lib/prisma";
import { countIdbyCreateAt } from "../../server/admin";
import { Chart } from "./_components/chart";
import { ListUsers } from "./_components/listUsers";
import { Users } from "./_components/users";

export default async function Page() {
  const users = await prisma.user.findMany({
    select: { id: true, name: true, email: true, createdAt: true },
  });

  const additionalData = users.map((user) => {
    const dateFin = new Date(Date.now());
    const date = new Date(user.createdAt);
    const diffrenceInTime = dateFin.getTime() - date.getTime();
    const diffrenceInDays = Math.ceil(diffrenceInTime / (1000 * 3600 * 24));

    if (diffrenceInDays <= 30) {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        recent: true,
      };
    } else {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        recent: false,
      };
    }
  });

  const chartData = await countIdbyCreateAt();

  if (!users) {
    return "without users";
  }

  return (
    <div className="w-full overflow-scroll pt-8 px-20 flex flex-col gap-4">
      <Users />
      <Chart data={chartData} />
      <ListUsers data={additionalData} />{" "}
    </div>
  );
}
