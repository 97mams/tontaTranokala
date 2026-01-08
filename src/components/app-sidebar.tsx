import { Collapsible } from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
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
  SidebarSeparator,
} from "./ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <Link href={"/tranokala"}>
          <Image width={30} height={30} alt="logo" src={"/tranokala.png"} />
        </Link>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Groupe Sites
                </h4>
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
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Groupe Plateformes
                </h4>
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
