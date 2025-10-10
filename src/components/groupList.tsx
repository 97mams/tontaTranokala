import { getUser } from "@/lib/auth-server";
import { prisma } from "@/lib/prisma";
import { ItemSidebar } from "./itmeSitebar";

export async function GroupeList({ type }: { type: "site" | "plateform" }) {
  const user = await getUser();
  const groups = await prisma.groupSite.findMany({
    where: { userId: user?.id },
    select: { id: true, title: true, type: true },
  });

  const filteredGroups = groups.filter((group) => group.type === type);

  return (
    <div className="w-full flex flex-col">
      {filteredGroups.map((group) => (
        <ItemSidebar
          key={group.id}
          id={group.id}
          title={group.title}
          type={group.type}
        />
      ))}
    </div>
  );
}
