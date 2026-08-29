import { useSuspenseQuery } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
import { BookmarkPlus, History, Trash2 } from "lucide-react";
import { api } from "../../convex/_generated/api";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function formatDate(timestamp: number) {
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date(timestamp));
}

export function HistoryList() {
  const { data } = useSuspenseQuery(convexQuery(api.history.list, {}));

  if (data.length === 0) {
    return (
      <Card className="w-full">
        <CardContent className="flex flex-col items-center gap-2 py-10 text-center">
          <History className="size-8 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            Aucune activité pour le moment. Vos ajouts et suppressions de sites
            apparaîtront ici.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <ol className="flex w-full flex-col gap-5">
      {data.map((entry) => {
        const added = entry.type === "site_added";
        return (
          <li key={entry._id} className="flex items-start gap-3">
            <div
              className={`mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full ${
                added
                  ? "bg-primary/10 text-primary"
                  : "bg-destructive/10 text-destructive"
              }`}
            >
              {added ? (
                <BookmarkPlus className="size-4" />
              ) : (
                <Trash2 className="size-4" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-foreground">
                {added ? "Vous avez ajouté" : "Vous avez supprimé"}{" "}
                <strong className="font-semibold">{entry.websiteName}</strong>
              </p>
              {added && entry.websiteUrl && (
                <a
                  href={entry.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  {entry.websiteUrl}
                </a>
              )}
              <p className="text-xs text-muted-foreground">
                {formatDate(entry._creationTime)}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export function HistoryListSkeleton() {
  return (
    <div className="flex w-full flex-col gap-5">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex items-start gap-3">
          <Skeleton className="size-8 rounded-full" />
          <div className="flex flex-1 flex-col gap-1.5">
            <Skeleton className="h-4 w-56" />
            <Skeleton className="h-3 w-40" />
          </div>
        </div>
      ))}
    </div>
  );
}