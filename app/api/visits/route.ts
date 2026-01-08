import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// 🔹 GET : récupérer les visites triées par ordre décroissant
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId)
    return NextResponse.json(
      { success: false, error: "Missing userId" },
      { status: 400 }
    );

  const visits = await prisma.groupSite.findMany({
    where: { userId },
    orderBy: { visits: "desc" },
    select: { id: true, title: true, type: true, visits: true },
  });

  const projectIsVisited = visits.filter((visit) => visit.visits >= 3);

  return NextResponse.json({ success: true, data: projectIsVisited });
}

// 🔹 POST : incrémenter une visite pour un groupSite
export async function POST(req: Request) {
  const { userId, groupSiteId } = await req.json();

  if (!userId || !groupSiteId)
    return NextResponse.json(
      { success: false, error: "Missing userId or groupSiteId" },
      { status: 400 }
    );

  const updated = await prisma.groupSite.upsert({
    where: { id: groupSiteId },
    select: { id: true, visits: true },
    update: { visits: { increment: 1 } },
    create: {
      userId: String(userId),
      id: Number(groupSiteId),
      title: "",
      visits: 1,
    },
  });

  return NextResponse.json({ success: true, data: updated });
}
