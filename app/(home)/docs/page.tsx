"use client";

import { Separator } from "@/components/ui/separator";

export default function DocsPage() {
  return (
    <div className="flex flex-col items-center p-6 md:p-12 text-gray-200">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-primary">
          Antotan-tranokala
        </h1>

        {/* Introduction */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-primary">
            1. Introduction
          </h2>
          <p className="mt-2">
            Bienvenue sur la plateforme d’enregistrement de sites et de
            plateformes. Cette application vous permet de :
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Créer des <b>groupes</b> (Sites ou Plateformes)
            </li>
            <li>
              Ajouter des <b>projets</b> (sites web, comptes, plateformes)
            </li>
            <li>
              Centraliser vos <b>informations de connexion</b>
            </li>
            <li>
              Retrouver rapidement vos <b>projets les plus utilisés</b>
            </li>
          </ul>
        </section>

        <Separator className="my-4 bg-accent" />

        {/* Inscription */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-primary">
            2. Inscription et Connexion
          </h2>
          <p className="mt-2">
            Cliquez sur <b>S’inscrire</b> pour créer un compte, puis
            connectez-vous avec vos identifiants.
          </p>
        </section>

        <Separator className="my-4 bg-accent" />

        {/* Dashboard */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-primary">
            3. Tableau de bord
          </h2>
          <p className="mt-2">
            Après connexion, vous arrivez sur le <b>dashboard</b> :
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Centre : bouton <b>Nouvelle groupe</b>
            </li>
            <li>
              Gauche : vos <b>Groupes Sites</b> et <b>Groupes Plateformes</b>
            </li>
            <li>
              Droite : la section <b>Top projets</b>
            </li>
          </ul>
        </section>

        <Separator className="my-4 bg-accent" />

        {/* Groupes */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-primary">
            4. Gestion des Groupes
          </h2>
          <p className="mt-2">
            Cliquez sur <b>Nouvelle groupe</b> pour créer un groupe (ex. “Sites
            Perso” ou “Plateformes Pro”). Supprimez un groupe via la croix ❌.
          </p>
        </section>

        <Separator className="my-4 bg-accent" />

        {/* Projets */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-primary">
            5. Ajout de Projets
          </h2>
          <p className="mt-2">
            Sélectionnez un groupe existant, puis cliquez sur <b>Ajouter (+)</b>{" "}
            pour créer un projet. Donnez un <b>nom</b> et une <b>description</b>
            .
          </p>
        </section>

        <Separator className="my-4 bg-accent" />

        {/* Identifiants */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-primary">
            6. Gestion des Identifiants
          </h2>
          <p className="mt-2">Chaque projet peut contenir vos accès :</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <b>Adresse mail associée</b> (identifiant)
            </li>
            <li>
              <b>Mot de passe</b> (sécurisé, affichable ou copiable)
            </li>
          </ul>
        </section>

        <Separator className="my-4 bg-accent" />

        {/* Résumé */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-primary">
            7. Résumé et Navigation
          </h2>
          <p className="mt-2">
            Chaque groupe affiche un <b>Résumé</b> des projets. Vous pouvez
            cliquer pour voir les détails, ou utiliser <b>Top projets</b> pour
            accéder rapidement à vos favoris.
          </p>
        </section>

        <Separator className="my-4 bg-accent" />

        {/* Mode sombre */}
        <section>
          <h2 className="text-xl font-semibold text-primary">8. Mode Sombre</h2>
          <p className="mt-2">
            Activez ou désactivez le <b>mode sombre</b> grâce au bouton en haut
            à droite.
          </p>
        </section>
      </div>
    </div>
  );
}
