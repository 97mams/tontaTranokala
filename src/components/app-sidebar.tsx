import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuItem,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Separator } from "./ui/separator"
import { SingButton } from "./SingButton.tsx"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <img src="./logo.png" alt="logo" className="size-8 ml-4" />
        <Separator />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenuItem>tranokala</SidebarMenuItem>
          <SidebarMenuSubItem>test</SidebarMenuSubItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SingButton />
      </SidebarFooter>
    </Sidebar>
  )
}