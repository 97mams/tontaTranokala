import "./globals.css"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { ModeToggle } from "@/components/ui/theme-toggle"

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
            <AppSidebar/>
                <SidebarTrigger />
              <main className="w-full">
               <div className="w-full flex justify-end py-2 px-2"> 
                  <ModeToggle />
                </div>
                {children}
              </main>
              <Toaster />
          </SidebarProvider>
        </ThemeProvider>
        </body>
    </html>
  )
} 