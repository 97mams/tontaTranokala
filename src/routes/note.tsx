import { Suspense } from "react";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { NoteForm } from "@/components/note-form";
import { NoteList, NoteListSkeleton } from "@/components/note-list";

export const Route = createFileRoute("/note")({
  loader: async ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({ to: "/landing" });
    }
  },
  component: NoteComponent,
});

function NoteComponent() {
  return (
    <AppShell>
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Notes
          </h1>
          <p className="text-muted-foreground">
            Vos notes personnelles, centralisées au même endroit.
          </p>
        </div>

        <NoteForm />

        <Suspense fallback={<NoteListSkeleton />}>
          <NoteList />
        </Suspense>
      </div>
    </AppShell>
  );
}