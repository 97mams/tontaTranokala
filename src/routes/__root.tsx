import { HeadContent, Outlet, Scripts, createRootRouteWithContext, useRouteContext } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import Footer from '../components/Footer'
import Header from '../components/Header'

import { ConvexBetterAuthProvider } from '@convex-dev/better-auth/react'
import type { ConvexQueryClient } from '@convex-dev/react-query'
import type { QueryClient } from '@tanstack/react-query'
import { authClient } from '@/lib/auth-client'
import { getToken } from '@/lib/auth-server'

import appCss from '../styles.css?url'

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from '@/components/ui/sonner'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { ConvexReactClient, ConvexProvider } from 'convex/react'

const getAuth = createServerFn({ method: 'GET' }).handler(async () => {
  return await getToken()
})

export const Route = createRootRouteWithContext<{ queryClient: QueryClient, convexQueryClient: ConvexQueryClient }>()({
  beforeLoad: async (ctx) => {
    const token = await getAuth()
    const session = await authClient.getSession()
    if (token) {
      ctx.context.convexQueryClient.serverHttpClient?.setAuth(token)
    }

    return {
      isAuthenticated: !!token,
      token,
      session,
    }

  },
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'tranokala',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootComponent,
})
const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);

function RootComponent() {
  const context = useRouteContext({ from: Route.id })
  return (
    <ConvexProvider
      client={convex}
    >
    <ConvexBetterAuthProvider
      authClient={authClient}
      initialToken={context.token}
    >
      <RootDocument>
        <Outlet />
      </RootDocument>
    </ConvexBetterAuthProvider>
    </ ConvexProvider>
  )
}


function RootDocument({ children }: { children: React.ReactNode }) {

  const user = useRouteContext({ from: Route.id }).session.data?.user

  const renderDefault = () => {
    return (
      <>
       <Header />
          {children}
        <Footer />
      </>
    )
  }

  const renderSidebar = () => {
    return (
      <>
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </>
    )
  }

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-background">
        <ConvexProvider client={convex}>
          <ThemeProvider defaultTheme="system" storageKey="theme"> 
          { user ?
              renderSidebar()
              :
              renderDefault()
          }
          </ThemeProvider>
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        </ConvexProvider>
        <Toaster />
        <Scripts />
      </body>
    </html>
  )
}
