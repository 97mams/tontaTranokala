import { QueryClient } from "@tanstack/react-query";
import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
  useRouteContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import { createServerFn } from '@tanstack/react-start'
import { ConvexBetterAuthProvider } from '@convex-dev/better-auth/react'
import type { ConvexQueryClient } from '@convex-dev/react-query'

import appCss from "../styles.css?url";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { Header } from "@/components/header";
import { ConvexReactClient } from "convex/react";

import { authClient } from '@/lib/auth-client'
import { getToken } from '@/lib/auth-server'

// Get auth information for SSR using available cookies
const getAuth = createServerFn({ method: 'GET' }).handler(async () => {
  return await getToken()
})


const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
  convexQueryClient: ConvexQueryClient
}>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "ndao",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }), 
  beforeLoad: async (ctx) => {
    const token = await getAuth()

    // all queries, mutations and actions through TanStack Query will be
    // authenticated during SSR if we have a valid token
    if (token) {
      // During SSR only (the only time serverHttpClient exists),
      // set the auth token to make HTTP queries with.
      ctx.context.convexQueryClient.serverHttpClient?.setAuth(token)
    }

    return {
      isAuthenticated: !!token,
      token,
    }
  },
  notFoundComponent: () => (
    <main className="container mx-auto p-4 pt-16">
      <h1>404</h1>
      <p>The requested page could not be found.</p>
    </main>
  ),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const context = useRouteContext({ from: Route.id }) 
  return (
    <ConvexBetterAuthProvider 
      client={context.convexQueryClient.convexClient}
      authClient={authClient}
      initialToken={context.token}>
      <html lang="fr" suppressHydrationWarning>
        <head>
          <HeadContent />
        </head>
        <body>
          <ThemeProvider defaultTheme="system" storageKey="dark">
            <SidebarProvider>
              <AppSidebar />
              <main className="w-full">
                <Header>
                  <SidebarTrigger />
                  <ModeToggle />
                </Header>
                {children}
              </main>
            </SidebarProvider>
          </ThemeProvider>
          <TanStackDevtools
            config={{
              position: "bottom-right",
            }}
            plugins={[
              {
                name: "Tanstack Router",
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
          <Scripts />
        </body>
      </html>
    </ConvexBetterAuthProvider>
  );
}
