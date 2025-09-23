export default function Page() {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-6 py-16">
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
    </section>
  );
}
