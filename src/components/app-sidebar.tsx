import { Collapsible } from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { GroupeSiteForm } from "./groupForm";
import { GroupeList } from "./groupList";
import { CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from "./ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <Link href={"/"}>Tranokalako</Link>
      </SidebarHeader>
      <SidebarContent>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Groupe Sites
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <GroupeList type="site" />
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Groupe Plateforms
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <GroupeList type="plateform" />
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarFooter>
        <GroupeSiteForm />
      </SidebarFooter>
    </Sidebar>
  );
}
