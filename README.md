# ndao

Base app template: [TanStack Start](https://tanstack.com/start) + [Convex](https://www.convex.dev) + [Better Auth](https://better-auth.com) (via the [`@convex-dev/better-auth`](https://labs.convex.dev/better-auth) component).

## Stack

- TanStack Start (SSR, file-based routing, server functions)
- Convex backend with the Better Auth component (users/sessions stored in Convex)
- Better Auth email & password auth
- Tailwind CSS v4 + shadcn/ui (Base UI)

## Getting started

1. Install dependencies:

   ```sh
   pnpm install
   ```

2. Start Convex (creates a deployment, writes `.env.local`, generates `convex/_generated`):

   ```sh
   npx convex dev
   ```

3. Set auth secrets on the deployment:

   ```sh
   npx convex env set BETTER_AUTH_SECRET=$(openssl rand -base64 32)
   npx convex env set SITE_URL http://localhost:3000
   ```

4. Make sure `.env.local` contains your URLs (the CLI fills in `CONVEX_DEPLOYMENT`, `VITE_CONVEX_URL`, `VITE_CONVEX_SITE_URL`; add `VITE_SITE_URL=http://localhost:3000` if needed). See `.env.example`.

5. Run the dev server (keep `convex dev` running in another terminal):

   ```sh
   pnpm dev
   ```

## Scripts

| Script           | Description              |
| ---------------- | ------------------------ |
| `pnpm dev`       | Dev server on port 3000  |
| `pnpm build`     | Production build         |
| `pnpm lint`      | ESLint                   |
| `pnpm typecheck` | TypeScript               |

## Auth notes

- Email/password is enabled in `convex/auth.ts`. Add social providers or Better Auth plugins there.
- The Better Auth handler lives in Convex (`convex/http.ts`) and is proxied from `/api/auth/$`.
- Server-side helpers (`getToken`, `fetchAuthQuery/Mutation/Action`) are in `src/lib/auth-server.ts`.
- With `expectAuth: true`, sign out reloads the page by design.
