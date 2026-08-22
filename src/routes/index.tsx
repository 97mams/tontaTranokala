// import BetterAuthHeader from '@/integrations/better-auth/header-user'
// import { useQuery } from '@tanstack/react-query'
// // import { authClient } from '@/lib/auth-client'
import { createFileRoute  } from '@tanstack/react-router'
// import { api } from '../../convex/_generated/api'

import { useConvexAuth } from "convex/react";

export const Route = createFileRoute('/')({
  component: HomePage,
})

// function HomePage() {

//   const user = useQuery(api.auth.getCurrentUser)

//   console.log('user', user.data)

//   return (
//  <section className="relative text-white min-h-[80vh] flex items-center justify-center">
//       {/* Overlay */}

//       <BetterAuthHeader />

//       <div className="absolute inset-0"></div>

//       <div className="relative z-10 max-w-3xl text-center px-6">
//         <h1 className="text-4xl md:text-6xl text-accent-foreground font-extrabold leading-tight drop-shadow-lg">
//           Enregistrez vos plateformes & sites facilement
//         </h1>
//         <p className="mt-6 text-lg md:text-xl text-accent-foreground">
//           Gérez vos informations de manière rapide, organisée et sécurisée. Un
//           seul endroit pour tout centraliser.
//         </p>

//         <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
//           <Link
//             to={"/tranokala/singup"}
//             className="px-6 py-3 bg-accent-foreground text-primary font-semibold rounded-2xl shadow-lg hover:scale-105 transition"
//           >
//             Commencer
//           </Link>
//           <Link
//             to="/about"
//             className="px-6 py-3 bg-primary border border-white/40 font-semibold rounded-2xl shadow-lg hover:scale-105 transition"
//           >
//             En savoir plus
//           </Link>
//         </div>
//       </div>
//       </ section>
//   )
// }



export default function HomePage() {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <h1>Home Page</h1>
      Convex authenticated: {String(isAuthenticated)}
    </div>
  );
}
