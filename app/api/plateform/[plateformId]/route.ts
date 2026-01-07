import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
export async function GET(
  request: NextRequest,
  paramsPlateform: { params: Promise<{ plateformId: string }> }
) {
  const getParams = await paramsPlateform.params;
  const plateformByGroupPlateform = await prisma.plateform.findMany({
    where: { GroupSiteId: Number(getParams.plateformId) },
    select: {
      id: true,
      name: true,
      description: true,
      url: true,
      email: true,
      passWord: true,
      GroupSite: {
        select: {
          id: true,
          type: true,
          title: true,
        },
      },
    },
  });

  if (!plateformByGroupPlateform) {
    return NextResponse.json({ error: "bad request :(" }, { status: 400 });
  }

  return NextResponse.json(
    { plateform: plateformByGroupPlateform },
    { status: 200 }
  );
}
