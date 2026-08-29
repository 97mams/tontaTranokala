import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Bookmark, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Accueil", href: "#home" },
  { label: "Fonctionnalités", href: "#features" },
  { label: "Comment ça marche", href: "#how-it-works" },
];

export function Logo({
  className,
  hideText = false,
}: {
  className?: string;
  hideText?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Bookmark className="size-4" />
      </span>
      {!hideText && (
        <span className="text-sm font-semibold tracking-tight text-foreground">
          TontaTranokala
        </span>
      )}
    </span>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6"
      >
        <Link to="/landing" aria-label="Accueil TontaTranokala">
          <Logo />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-neutral-400 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            variant="ghost"
            size="sm"
            render={<Link to="/login" />}
          >
            Se connecter
          </Button>
          <Button size="sm" render={<Link to="/register" />}>
            Commencer
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
          className="flex size-9 items-center justify-center rounded-lg border border-neutral-800 text-neutral-300 transition-colors hover:bg-neutral-900 md:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-neutral-800 bg-neutral-950/95 px-6 py-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-neutral-300 transition-colors hover:bg-neutral-900 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="my-2 border-t border-neutral-800" />
            <div className="flex flex-col gap-2 px-3">
              <Button
                variant="outline"
                className="w-full"
                render={<Link to="/login" />}
              >
                Se connecter
              </Button>
              <Button className="w-full" render={<Link to="/register" />}>
                Commencer
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}