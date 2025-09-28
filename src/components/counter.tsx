"use server";

import { getUser } from "@/lib/auth-server";
import { prisma } from "@/lib/prisma";
import { Button } from "./ui/button";

export async function Counter() {
  let count = 6;
  const user = await getUser();
  const countRegister = await prisma.user.findUnique({
    where: { id: user?.id },
    include: { _count: { select: { groupeSite: true } } },
  });
  if (countRegister) {
    count = count - countRegister?._count.groupeSite;
  }
  return <Button variant={"outline"}>{count}</Button>;
}
