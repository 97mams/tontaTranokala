export default function Page() {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-600 mb-6">
          À propos de notre projet
        </h1>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Notre application{" "}
          <span className="font-semibold text-indigo-600">
            AntotanTranokala
          </span>{" "}
          a été créée pour simplifier la gestion et l’organisation de vos
          plateformes et sites web. L’objectif est de vous offrir un espace
          centralisé, rapide et sécurisé, où toutes vos informations
          essentielles sont regroupées.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 bg-card rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">
              Organisation
            </h3>
            <p className="text-gray-600">
              Classez vos sites et plateformes dans un seul tableau clair et
              structuré.
            </p>
          </div>

          <div className="p-6 bg-card rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">Rapidité</h3>
            <p className="text-gray-600">
              Accédez rapidement aux informations importantes sans perdre de
              temps.
            </p>
          </div>

          <div className="p-6 bg-card rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">Sécurité</h3>
            <p className="text-gray-600">
              Protégez vos données sensibles avec un stockage fiable et
              sécurisé.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-gray-700 text-lg">
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
