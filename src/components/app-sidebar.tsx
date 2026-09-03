import { Link, useLocation } from "@tanstack/react-router";
import { Suspense } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
import { api } from "../../convex/_generated/api";
import {
  Bookmark,
  Folder,
  History,
  House,
  NotepadText,
  UserRound,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { Logo } from "@/components/landing/navbar";

export function AppSidebar() {
  const { state } = useSidebar();
  const { pathname } = useLocation();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Logo className="px-2 py-1" hideText={state === "collapsed"} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                render={<Link to="/" />}
                tooltip="Accueil"
                isActive={pathname === "/"}
              >
                <House />
                <span>Accueil</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                render={<Link to="/sites" />}
                tooltip="Sites enregistrés"
                isActive={pathname === "/sites"}
              >
                <Bookmark />
                <span>Sites enregistrés</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                render={<Link to="/user" />}
                tooltip="Mon compte"
                isActive={pathname === "/user"}
              >
                <UserRound />
                <span>Mon compte</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Bibliothèque</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                render={<Link to="/collections" />}
                tooltip="Collections"
                isActive={pathname === "/collections"}
              >
                <Folder />
                <span>Collections</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                render={<Link to="/note" />}
                tooltip="Notes"
                isActive={pathname === "/note"}
              >
                <NotepadText />
                <span>Notes</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                render={<Link to="/history" />}
                tooltip="Historique"
                isActive={pathname === "/history"}
              >
                <History />
                <span>Historique</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Suspense fallback={<SidebarUserSkeleton />}>
          <SidebarUser />
        </Suspense>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

function SidebarUser() {
  const { data } = useSuspenseQuery(convexQuery(api.auth.getCurrentUser, {}));
  const user = data as {
    email: string;
    name: string;
    image?: string | null;
  } | null;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex flex-col gap-2 p-2">
          <div className="flex items-center gap-2">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-700 text-xs font-semibold text-neutral-100 uppercase">
              {(user?.name ?? user?.email ?? "U").slice(0, 2)}
            </div>
            <div className="min-w-0 flex-1 group-data-[collapsible=icon]:hidden">
              <p className="truncate text-sm font-medium text-foreground">
                {user?.name ?? "Utilisateur"}
              </p>
              <p className="truncate text-xs text-muted-foreground">
                {user?.email}
              </p>
            </div>
          </div>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

function SidebarUserSkeleton() {
  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="flex items-center gap-2">
        <Skeleton className="size-8 rounded-full" />
        <div className="flex flex-1 flex-col gap-1.5 group-data-[collapsible=icon]:hidden">
          <Skeleton className="h-3.5 w-24" />
          <Skeleton className="h-3 w-32" />
        </div>
      </div>
      <Skeleton className="h-7 w-full group-data-[collapsible=icon]:hidden" />
    </div>
  );
}