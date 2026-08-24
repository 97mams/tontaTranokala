/// <reference types="vite/client" />
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouteContext,
} from "@tanstack/react-router";
import * as React from "react";
import { createServerFn } from "@tanstack/react-start";
import { ConvexBetterAuthProvider } from "@convex-dev/better-auth/react";
import type { AuthClient } from "@convex-dev/better-auth/react";
import type { ConvexQueryClient } from "@convex-dev/react-query";
import type { QueryClient } from "@tanstack/react-query";
import appCss from "@/styles/app.css?url";
import { authClient } from "@/lib/auth-client";
import { getToken } from "@/lib/auth-server";

const getAuth = createServerFn({ method: "GET" }).handler(async () => {
  return await getToken();
});

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
  convexQueryClient: ConvexQueryClient;
}>()({
  head: () => ({
    meta: [
      { title: "ndao" },
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
  }),
  beforeLoad: async (ctx) => {
    const token = await getAuth();

    // During SSR only, set the auth token so Convex HTTP queries
    // are authenticated.
    if (token) {
      ctx.context.convexQueryClient.serverHttpClient?.setAuth(token);
    }

    return {
      isAuthenticated: !!token,
      token,
    };
  },
  component: RootComponent,
});

function RootComponent() {
  const context = useRouteContext({ from: Route.id });
  return (
    <ConvexBetterAuthProvider
      client={context.convexQueryClient.convexClient}
      authClient={authClient as unknown as AuthClient}
      initialToken={context.token}
    >
      <RootDocument>
        <Outlet />
      </RootDocument>
    </ConvexBetterAuthProvider>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-neutral-950 text-neutral-50 antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
