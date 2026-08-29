import { Folder, NotepadText, Search } from "lucide-react";
import { WebsiteCard } from "@/components/landing/website-card";
import { mockWebsites } from "@/components/landing/mock-data";

const points = [
  {
    icon: Folder,
    title: "Centralisé",
    description: "Tous vos sites importants vivent au même endroit.",
  },
  {
    icon: NotepadText,
    title: "Avec ses informations",
    description: "Notes et détails restent attachés au site.",
  },
  {
    icon: Search,
    title: "Accessible instantanément",
    description: "Recherchez et retrouvez tout en quelques secondes.",
  },
];

export function Solution() {
  return (
    <section className="border-b border-neutral-800">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-20 sm:py-24 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Tout ce qui compte, organisé en un seul endroit.
          </h2>
          <p className="max-w-md text-muted-foreground">
            TontaTranokala garde vos sites et les informations associées
            ensemble, pour que rien ne se perde dans la masse des favoris.
          </p>
          <ul className="flex flex-col gap-4">
            {points.map((point) => (
              <li key={point.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900">
                  <point.icon className="size-4 text-neutral-300" />
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {point.title}
                  </p>
                  <p className="text-sm text-neutral-400">
                    {point.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <WebsiteCard website={mockWebsites[0]} />
          <div className="ml-6 rounded-xl border border-neutral-800 bg-neutral-900/80 p-3.5 sm:ml-10">
            <div className="flex items-center gap-2">
              <NotepadText className="size-3.5 text-neutral-500" />
              <p className="text-xs font-medium text-neutral-300">Notes</p>
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-neutral-400">
              Consulté chaque semaine — notes de réunion, liens du dépôt et
              historique de déploiement pour le sprint en cours.
            </p>
          </div>
          <div className="ml-12 sm:ml-20">
            <WebsiteCard website={mockWebsites[1]} />
          </div>
        </div>
      </div>
    </section>
  );
}