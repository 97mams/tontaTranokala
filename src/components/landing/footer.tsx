import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/landing/navbar";

const navLinks = [
  { label: "Accueil", href: "#home" },
  { label: "Fonctionnalités", href: "#features" },
  { label: "Comment ça marche", href: "#how-it-works" },
];

const accountLinks = [
  { label: "Se connecter", to: "/login" as const },
  { label: "Créer un compte", to: "/register" as const },
];

export function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex max-w-xs flex-col gap-3">
            <Logo />
            <p className="text-sm text-neutral-500">
              Enregistrez, organisez et retrouvez rapidement les sites qui
              comptent pour vous.
            </p>
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-foreground">Produit</p>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-500 transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-foreground">Compte</p>
              {accountLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-neutral-500 transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-neutral-800 pt-6 text-sm text-neutral-600">
          © {new Date().getFullYear()} TontaTranokala. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}