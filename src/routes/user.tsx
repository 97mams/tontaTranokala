import { Suspense } from "react";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
import { api } from "../../convex/_generated/api";
import { authClient } from "@/lib/auth-client";
import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export const Route = createFileRoute("/user")({
  loader: async ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({ to: "/landing" });
    }
    const user = await context.queryClient.ensureQueryData(
      convexQuery(api.auth.getCurrentUser, {}),
    );
    if (!user) {
      throw redirect({ to: "/landing" });
    }
  },
  component: UserComponent,
});

function UserComponent() {
  return (
    <AppShell>
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Mon compte
          </h1>
          <p className="text-muted-foreground">
            Vos informations de session et la gestion de votre compte.
          </p>
        </div>
        <Suspense fallback={<UserCardSkeleton />}>
          <UserCard />
        </Suspense>
      </div>
    </AppShell>
  );
}

function UserCard() {
  const { data } = useSuspenseQuery(convexQuery(api.auth.getCurrentUser, {}));
  const user = data as {
    email: string;
    name: string;
    image?: string | null;
  } | null;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Votre compte</CardTitle>
        <CardDescription>Les informations de votre session.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-1 text-sm">
        <p>
          <span className="text-muted-foreground">Email :</span> {user?.email}
        </p>
        <p>
          <span className="text-muted-foreground">Nom :</span> {user?.name}
        </p>
      </CardContent>
      <CardFooter className="flex-col items-stretch gap-4">
        <Separator />
        <Button
          variant="outline"
          onClick={async () => {
            await authClient.signOut({
              fetchOptions: {
                onSuccess: () => {
                  location.href = "/landing";
                },
              },
            });
          }}
        >
          Se déconnecter
        </Button>
      </CardFooter>
    </Card>
  );
}

function UserCardSkeleton() {
  return (
    <div className="flex w-full flex-col gap-2 p-1">
      <Skeleton className="h-6 w-40" />
      <Skeleton className="h-4 w-56" />
      <Skeleton className="h-4 w-64" />
      <Skeleton className="h-4 w-64" />
      <Skeleton className="h-9 w-full" />
    </div>
  );
}