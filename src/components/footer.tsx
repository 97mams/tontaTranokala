"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-muted bg-background   mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo / Nom */}
        <div className="text-center md:text-left">
          <h2>AntontanTranokala</h2>
          <p className="text-sm  ">
            Gardez vos sites et plateformes organisés.
          </p>
        </div>

        {/* Liens rapides */}
        <div className="flex flex-wrap justify-center gap-6 text-sm  ">
          <Link href="/docs" className="hover:text-primary transition">
            Documentation
          </Link>
          <Link href="/about" className="hover:text-primary transition">
            À propos
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-sm   text-center md:text-right">
          © {new Date().getFullYear()}{" "}
          <a href="https://github.com/97mams">97mams</a>. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
