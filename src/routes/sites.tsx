import { Suspense, useState } from "react";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
  const [open, setOpen] = useState(false);

  return (
    <AppShell>
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Sites enregistrés
            </h1>
            <p className="text-muted-foreground">
              Retrouvez ici tous vos sites et leurs informations de connexion.
            </p>
          </div>
          <Button
            className="w-fit"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
          >
            <Plus />
            Ajouter un site
          </Button>
        </div>

        <Suspense fallback={<WebsiteListSkeleton />}>
          <WebsiteList />
        </Suspense>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="sr-only">Ajouter un site</DialogTitle>
            </DialogHeader>
            <WebsiteForm onSubmitted={() => setOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>
    </AppShell>
  );
}