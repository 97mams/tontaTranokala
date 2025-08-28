import { AppSidebar } from "@/components/app-sidebar";
import { TopProjects } from "@/components/sideListProject";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ModeToggle } from "@/components/ui/theme-toggle";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="treu"
          enableSystem={true}
        >
          <SidebarProvider className="overflow-hidden">
            <AppSidebar />
            <main className="w-full h-screen">
              <div className="w-full sticky z-40 flex justify-between py-2 px-2 ">
                <SidebarTrigger />
                <ModeToggle />
              </div>
              <div className="w-full max-h-screen flex overflow-scroll">
                {children}
                <TopProjects />
              </div>
            </main>
            <Toaster />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
