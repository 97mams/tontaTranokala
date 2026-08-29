import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/landing/navbar";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
];

const accountLinks = [
  { label: "Sign in", to: "/login" as const },
  { label: "Create account", to: "/register" as const },
];

export function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex max-w-xs flex-col gap-3">
            <Logo />
            <p className="text-sm text-neutral-500">
              Save, organize and quickly find the websites that matter to you.
            </p>
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-foreground">Product</p>
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
              <p className="text-sm font-medium text-foreground">Account</p>
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
          © {new Date().getFullYear()} TontaTranokala. All rights reserved.
        </div>
      </div>
    </footer>
  );
}