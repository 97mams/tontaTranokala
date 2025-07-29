import { GroupeSiteForm } from "./groupForm"
import { Collapsible } from "@radix-ui/react-collapsible"
import { CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
import { SidebarGroupLabel, SidebarFooter,SidebarGroup, Sidebar, SidebarHeader } from "./ui/sidebar"
import { ChevronDown } from "lucide-react"
import { GroupeSiteList } from "./groupSite-list"

export function AppSidebar() {
  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        Tranokalako
      </SidebarHeader>
      <Collapsible defaultOpen className="group/collapsible">
        <SidebarGroup>
          <SidebarGroupLabel asChild>
            <CollapsibleTrigger>
              Historiques
              <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
              <GroupeSiteList />
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>
      <SidebarFooter>
        <GroupeSiteForm />
      </SidebarFooter>
    </Sidebar>
  )
}