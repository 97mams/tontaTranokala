import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
export async function GET(
  request: NextRequest,
  paramsPlateform: { params: { plateformId: string } }
) {
  const getParams = Number(paramsPlateform.params.plateformId);
  const plateformByGroupPlateform = await prisma.plateform.findMany({
    where: { GroupSiteId: getParams },
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
