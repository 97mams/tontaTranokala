import { prisma } from "@/lib/prisma";

export async function updateGroupSiteVisits(groupId: number) {
  return await prisma.groupSite.update({
    where: { id: groupId },
    data: { visits: { increment: 1 } }
  });
}