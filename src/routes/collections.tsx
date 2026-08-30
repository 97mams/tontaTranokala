import { Suspense } from "react";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { CollectionForm } from "@/components/collection-form";
import {
  CollectionList,
  CollectionListSkeleton,
} from "@/components/collection-list";

export const Route = createFileRoute("/collections")({
  loader: async ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({ to: "/landing" });
    }
  },
  component: CollectionsComponent,
});

function CollectionsComponent() {
  return (
    <AppShell>
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Collections
          </h1>
          <p className="text-muted-foreground">
            Regroupez vos sites en collections pour mieux les organiser.
          </p>
        </div>

        <CollectionForm />

        <Suspense fallback={<CollectionListSkeleton />}>
          <CollectionList />
        </Suspense>
      </div>
    </AppShell>
  );
}