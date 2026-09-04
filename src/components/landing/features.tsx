import { Bookmark, Folder, History, NotepadText, Pencil, Search } from "lucide-react";

const features = [
  {
    icon: Bookmark,
    title: "Enregistrer les sites importants",
    description: "Enregistrez des adresses avec toutes les informations utiles.",
  },
  {
    icon: Folder,
    title: "Organiser vos sites",
    description: "Gardez vos sites enregistrés organisés et faciles d'accès.",
  },
  {
    icon: NotepadText,
    title: "Stocker les informations associées",
    description: "Gardez des notes utiles associées à chaque site.",
  },
  {
    icon: Search,
    title: "Rechercher rapidement",
    description: "Retrouvez vos sites sans fouiller dans l'historique.",
  },
  {
    icon: Pencil,
    title: "Modifier à tout moment",
    description: "Mettez à jour les informations quand vous le souhaitez.",
  },
  {
    icon: History,
    title: "Conserver votre historique",
    description: "Accédez à vos sites et informations déjà enregistrés.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-16 border-b border-neutral-800">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Tout ce qu'il faut pour rester organisé
          </h2>
          <p className="text-muted-foreground">
            Des outils simples pour enregistrer et retrouver vos sites sans
            effort.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-3 rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-colors hover:border-neutral-700 hover:bg-neutral-900"
            >
              <span className="flex size-9 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900">
                <feature.icon className="size-4 text-primary" />
              </span>
              <h3 className="font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}