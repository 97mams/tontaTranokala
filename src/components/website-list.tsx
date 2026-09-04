import { useState } from "react";
import type { ReactNode } from "react";
import {
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
import { useMutation } from "convex/react";
import type { Id } from "../../convex/_generated/dataModel";
import { Eye, EyeOff, Globe, KeyRound, Mail, Trash2, User } from "lucide-react";
import { api } from "../../convex/_generated/api";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

function toDisplayUrl(raw: string) {
  return raw.startsWith("http") ? raw : `https://${raw}`;
}

function PasswordValue({
  password,
  loginUrl,
}: {
  password: string;
  loginUrl: string | null | undefined;
}) {
  const [shown, setShown] = useState(false);
  return (
    <li className="flex items-center gap-2">
      <KeyRound className="size-3.5 shrink-0 text-muted-foreground" />
      <span className="text-sm">Mot de passe&nbsp;:</span>
      <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
        {shown ? password : "••••••••"}
      </code>
      <Button
        variant="ghost"
        size="sm"
        className="h-6 px-1.5"
        type="button"
        onClick={() => setShown((s) => !s)}
        aria-label={shown ? "Masquer le mot de passe" : "Afficher le mot de passe"}
      >
        {shown ? <EyeOff /> : <Eye />}
      </Button>
      {loginUrl && (
        <a
          href={toDisplayUrl(loginUrl)}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-primary underline underline-offset-4 hover:text-primary/80"
        >
          Page de connexion
        </a>
      )}
    </li>
  );
}

export function WebsiteList() {
  const queryClient = useQueryClient();
  const listKey = convexQuery(api.websites.list, {}).queryKey;
  const { data } = useSuspenseQuery(convexQuery(api.websites.list, {}));
  const removeWebsite = useMutation(api.websites.remove);

  const handleDelete = async (id: Id<"websites">, name: string) => {
    if (!window.confirm(`Supprimer « ${name} » ?`)) return;
    await removeWebsite({ id });
    queryClient.invalidateQueries({ queryKey: listKey });
  };

  if (data.length === 0) {
    return (
      <Card className="w-full">
        <CardContent className="flex flex-col items-center gap-2 py-10 text-center">
          <Globe className="size-8 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            Aucun site enregistré pour le moment. Cliquez sur «&nbsp;Ajouter un
            site&nbsp;» pour enregistrer votre premier site.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="flex w-full flex-col gap-3">
      {data.map((website) => {
        const url = toDisplayUrl(website.url);
        const loginItems = [
          website.loginEmail && {
            icon: <Mail className="size-3.5 shrink-0 text-muted-foreground" />,
            label: "Email",
            value: website.loginEmail,
          },
          website.loginUsername && {
            icon: <User className="size-3.5 shrink-0 text-muted-foreground" />,
            label: "Identifiant",
            value: website.loginUsername,
          },
        ].filter(Boolean) as Array<{
          icon: ReactNode;
          label: string;
          value: string;
        }>;

        return (
          <Card key={website._id} className="w-full">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="leading-snug font-semibold text-foreground">
                    {website.name}
                  </h3>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-0.5 inline-flex items-center gap-1 text-sm text-primary underline underline-offset-4 hover:text-primary/80"
                  >
                    {website.url}
                  </a>
                  {website.description && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {website.description}
                    </p>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 shrink-0 text-muted-foreground hover:text-destructive"
                  type="button"
                  aria-label={`Supprimer ${website.name}`}
                  onClick={() => handleDelete(website._id, website.name)}
                >
                  <Trash2 />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              {website.notes && (
                <p className="whitespace-pre-wrap text-sm text-muted-foreground">
                  {website.notes}
                </p>
              )}
              {website.loginPassword && (
                <ul className="flex flex-col gap-1">
                  {loginItems.map((item) => (
                    <li key={item.label} className="flex items-center gap-2">
                      {item.icon}
                      <span className="text-sm">{item.label}&nbsp;:</span>
                      <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
                        {item.value}
                      </code>
                    </li>
                  ))}
                  <PasswordValue
                    password={website.loginPassword}
                    loginUrl={website.loginUrl}
                  />
                </ul>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export function WebsiteListSkeleton() {
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex w-full flex-col gap-2 rounded-xl border border-input p-4">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-3 w-56" />
        <Skeleton className="h-3 w-full" />
      </div>
      <div className="flex w-full flex-col gap-2 rounded-xl border border-input p-4">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-3 w-56" />
        <Skeleton className="h-3 w-full" />
      </div>
    </div>
  );
}