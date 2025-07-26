"use client"

import { Collapsible } from "@radix-ui/react-collapsible"
import { CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
import { SidebarGroupLabel, SidebarGroupContent,SidebarGroup, Sidebar } from "./ui/sidebar"
import { ChevronDown } from "lucide-react"

export function AppSidebar() {
  return (
    <Sidebar>
      <Collapsible defaultOpen className="group/collapsible">
        <SidebarGroup>
          <SidebarGroupLabel asChild>
            <CollapsibleTrigger>
              Help
              <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <ul>
              <li>mety </li>
              <li>le izy</li>
              <li>fa</li>
              <li>rasy be</li>
            </ul>
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>
    </Sidebar>
  )
}