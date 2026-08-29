import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/landing/navbar";

export function AuthHeader() {
  return (
    <header className="border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link to="/landing" aria-label="Accueil TontaTranokala">
          <Logo />
        </Link>
        <Link
          to="/landing"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-400 transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Accueil
        </Link>
      </div>
    </header>
  );
}