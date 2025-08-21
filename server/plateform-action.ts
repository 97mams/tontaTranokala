"use server";

import { encryptData } from "@/lib/cachingData";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import z from "zod";

const platefromShema = z.object({
  name: z.string(),
  email: z.string(),
  passWord: z.string(),
  description: z.string(),
  url: z.string(),
  groupId: z.number(),
});

export async function formPlateformAction(formData: FormData) {
  const name = formData.get("nameplateform") as string;
  const email = formData.get("email") as string;
  const passWord = formData.get("pwd") as string;
  const description = formData.get("description") as string;
  const url = formData.get("urlplateform") as string;
  const groupId = Number(formData.get("groupeplateform"));

  const hashPassword = encryptData(passWord);
  console.log("hashPassword", hashPassword);

  const result = platefromShema.safeParse({
    name,
    email,
    passWord: hashPassword,
    description,
    url,
    groupId,
  });
  if (!result.success) {
    return { error: true, message: result.error.message };
  }

  const plateform = await prisma.plateform.create({
    data: {
      name: result.data.name,
      email: result.data.email,
      passWord: result.data.passWord,
      description: result.data.description,
      url: result.data.url,
      GroupSiteId: result.data.groupId,
    },
  });

  revalidatePath("/");

  return { success: true, message: "Platform created successfully" };
}
