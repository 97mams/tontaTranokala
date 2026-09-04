import { FolderOpen, MousePointerClick, Plus } from "lucide-react";

const steps = [
  {
    icon: Plus,
    step: "Étape 1",
    title: "Enregistrez",
    description: "Ajoutez un site et ses informations importantes en un clic.",
  },
  {
    icon: FolderOpen,
    step: "Étape 2",
    title: "Organisez",
    description: "Gardez vos sites et informations dans un endroit centralisé.",
  },
  {
    icon: MousePointerClick,
    step: "Étape 3",
    title: "Accédez",
    description: "Retrouvez vos informations dès que vous en avez besoin.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 border-b border-neutral-800">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Comment ça marche
          </h2>
          <p className="text-muted-foreground">
            Commencez en trois étapes simples.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.title}
              className="relative flex flex-col gap-3 rounded-xl border border-neutral-800 bg-neutral-900/50 p-6"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-9 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900">
                  <item.icon className="size-4 text-primary" />
                </span>
                <span className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
                  {item.step}
                </span>
              </div>
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}