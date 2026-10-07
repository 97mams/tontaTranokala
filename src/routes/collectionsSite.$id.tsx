import { Suspense, useState } from "react";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { CollectionForm } from "@/components/collection-form";
import {
  CollectionSiteList,
  CollectionsSiteListSkeleton,
} from "@/components/collectionsSite-list";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { WebsiteList, WebsiteListSkeleton } from "@/components/website-list";
import { WebsiteForm } from "@/components/website-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";



export const Route = createFileRoute("/collectionsSite/$id")({
  loader: async ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({ to: "/landing" });
    }

  },
  component: CollectionsComponent,
});

function CollectionsComponent() {
  const collectionId = Route.useParams().id;
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
            Regroupez vos sites en collections pour mieux les organiser.
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
          <WebsiteList collectionId={collectionId} />
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