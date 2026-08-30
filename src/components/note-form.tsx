import { useForm } from "@tanstack/react-form";
import { useQueryClient } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

interface FormValues {
  title: string;
  content: string;
}

function FieldErrors({ errors }: { errors: unknown[] }) {
  const messages = errors
    .map((error) =>
      typeof error === "string"
        ? error
        : ((error as { message?: string }).message ?? ""),
    )
    .filter(Boolean);
  if (messages.length === 0) return null;
  return <FieldError>{messages.join(", ")}</FieldError>;
}

export function NoteForm({ onSubmitted }: { onSubmitted?: () => void }) {
  const queryClient = useQueryClient();
  const listKey = convexQuery(api.notes.list, {}).queryKey;
  const addNote = useMutation(api.notes.add);

  const form = useForm({
    defaultValues: {
      title: "",
      content: "",
    } satisfies FormValues,
    validators: {
      onSubmit: (): string | undefined => undefined,
    },
    onSubmit: async ({ value, formApi }) => {
      try {
        await addNote({
          title: value.title.trim() || null,
          content: value.content.trim() || null,
        });
        formApi.reset();
        queryClient.invalidateQueries({ queryKey: listKey });
        onSubmitted?.();
      } catch (error) {
        formApi.setErrorMap({
          onSubmit:
            error instanceof Error ? error.message : "Une erreur est survenue",
        });
      }
    },
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Nouvelle note</CardTitle>
        <CardDescription>
          Enregistrez une information utile à retenir.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <form.Field
              name="title"
              validators={{
                onChange: ({ value }) =>
                  value.trim().length > 120
                    ? "Le titre est trop long (120 caractères max)"
                    : undefined,
              }}
            >
              {(field) => (
                <Field data-invalid={!field.state.meta.isValid}>
                  <FieldLabel htmlFor={field.name}>Titre</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    placeholder="Idée à retenir"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={!field.state.meta.isValid}
                  />
                  <FieldErrors errors={field.state.meta.errors} />
                </Field>
              )}
            </form.Field>

            <form.Field
              name="content"
              validators={{
                onChange: ({ value }) => {
                  if (!value.trim()) return "La note est requise";
                  return value.trim().length > 4000
                    ? "La note est trop longue (4000 caractères max)"
                    : undefined;
                },
              }}
            >
              {(field) => (
                <Field data-invalid={!field.state.meta.isValid}>
                  <FieldLabel htmlFor={field.name}>
                    Contenu de la note
                  </FieldLabel>
                  <textarea
                    id={field.name}
                    name={field.name}
                    rows={4}
                    required
                    placeholder="Écrivez ici votre note…"
                    className="w-full min-w-0 resize-y rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm dark:bg-input/30"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={!field.state.meta.isValid}
                  />
                  <FieldErrors errors={field.state.meta.errors} />
                </Field>
              )}
            </form.Field>

            <form.Subscribe
              selector={(state) => ({
                canSubmit: state.canSubmit,
                isSubmitting: state.isSubmitting,
                submitError: state.errorMap.onSubmit,
              })}
            >
              {({ canSubmit, isSubmitting, submitError }) => (
                <>
                  {submitError && <FieldError>{submitError}</FieldError>}
                  <Button type="submit" disabled={!canSubmit || isSubmitting}>
                    {isSubmitting ? "Enregistrement…" : "Enregistrer la note"}
                  </Button>
                </>
              )}
            </form.Subscribe>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}