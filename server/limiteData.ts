"use server";

import { getUser } from "@/lib/auth-server";
import { prisma } from "@/lib/prisma";

export async function limiteData(limite: number): Promise<number> {
  const userGroup = await countGroupByUser();
  let result: number = 0;
  if (userGroup !== undefined) {
    result = limite - userGroup;
  }

  return result;
}

export async function countGroupByUser(): Promise<number | undefined> {
  const user = await getUser();
  const numberGroupRegisterByUser = await prisma.user.findUnique({
    where: { id: user?.id },
    include: { _count: { select: { groupeSite: true } } },
  });
  return numberGroupRegisterByUser?._count.groupeSite;
}
