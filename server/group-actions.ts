import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import z from "zod";

const group = z.object({
  title: z.string().min(1, "Title is required"),
  type: z.string().default("site"),
});

export async function updateGroupSiteVisits(groupId: number) {
  return await prisma.groupSite.update({
    where: { id: groupId },
    data: { visits: { increment: 1 } },
  });
}

export async function groupSiteDeleteAction(formData: FormData) {
  const id: number = Number(formData.get("id"));
  const groupSite = await prisma.groupSite.delete({
    where: { id: id },
  });
  console.log(groupSite);
  if (!group) {
    return { error: true, message: "id is not matching" };
  }

  revalidatePath("/");

  return { success: true, message: "delete successfully" };
}
