import { useForm } from "@tanstack/react-form";
import { authClient } from "@/lib/auth-client";
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
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type Mode = "signIn" | "signUp";

interface FormValues {
  name: string;
  email: string;
  password: string;
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

export function AuthForm({ mode }: { mode: Mode }) {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    } satisfies FormValues,
    validators: {
      onSubmit: (): string | undefined => undefined,
    },
    onSubmit: async ({ value, formApi }) => {
      const res =
        mode === "signUp"
          ? await authClient.signUp.email(value)
          : await authClient.signIn.email({
              email: value.email,
              password: value.password,
            });
      if (res.error) {
        formApi.setErrorMap({
          onSubmit: res.error.message ?? "Une erreur est survenue",
        });
        return;
      }
      location.href = "/";
    },
  });

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>
          {mode === "signIn" ? "Se connecter" : "Créer un compte"}
        </CardTitle>
        <CardDescription>
          {mode === "signIn"
            ? "Saisissez votre email et votre mot de passe pour vous connecter."
            : "Remplissez les champs ci-dessous pour créer votre compte."}
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
            {mode === "signUp" && (
              <form.Field
                name="name"
                validators={{
                  onChange: ({ value }) =>
                    !value.trim() ? "Le nom est requis"
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
                      placeholder="Jean Dupont"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={!field.state.meta.isValid}
                    />
                    <FieldErrors errors={field.state.meta.errors} />
                  </Field>
                )}
              </form.Field>
            )}

            <form.Field
              name="email"
              validators={{
                onChange: ({ value }) =>
                  !value.trim()
                    ? "L'email est requis"
                    : !/^\S+@\S+\.\S+$/.test(value)
                      ? "Saisissez un email valide"
                      : undefined,
              }}
            >
              {(field) => (
                <Field data-invalid={!field.state.meta.isValid}>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    type="email"
                    required
                    placeholder="jean@exemple.com"
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
              name="password"
              validators={{
                onChange: ({ value }) =>
                  !value
                    ? "Le mot de passe est requis"
                    : value.length < 8
                      ? "Le mot de passe doit contenir au moins 8 caractères"
                      : undefined,
              }}
            >
              {(field) => (
                <Field data-invalid={!field.state.meta.isValid}>
                  <FieldLabel htmlFor={field.name}>Mot de passe</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    type="password"
                    required
                    minLength={8}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={!field.state.meta.isValid}
                  />
                  {mode === "signUp" && (
                    <FieldDescription>Au moins 8 caractères.</FieldDescription>
                  )}
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
                      ? "…"
                      : mode === "signIn"
                        ? "Se connecter"
                        : "S'inscrire"}
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
