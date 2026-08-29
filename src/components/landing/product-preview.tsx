import { Bookmark, FolderClosed, History, NotepadText, Search } from "lucide-react";
import { WebsiteCard } from "@/components/landing/website-card";
import { mockWebsites } from "@/components/landing/mock-data";

const sidebarItems = [
  { icon: Bookmark, label: "All websites", active: true },
  { icon: FolderClosed, label: "Collections" },
  { icon: NotepadText, label: "Notes" },
  { icon: History, label: "History" },
];

export function ProductPreview() {
  return (
    <section className="border-b border-neutral-800">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            See your digital world at a glance
          </h2>
          <p className="text-muted-foreground">
            A clean workspace for the websites and information you depend on.
          </p>
        </div>

        <div
          aria-hidden="true"
          className="mt-12 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 shadow-2xl shadow-black/40"
        >
          <div className="flex items-center gap-1.5 border-b border-neutral-800 px-4 py-3">
            <span className="size-2.5 rounded-full bg-neutral-700" />
            <span className="size-2.5 rounded-full bg-neutral-700" />
            <span className="size-2.5 rounded-full bg-neutral-700" />
            <span className="ml-3 rounded-md border border-neutral-800 bg-neutral-900 px-2 py-0.5 text-xs text-neutral-500">
              app.tontatranokala.com
            </span>
          </div>

          <div className="flex">
            <div className="hidden w-52 shrink-0 flex-col gap-1 border-r border-neutral-800 p-4 lg:flex">
              {sidebarItems.map((item) => (
                <span
                  key={item.label}
                  className={
                    item.active
                      ? "flex items-center gap-2.5 rounded-lg bg-neutral-800/70 px-3 py-2 text-sm text-foreground"
                      : "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-neutral-400"
                  }
                >
                  <item.icon className="size-4" />
                  {item.label}
                </span>
              ))}
            </div>

            <div className="min-w-0 flex-1 p-4 sm:p-5">
              <div className="relative mb-4">
                <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-neutral-500" />
                <div className="h-9 w-full rounded-lg border border-neutral-800 bg-neutral-950/60 pl-9 pr-3 text-left text-sm text-neutral-500">
                  Search saved websites…
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {mockWebsites.map((website) => (
                  <WebsiteCard key={website.url} website={website} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}