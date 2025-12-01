"use server";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
    select: { id: true, name: true, email: true },
  });

  if (!user) {
    return redirect("/admin");
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">User Detail</h1>
      <div className="flex gap-4">
        <Card>
          <CardHeader>
            <h2 className="text-lg font-medium">User Information</h2>
          </CardHeader>
          <CardContent>
            <p>
              <span className="font-semibold">ID:</span> {user.id}
            </p>
            <p>
              <span className="font-semibold">Name:</span> {user.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {user.email}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="text-lg font-medium">User Information</h2>
          </CardHeader>
          <CardContent>
            <p>
              <span className="font-semibold">ID:</span> {user.id}
            </p>
            <p>
              <span className="font-semibold">Name:</span> {user.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {user.email}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
