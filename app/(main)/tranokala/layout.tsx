import { AppSidebar } from "@/components/app-sidebar";
import { Counter } from "@/components/counter";
import { TopProjects } from "@/components/sideListProject";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { Profil } from "@/components/userProfil";
import { getUser } from "@/lib/auth-server";
import { redirect } from "next/navigation";
import { Suspense } from "react";

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
    <ThemeProvider attribute="class" defaultTheme="true" enableSystem={true}>
      <SidebarProvider className="overflow-hidden">
        <AppSidebar />
        <main className="w-full h-screen">
          <div className="w-full sticky z-40 border-b-2 flex justify-between md:justify-end p-2.5 ">
            <div className="block md:hidden ">
              <SidebarTrigger />
            </div>
            <div className="flex gap-1">
              <Counter />
              <Profil user={user} />
              <ModeToggle />
            </div>
          </div>
          <div className="w-full max-h-screen flex">
            <Suspense fallback={<Skeleton />}>
              {children}
              <TopProjects userId={user?.id} />
            </Suspense>
          </div>
        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
}
