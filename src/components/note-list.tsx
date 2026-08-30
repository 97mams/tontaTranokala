import {
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
import { useMutation } from "convex/react";
import type { Id } from "../../convex/_generated/dataModel";
import { NotepadText, Trash2 } from "lucide-react";
import { api } from "../../convex/_generated/api";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export function NoteList() {
  const queryClient = useQueryClient();
  const listKey = convexQuery(api.notes.list, {}).queryKey;
  const { data } = useSuspenseQuery(convexQuery(api.notes.list, {}));
  const removeNote = useMutation(api.notes.remove);

  const handleDelete = async (id: Id<"notes">) => {
    if (!window.confirm("Supprimer cette note ?")) return;
    await removeNote({ id });
    queryClient.invalidateQueries({ queryKey: listKey });
  };

  if (data.length === 0) {
    return (
      <Card className="w-full">
        <CardContent className="flex flex-col items-center gap-2 py-10 text-center">
          <NotepadText className="size-8 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            Aucune note pour le moment. Utilisez le formulaire ci-dessus pour
            enregistrer votre première note.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="flex w-full flex-col gap-3">
      {data.map((note) => (
        <Card key={note._id} className="w-full">
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="leading-snug font-semibold text-foreground">
                  {note.title || "Note sans titre"}
                </h3>
                {note.content && (
                  <p className="mt-1 whitespace-pre-wrap text-sm text-muted-foreground">
                    {note.content}
                  </p>
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 shrink-0 text-muted-foreground hover:text-destructive"
                type="button"
                aria-label="Supprimer la note"
                onClick={() => handleDelete(note._id)}
              >
                <Trash2 />
              </Button>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

export function NoteListSkeleton() {
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex w-full flex-col gap-2 rounded-xl border border-input p-4">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-2/3" />
      </div>
      <div className="flex w-full flex-col gap-2 rounded-xl border border-input p-4">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
  );
}