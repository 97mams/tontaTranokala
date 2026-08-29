import { Suspense } from "react";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { WebsiteForm } from "@/components/website-form";
import {
  WebsiteList,
  WebsiteListSkeleton,
} from "@/components/website-list";

export const Route = createFileRoute("/sites")({
  loader: async ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({ to: "/landing" });
    }
  },
  component: SitesComponent,
});

function SitesComponent() {
  return (
    <AppShell>
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Sites enregistrés
          </h1>
          <p className="text-muted-foreground">
            Ajoutez et retrouvez les sites web que vous souhaitez garder sous la
            main.
          </p>
        </div>
        <WebsiteForm />
        <Suspense fallback={<WebsiteListSkeleton />}>
          <WebsiteList />
        </Suspense>
      </div>
    </AppShell>
  );
}