"use client"

import { Collapsible } from "@radix-ui/react-collapsible"
import { CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
import { SidebarGroupLabel, SidebarFooter,SidebarGroup, Sidebar, SidebarHeader } from "./ui/sidebar"
import { ChevronDown } from "lucide-react"
import { Button } from "./ui/button"

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
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>
      <SidebarFooter>
        <Button>nouvelle stack</Button>
      </SidebarFooter>
    </Sidebar>
  )
}