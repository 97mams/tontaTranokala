import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/landing/navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Folder, History, NotepadText, Users } from "lucide-react";

export const Route = createFileRoute("/tranokala/admin")({
  component: AdminComponent,
});

const sections = [
  {
    title: "Sites",
    description: "Gérer les sites enregistrés.",
    icon: Folder,
  },
  {
    title: "Notes",
    description: "Gérer les notes des utilisateurs.",
    icon: NotepadText,
  },
  {
    title: "Historique",
    description: "Consulter l'activité de la plateforme.",
    icon: History,
  },
  {
    title: "Utilisateurs",
    description: "Gérer les comptes utilisateurs.",
    icon: Users,
  },
];

function AdminComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-14 shrink-0 items-center gap-3 border-b px-4 sm:px-6">
        <Logo hideText />
        <span className="text-sm font-medium">Administration</span>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" size="sm" render={<Link to="/landing" />}>
            <ArrowLeft className="size-4" />
            Retour
          </Button>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 p-4 sm:p-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Tableau de bord
          </h1>
          <p className="text-muted-foreground">
            Espace d'administration de la plateforme.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {sections.map((section) => (
            <Card key={section.title}>
              <CardHeader>
                <div className="flex size-9 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  <section.icon className="size-4" />
                </div>
                <CardTitle>{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">
                  Ouvrir
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
