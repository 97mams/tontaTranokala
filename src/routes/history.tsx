import { Suspense } from "react";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import {
  HistoryList,
  HistoryListSkeleton,
} from "@/components/history-list";

export const Route = createFileRoute("/history")({
  loader: async ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({ to: "/landing" });
    }
  },
  component: HistoryComponent,
});

function HistoryComponent() {
  return (
    <AppShell>
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Historique
          </h1>
          <p className="text-muted-foreground">
            L'activité de votre compte : sites ajoutés et supprimés.
          </p>
        </div>
        <Suspense fallback={<HistoryListSkeleton />}>
          <HistoryList />
        </Suspense>
      </div>
    </AppShell>
  );
}