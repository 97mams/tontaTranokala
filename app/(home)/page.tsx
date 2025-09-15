export default function Page() {
  return (
    <section className="relative text-white min-h-[80vh] flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 max-w-3xl text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Enregistrez vos plateformes & sites facilement
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-100">
          Gérez vos informations de manière rapide, organisée et sécurisée. Un
          seul endroit pour tout centraliser.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-2xl shadow-lg hover:scale-105 transition">
            Commencer
          </button>
          <a
            href="/about"
            className="px-6 py-3 bg-indigo-500 border border-white/40 font-semibold rounded-2xl shadow-lg hover:scale-105 transition"
          >
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  );
}
