import { prisma } from "@/lib/prisma";
import { UrlHelper } from "@/lib/urlHelper";
import Link from "next/link";
import { ButtonAction } from "./groupButtonActions";

export async function GroupeList({ type }: { type: "site" | "plateform" }) {
  const groups = await prisma.groupSite.findMany({
    select: { id: true, title: true, type: true },
  });

  const filteredGroups = groups.filter((group) => group.type === type);

  return (
    <div className="w-full flex flex-col">
      {filteredGroups.map((group) => (
        <div
          className="w-full rounded-sm px-2 flex items-center hover:bg-muted"
          key={group.id}
        >
          <Link
            href={
              "/tranokala/" +
              group.type +
              "/" +
              UrlHelper(`${group.id}-${group.title}`)
            }
            className="  w-full text-sm p-3"
          >
            {group.title}
          </Link>
          <ButtonAction id={group.id} />
        </div>
      ))}
    </div>
  );
}
