import { FolderOpen, MousePointerClick, Plus } from "lucide-react";

const steps = [
  {
    icon: Plus,
    step: "Step 1",
    title: "Save",
    description: "Add a website and its important information in one click.",
  },
  {
    icon: FolderOpen,
    step: "Step 2",
    title: "Organize",
    description: "Keep your websites and information in one centralized place.",
  },
  {
    icon: MousePointerClick,
    step: "Step 3",
    title: "Access",
    description: "Find and retrieve your information whenever you need it.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 border-b border-neutral-800">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            How it works
          </h2>
          <p className="text-muted-foreground">
            Get started in three simple steps.
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