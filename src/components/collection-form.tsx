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
  name: string;
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

export function CollectionForm({ onSubmitted }: { onSubmitted?: () => void }) {
  const queryClient = useQueryClient();
  const listKey = convexQuery(api.collections.list, {}).queryKey;
  const addCollection = useMutation(api.collections.add);

  const form = useForm({
    defaultValues: {
      name: "",
    } satisfies FormValues,
    validators: {
      onSubmit: (): string | undefined => undefined,
    },
    onSubmit: async ({ value, formApi }) => {
      try {
        await addCollection({ name: value.name.trim() });
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
        <CardTitle>Nouvelle collection</CardTitle>
        <CardDescription>
          Créez une collection pour organiser vos sites.
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
              name="name"
              validators={{
                onChange: ({ value }) =>
                  !value.trim()
                    ? "Le nom est requis"
                    : value.trim().length > 80
                      ? "Le nom est trop long (80 caractères max)"
                      : undefined,
              }}
            >
              {(field) => (
                <Field data-invalid={!field.state.meta.isValid}>
                  <FieldLabel htmlFor={field.name}>Nom</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    required
                    placeholder="Travail, Perso, Comptes…"
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
                    {isSubmitting
                      ? "Enregistrement…"
                      : "Enregistrer la collection"}
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