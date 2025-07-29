"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { toast } from "sonner";
import { z } from "zod";

const site = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  url: z.string().optional,
  });

const group = z.object({
  title: z.string().min(1, "Title is required")
});

export async function formGroupAction(formData: FormData) {

  const title = formData.get("title") as string;

  const input = group.safeParse({ title });
  if (!input.success) {
    return {error: true, message: input.error}
  }

  const addSiteGroup = await prisma.groupSite.create({
    data: {
      title: input.data.title,
    },
  });

  if (!addSiteGroup) {
    return {error: true, message: "data not found"}
  }

  revalidatePath("/")

  return {success: true, message: input.success}
}