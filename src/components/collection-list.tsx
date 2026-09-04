import {
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
import { useMutation } from "convex/react";
import type { Id } from "../../convex/_generated/dataModel";
import { Folder, Trash2 } from "lucide-react";
import { api } from "../../convex/_generated/api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export function CollectionList() {
  const queryClient = useQueryClient();
  const listKey = convexQuery(api.collections.list, {}).queryKey;
  const { data } = useSuspenseQuery(convexQuery(api.collections.list, {}));
  const removeCollection = useMutation(api.collections.remove);

  const handleDelete = async (id: Id<"collections">, name: string) => {
    if (!window.confirm(`Supprimer la collection « ${name} » ?`)) return;
    await removeCollection({ id });
    queryClient.invalidateQueries({ queryKey: listKey });
  };

  if (data.length === 0) {
    return (
      <Card className="w-full">
        <CardContent className="flex flex-col items-center gap-2 py-10 text-center">
          <Folder className="size-8 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            Aucune collection pour le moment. Utilisez le formulaire ci-dessus
            pour créer votre première collection.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="flex w-full flex-col gap-3">
      {data.map((collection) => (
        <Card key={collection._id} className="w-full">
          <CardContent className="flex items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <Folder className="size-5 shrink-0 text-muted-foreground" />
              <p className="truncate font-medium text-foreground">
                {collection.name}
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 shrink-0 text-muted-foreground hover:text-destructive"
              type="button"
              aria-label={`Supprimer ${collection.name}`}
              onClick={() => handleDelete(collection._id, collection.name)}
            >
              <Trash2 />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function CollectionListSkeleton() {
  return (
    <div className="flex w-full flex-col gap-3">
      {[0, 1].map((i) => (
        <div
          key={i}
          className="flex w-full items-center gap-3 rounded-xl border border-input p-4"
        >
          <Skeleton className="size-5 rounded" />
          <Skeleton className="h-4 w-48" />
        </div>
      ))}
    </div>
  );
}