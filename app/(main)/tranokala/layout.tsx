import { AppSidebar } from "@/components/app-sidebar";
import { Counter } from "@/components/counter";
import { TopProjects } from "@/components/sideListProject";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { Profil } from "@/components/userProfil";
import { getUser } from "@/lib/auth-server";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();
  if (!user) {
    redirect("/auth/singin");
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="treu" enableSystem={true}>
      <SidebarProvider className="overflow-hidden">
        <AppSidebar />
        <main className="w-full h-screen">
          <div className="w-full sticky z-40 flex justify-between py-2 px-2 ">
            <SidebarTrigger />
            <div className="flex gap-1">
              <Counter />
              <Profil user={user} />
              <ModeToggle />
            </div>
          </div>
          <div className="w-full max-h-screen flex">
            {children}
            <TopProjects />
          </div>
        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
}
