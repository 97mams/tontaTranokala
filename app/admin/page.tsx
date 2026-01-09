import { prisma } from "@/lib/prisma";
import { countIdbyCreateAt } from "../../server/admin";
import { Chart } from "./_components/chart";
import { ListUsers } from "./_components/listUsers";
import { Users } from "./_components/users";

export const dynamic = "force-dynamic";

export default async function Page() {
  const users = await prisma.user.findMany({
    select: { id: true, name: true, email: true, createdAt: true },
    orderBy: { createdAt: "desc" },
  });

  const additionalData = users.map((user) => {
    const diffDays = Math.ceil(
      (Date.now() - new Date(user.createdAt).getTime()) / (1000 * 3600 * 24)
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      recent: diffDays <= 30,
    };
  });

  const chartData = await countIdbyCreateAt();

  return (
    <div className="w-full overflow-scroll pt-8 px-20 flex flex-col gap-4">
      <Users />
      <Chart data={chartData} />
      <ListUsers data={additionalData} />
    </div>
  );
}
