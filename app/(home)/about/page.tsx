import Link from "next/link";

export default function Page() {
  return (
    <section className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-16 space-y-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance text-primary">
          À propos de notre projet
        </h1>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Notre application{" "}
          <span className="font-semibold text-primary">AntotanTranokala</span> a
          été créée pour simplifier la gestion et l’organisation de vos
          plateformes et sites web. L’objectif est de vous offrir un espace
          centralisé, rapide et sécurisé, où toutes vos informations
          essentielles sont regroupées.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 bg-card rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Organisation
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Classez vos sites et plateformes dans un seul tableau clair et
              structuré.
            </p>
          </div>

          <div className="p-6 bg-card rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Rapidité
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Accédez rapidement aux informations importantes sans perdre de
              temps.
            </p>
          </div>

          <div className="p-6 bg-card rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Sécurité
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Protégez vos données sensibles avec un stockage fiable et
              sécurisé.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Ce projet est pensé pour les utilisateurs qui souhaitent
            <span className="font-semibold"> gagner du temps</span> et
            <span className="font-semibold"> garder le contrôle</span> sur leurs
            informations.
          </p>
        </div>
      </div>

      {/* Section Pricing */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight text-primary mb-12">
          Nos prix
        </h2>
        <div className="">
          {/* Carte Gratuit */}
          <div className="p-6 bg-card rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Gratuit
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Pour tester notre service sans engagement
            </p>
            <p className="scroll-m-20 text-3xl font-bold mt-4">0€ / mois</p>
            <ul className="text-gray-600 mb-6 space-y-1 mt-4">
              <li>✔ 3 groupes Site</li>
              <li>✔ 3 groupes Plateforme</li>
              <li>✔ 6 enregistrements par groupe</li>
            </ul>
            <Link
              href={"/auth/signUp"}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Commencer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
