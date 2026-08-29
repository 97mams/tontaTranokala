import { Suspense } from "react";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
import { api } from "../../convex/_generated/api";
import { Skeleton } from "@/components/ui/skeleton";
import { AppShell } from "@/components/app-shell";
import {
  WebsiteList,
  WebsiteListSkeleton,
} from "@/components/website-list";

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
      <Suspense fallback={<HomeSkeleton />}>
        <HomeContent />
      </Suspense>
    </AppShell>
  );
}

function HomeContent() {
  const { data } = useSuspenseQuery(convexQuery(api.auth.getCurrentUser, {}));
  const user = data as {
    email: string;
    name: string;
    image?: string | null;
  } | null;

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Bienvenue{user?.name ? `, ${user.name}` : ""}
        </h1>
        <p className="text-muted-foreground">
          Retrouvez ici vos sites enregistrés et leurs informations.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            Vos sites enregistrés
          </h2>
          <p className="text-muted-foreground">
            Tous les sites que vous avez ajoutés, avec leurs informations.
          </p>
        </div>
        <Suspense fallback={<WebsiteListSkeleton />}>
          <WebsiteList />
        </Suspense>
      </div>
    </div>
  );
}

function HomeSkeleton() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <Skeleton className="h-8 w-64" />
      <Skeleton className="h-4 w-80" />
      <Skeleton className="h-4 w-48" />
      <Skeleton className="h-40 w-full rounded-xl" />
      <Skeleton className="h-40 w-full rounded-xl" />
    </div>
  );
}