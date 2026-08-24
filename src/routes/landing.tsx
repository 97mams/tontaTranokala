import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Zap, ShieldCheck, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/landing")({
  component: LandingComponent,
});

const features = [
  {
    icon: Zap,
    title: "Lightning fast",
    description:
      "Built on TanStack Start with SSR and streaming for instant page loads.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by default",
    description:
      "Authentication powered by Better Auth with sessions stored in Convex.",
  },
  {
    icon: Gauge,
    title: "Realtime backend",
    description:
      "Convex gives you a reactive database without writing any server code.",
  },
];

function LandingComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-6">
          <Link to="/landing" className="text-lg font-bold tracking-tight">
            Ndao
          </Link>
          <nav className="flex items-center gap-2">
            <Button variant="ghost" size="sm" render={<Link to="/login" />}>
              Sign in
            </Button>
            <Button size="sm" render={<Link to="/register" />}>
              Get started
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-6 py-24 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs text-neutral-300">
            <Sparkles className="size-3.5" />
            Now in early access
          </span>
          <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Ship your next idea{" "}
            <span className="text-primary">in record time</span>
          </h1>
          <p className="max-w-xl text-balance text-neutral-400">
            A modern full-stack starter with type-safe routing, realtime data
            and authentication baked in. Focus on your product, not the glue.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" render={<Link to="/register" />}>
              Create an account
              <ArrowRight />
            </Button>
            <Button variant="outline" size="lg" render={<Link to="/login" />}>
              Sign in
            </Button>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-5xl gap-6 px-6 pb-24 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-3 rounded-xl border border-neutral-800 bg-neutral-900 p-6"
            >
              <feature.icon className="size-5 text-primary" />
              <h2 className="font-semibold">{feature.title}</h2>
              <p className="text-sm text-neutral-400">{feature.description}</p>
            </div>
          ))}
        </section>

        <section className="border-t border-neutral-800 bg-neutral-900/50">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 py-20 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to get started?
            </h2>
            <p className="max-w-md text-neutral-400">
              Join today and see how fast you can go from zero to production.
            </p>
            <Button size="lg" render={<Link to="/register" />}>
              Get started free
              <ArrowRight />
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-800 py-8">
        <div className="mx-auto w-full max-w-5xl px-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} Ndao. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
