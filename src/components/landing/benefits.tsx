import { Clock, FolderCheck, MousePointerClick, StickyNote } from "lucide-react";

const benefits = [
  {
    icon: FolderCheck,
    title: "Stay Organized",
    description: "Keep important websites in one centralized place.",
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Find websites instantly instead of searching history.",
  },
  {
    icon: StickyNote,
    title: "Keep Information Together",
    description: "Store useful details alongside the websites they belong to.",
  },
  {
    icon: MousePointerClick,
    title: "Access Information Easily",
    description: "Retrieve important websites whenever you need them.",
  },
];

export function Benefits() {
  return (
    <section className="border-b border-neutral-800">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Built to make life easier
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col items-start gap-3 rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-colors hover:border-neutral-700"
            >
              <span className="flex size-9 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900">
                <benefit.icon className="size-4 text-primary" />
              </span>
              <h3 className="font-semibold text-foreground">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}