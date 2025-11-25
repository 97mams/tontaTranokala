import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";

export async function Users() {
  const totalUsers = await prisma.user.count();
  return (
    <div className="grid grid-cols-4 gap-4 grid-rows-1">
      <Card>
        <CardHeader>Total users</CardHeader>
        <CardContent>
          <p className="text-4xl font-extrabold tracking-tight text-balance">
            {totalUsers}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>users connected</CardHeader>
        <CardContent>
          <p className="text-4xl font-extrabold tracking-tight text-balance">
            10.00
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
