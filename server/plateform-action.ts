"use server";

import { prisma } from "@/lib/prisma";
import { caesarCipher } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import z from "zod";

const platefromShema = z.object({
  name: z.string(),
  email: z.string(),
  passWord: z.string().nullable(),
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

  const hashPassword = caesarCipher(passWord, 12);

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
      passWord: result.data.passWord || "",
      description: result.data.description,
      url: result.data.url,
      GroupSiteId: result.data.groupId,
    },
  });

  revalidatePath("/");

  return { success: true, message: "Platform created successfully" };
}

export async function updatePlateformAction(formData: FormData) {
  const id = Number(formData.get("id"));
  const name = formData.get("nameplateform") as string;
  const email = formData.get("email") as string;
  const password = formData.get("pwd") as string;
  const description = formData.get("description") as string;
  const url = formData.get("urlplateform") as string;
  const groupId = Number(formData.get("groupeplateform"));

  const hashPassword = caesarCipher(password, 12);

  console.log("id:", id);

  const result = platefromShema.safeParse({
    id,
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

  const plateform = await prisma.plateform.update({
    where: { id: id },
    data: {
      name: result.data.name,
      email: result.data.email,
      passWord: result.data.passWord || "",
      description: result.data.description,
      url: result.data.url,
    },
  });

  revalidatePath("/");

  return { success: true, message: "Platform updated successfully" };
}

type plateform = {
  name: string;
  email: string;
  passWord: string;
  description: string;
  url: string | null;
  id: number;
  GroupSite: {
    title: string;
    type: string;
  };
};

export const plateformeByGroupId = async (
  plateformId: number
): Promise<plateform[]> => {
  const result = await prisma.plateform.findMany({
    where: { GroupSiteId: plateformId },
    select: {
      id: true,
      name: true,
      description: true,
      url: true,
      email: true,
      passWord: true,
      GroupSite: {
        select: {
          type: true,
          title: true,
        },
      },
    },
  });
  return result;
};

export async function plateformDeleteAction(id: number) {
  const plateform = await prisma.plateform.delete({
    where: { id: id },
  });

  if (!plateform) {
    return { error: true, message: "id is not matching" };
  }
  revalidatePath("/");

  return { success: true, message: "delete successfully" };
}
