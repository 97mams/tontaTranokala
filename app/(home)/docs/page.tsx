"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function DocsPage() {
  return (
    <div className="flex flex-col items-center p-6 md:p-12">
      <div className="max-w-4xl w-full">
        <Badge variant={"outline"}>Commencer</Badge>
        {/* Introduction */}
        <section className="mb-6">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
            Antotan-tranokala
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Bienvenue sur la plateforme d’enregistrement de sites et de
            plateformes. Cette application vous permet de :
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
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
        <Separator />
        {/* Inscription */}
        <section className="mb-6">
          <h2 className=" scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            1. Inscription et Connexion
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Cliquez sur <b>S’inscrire</b> pour créer un compte, puis
            connectez-vous avec vos identifiants.
          </p>
        </section>

        {/* Dashboard */}
        <section className="mb-6">
          <h2 className=" scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            2. Tableau de bord
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Après connexion, vous arrivez sur le <b>dashboard</b> :
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Centre : bouton <b> Nouveau groupe</b>
            </li>
            <li>
              Gauche : vos <b>Groupes Sites</b> et <b>Groupes Plateformes</b>
            </li>
            <li>
              Droite : la section <b>Top projets</b>
            </li>
          </ul>
        </section>

        {/* Groupes */}
        <section className="mb-6">
          <h2 className=" scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            3. Gestion des Groupes
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Cliquez sur <b> Nouveau groupe</b> pour créer un groupe (ex. “Sites
            Perso” ou “Plateformes Pro”). Supprimez un groupe via la croix ❌.
          </p>
        </section>

        {/* Projets */}
        <section className="mb-6">
          <h2 className=" scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            4. Ajout de Projets
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Sélectionnez un groupe existant, puis cliquez sur <b>Ajouter (+)</b>{" "}
            pour créer un projet. Donnez un <b>nom</b> et une <b>description</b>
            .
          </p>
        </section>

        {/* Identifiants */}
        <section className="mb-6">
          <h2 className=" scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            5. Gestion des Identifiants
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Chaque projet peut contenir vos accès :
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <b>Adresse mail associée</b> (identifiant)
            </li>
            <li>
              <b>Mot de passe</b> (sécurisé, affichable ou copiable)
            </li>
          </ul>
        </section>

        {/* Résumé */}
        <section className="mb-6">
          <h2 className=" scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            6. Résumé et Navigation
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Chaque groupe affiche un <b>Résumé</b> des projets. Vous pouvez
            cliquer pour voir les détails, ou utiliser <b>Top projets</b> pour
            accéder rapidement à vos favoris.
          </p>
        </section>

        {/* Mode sombre */}
        <section>
          <h2 className=" scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            7. Mode Sombre
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Activez ou désactivez le <b>mode sombre</b> grâce au bouton en haut
            à droite.
          </p>
        </section>
      </div>
    </div>
  );
}
