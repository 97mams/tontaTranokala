import { HeadContent, Outlet, Scripts, createRootRouteWithContext, useRouteContext } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
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

const getAuth = createServerFn({ method: 'GET' }).handler(async () => {
  return await getToken()
})

export const Route = createRootRouteWithContext<{ queryClient: QueryClient, convexQueryClient: ConvexQueryClient }>()({
  beforeLoad: async (ctx) => {
    const token = await getAuth()
    if (token) {
      ctx.context.convexQueryClient.serverHttpClient?.setAuth(token)
    }

    return {
      isAuthenticated: !!token,
      token,
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

function RootComponent() {
  
  return (
      <RootDocument>
        <Outlet />
      </RootDocument>
  )
}


function RootDocument({ children }: { children: React.ReactNode }) {

  const context = useRouteContext({ from: Route.id })
  console.log(context)
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
      <ConvexBetterAuthProvider
        client={context.convexQueryClient.convexClient}
        authClient={authClient}
        initialToken={context.token}
      >
          <ThemeProvider defaultTheme="system" storageKey="theme"> 
          { context.isAuthenticated ?
              renderSidebar()
              :
              renderDefault()
          }
          </ThemeProvider>
          </ ConvexBetterAuthProvider>
        <Toaster />
        <Scripts />
      </body>
    </html>
  )
}
