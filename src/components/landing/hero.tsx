import { Link } from "@tanstack/react-router";
import { ArrowRight, Plus, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WebsiteCard } from "@/components/landing/website-card";
import { popularWebsites } from "@/components/landing/mock-data";

function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 shadow-2xl shadow-black/40"
    >
      <div className="flex items-center gap-1.5 border-b border-neutral-800 px-4 py-3">
        <span className="size-2.5 rounded-full bg-neutral-700" />
        <span className="size-2.5 rounded-full bg-neutral-700" />
        <span className="size-2.5 rounded-full bg-neutral-700" />
        <span className="ml-3 hidden rounded-md border border-neutral-800 bg-neutral-900 px-2 py-0.5 text-xs text-neutral-500 sm:block">
          app.tontatranokala.com
        </span>
      </div>

      <div className="flex flex-col gap-3 p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">
              Saved websites
            </p>
            <p className="text-xs text-neutral-500">
              {popularWebsites.length} of your important links
            </p>
          </div>
          <div className="relative">
            <Search className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-neutral-500" />
            <div className="h-8 w-full rounded-lg border border-neutral-800 bg-neutral-950/60 pl-8 pr-3 text-left text-sm text-neutral-500 sm:w-52">
              Search…
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {popularWebsites.map((website) => (
            <WebsiteCard key={website.url} website={website} />
          ))}
        </div>

        <div className="flex items-center justify-center rounded-xl border border-dashed border-neutral-800 py-2.5 text-xs text-neutral-500">
          <Plus className="mr-1.5 size-3.5" />
          Add another website
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-16 overflow-hidden border-b border-neutral-800"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]"
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 py-20 sm:py-28">
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs font-medium text-neutral-300">
            <Sparkles className="size-3.5 text-neutral-400" />
            Your personal website organizer
          </span>
          <h1 className="max-w-3xl text-4xl leading-[1.1] font-extrabold tracking-tight text-balance sm:text-5xl md:text-6xl">
            Keep your important websites in one place.
          </h1>
          <p className="max-w-xl text-balance text-base text-neutral-400 sm:text-lg">
            Save the websites you rely on, store the information that matters,
            and find everything again in seconds.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button
              size="lg"
              className="gap-2 px-6"
              render={<Link to="/register" />}
            >
              Get started
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-6"
              render={<a href="#how-it-works" />}
            >
              Learn more
            </Button>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}