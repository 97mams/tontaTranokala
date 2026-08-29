import { Bookmark, Folder, History, NotepadText, Pencil, Search } from "lucide-react";

const features = [
  {
    icon: Bookmark,
    title: "Save Important Websites",
    description: "Save website URLs together with useful information.",
  },
  {
    icon: Folder,
    title: "Organize Your Websites",
    description: "Keep your saved websites organized and easy to access.",
  },
  {
    icon: NotepadText,
    title: "Store Related Information",
    description: "Keep useful notes associated with each website.",
  },
  {
    icon: Search,
    title: "Search Quickly",
    description: "Find saved websites without digging through history.",
  },
  {
    icon: Pencil,
    title: "Edit Anytime",
    description: "Update website information whenever necessary.",
  },
  {
    icon: History,
    title: "Keep Your History",
    description: "Access previously saved websites and information.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-16 border-b border-neutral-800">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Everything you need to stay organized
          </h2>
          <p className="text-muted-foreground">
            Simple tools that make saving and finding websites effortless.
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