import { getUser } from "@/lib/auth-server"; // adapte le chemin selon ton projet
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const user = await getUser();
  try {
    // Récupérer le JSON envoyé par le client
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { success: false, error: "groupId is required" },
        { status: 400 }
      );
    }

    const updated = await prisma.groupSite.update({
      where: {
        id: id,
        userId: user?.id,
      },
      data: {
        visits: { increment: 1 },
      },
    });

    revalidatePath("/tranokala");

    return NextResponse.json(
      { success: true, data: { visits: updated } },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error updating visits:", error);
    return NextResponse.json(
      { success: false, error: "Unable to update visits" },
      { status: 500 }
    );
  }
}
