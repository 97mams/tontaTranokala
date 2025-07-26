import "./globals.css"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { ModeToggle } from "@/components/ui/theme-toggle"
import { Button } from "@/components/ui/button"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="treu" 
          enableSystem={true}
        >
          <SidebarProvider>
            <AppSidebar />
              <SidebarTrigger />
              <main>
                <ModeToggle />
                {children}
              </main>
              <Button>Aza eh</Button>
          </SidebarProvider>
        </ThemeProvider>
        </body>
    </html>
  )
} 