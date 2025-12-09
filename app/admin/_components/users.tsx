import { prisma } from "@/lib/prisma";
import { CardCounterUser } from "../_components/user/cardCounterUser";

export async function Users() {
  const now = new Date();
  const totalUsers = await prisma.user.count();
  const connectedUsers = (
    await prisma.session.groupBy({
      by: ["userId"],
      where: {
        expiresAt: { gt: now },
      },
    })
  ).length;
  return (
    <div className="grid grid-cols-4 gap-4 grid-rows-1">
      <CardCounterUser count={totalUsers} title="Total Users" />
      <CardCounterUser count={connectedUsers} title="Connected Users" />
    </div>
  );
}
