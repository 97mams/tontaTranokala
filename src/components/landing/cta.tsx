import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="border-b border-neutral-800">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/50 px-6 py-14 text-center sm:px-12">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Start organizing your digital life today.
          </h2>
          <p className="max-w-md text-balance text-muted-foreground">
            Keep your important websites and information organized and easy to
            access.
          </p>
          <Button
            size="lg"
            className="mt-4 gap-2 px-6"
            render={<Link to="/register" />}
          >
            Get started for free
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>
      </div>
    </section>
  );
}