import { Suspense } from "react";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
import { api } from "../../convex/_generated/api";
import { authClient } from "@/lib/auth-client";
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
import { AppShell } from "@/components/app-shell";

export const Route = createFileRoute("/")({
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
  component: IndexComponent,
});

function IndexComponent() {
  return (
    <AppShell>
      <Suspense fallback={<UserCardSkeleton />}>
        <UserCard />
      </Suspense>
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

  if (!user) {
    return (
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Non connecté</CardTitle>
          <CardDescription>
            Votre session a peut-être expiré.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => (location.href = "/landing")}
          >
            Retour à l'accueil
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Bienvenue{user.name ? `, ${user.name}` : ""}
        </h1>
        <p className="text-muted-foreground">
          Vous êtes connecté. Retrouvez bientôt ici vos sites enregistrés et
          leurs informations.
        </p>
      </div>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Votre compte</CardTitle>
          <CardDescription>Les informations de votre session.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-1 text-sm">
          <p>
            <span className="text-muted-foreground">Email :</span> {user.email}
          </p>
          <p>
            <span className="text-muted-foreground">Nom :</span> {user.name}
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
    </div>
  );
}

function UserCardSkeleton() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-4">
      <Skeleton className="h-8 w-64" />
      <Skeleton className="h-4 w-80" />
      <Skeleton className="h-40 w-full rounded-xl" />
    </div>
  );
}