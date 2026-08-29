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
  url: string;
  description: string;
  notes: string;
  loginEmail: string;
  loginUsername: string;
  loginPassword: string;
  loginUrl: string;
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

export function WebsiteForm() {
  const queryClient = useQueryClient();
  const listKey = convexQuery(api.websites.list, {}).queryKey;
  const addWebsite = useMutation(api.websites.add);

  const form = useForm({
    defaultValues: {
      name: "",
      url: "",
      description: "",
      notes: "",
      loginEmail: "",
      loginUsername: "",
      loginPassword: "",
      loginUrl: "",
    } satisfies FormValues,
    validators: {
      onSubmit: (): string | undefined => undefined,
    },
    onSubmit: async ({ value, formApi }) => {
      try {
        await addWebsite({
          name: value.name.trim(),
          url: value.url.trim(),
          description: value.description.trim() || null,
          notes: value.notes.trim() || null,
          loginEmail: value.loginEmail.trim() || null,
          loginUsername: value.loginUsername.trim() || null,
          loginPassword: value.loginPassword || null,
          loginUrl: value.loginUrl.trim() || null,
        });
        formApi.reset();
        queryClient.invalidateQueries({ queryKey: listKey });
      } catch (error) {
        formApi.setErrorMap({
          onSubmit: error instanceof Error ? error.message : "Une erreur est survenue",
        });
      }
    },
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Nouveau site</CardTitle>
        <CardDescription>
          Enregistrez un site web et ses informations de connexion.
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
                    : value.trim().length > 120
                      ? "Le nom est trop long (120 caractères max)"
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
                    placeholder="OpenAI"
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
              name="url"
              validators={{
                onChange: ({ value }) => {
                  if (!value.trim()) return "L'URL est requise";
                  try {
                    const protocol = new URL(
                      value.trim().startsWith("http")
                        ? value.trim()
                        : `https://${value.trim()}`,
                    ).protocol;
                    if (protocol !== "http:" && protocol !== "https:") {
                      return "L'URL doit commencer par http(s)://";
                    }
                  } catch {
                    return "Saisissez une URL valide";
                  }
                  return undefined;
                },
              }}
            >
              {(field) => (
                <Field data-invalid={!field.state.meta.isValid}>
                  <FieldLabel htmlFor={field.name}>URL</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    required
                    type="url"
                    placeholder="https://openai.com"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={!field.state.meta.isValid}
                  />
                  <FieldErrors errors={field.state.meta.errors} />
                </Field>
              )}
            </form.Field>

            <form.Field name="description">
              {(field) => (
                <Field>
                  <FieldLabel htmlFor={field.name}>
                    Description (optionnel)
                  </FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    placeholder="À quoi sert ce site ?"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </Field>
              )}
            </form.Field>

            <form.Field name="notes">
              {(field) => (
                <Field>
                  <FieldLabel htmlFor={field.name}>Notes (optionnel)</FieldLabel>
                  <textarea
                    id={field.name}
                    name={field.name}
                    rows={3}
                    placeholder="Informations utiles à retenir…"
                    className="w-full min-w-0 resize-y rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm dark:bg-input/30"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </Field>
              )}
            </form.Field>

            <fieldset className="flex flex-col gap-4 rounded-lg border border-border p-4">
              <legend className="px-1 text-sm font-medium text-foreground">
                Connexion (optionnel)
              </legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <form.Field name="loginEmail">
                  {(field) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        type="email"
                        placeholder="jean@exemple.com"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </Field>
                  )}
                </form.Field>
                <form.Field name="loginUsername">
                  {(field) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Identifiant</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        placeholder="jeandupont"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </Field>
                  )}
                </form.Field>
                <form.Field name="loginPassword">
                  {(field) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Mot de passe</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        type="password"
                        placeholder="••••••••"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </Field>
                  )}
                </form.Field>
                <form.Field name="loginUrl">
                  {(field) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>
                        URL de connexion
                      </FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        type="url"
                        placeholder="https://openai.com/login"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </Field>
                  )}
                </form.Field>
              </div>
            </fieldset>

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
                    {isSubmitting ? "Enregistrement…" : "Enregistrer le site"}
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