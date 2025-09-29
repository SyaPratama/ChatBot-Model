"use client";
import { Icon } from "../ui/icon";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
} from "../ui/sidebar";
import { NavChats } from "./nav-chats";
import { NavMain } from "./nav-main";

export function MainSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="inline">
        <div className="w-full inline-flex p-2 justify-between group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0">
          <Icon className="w-6 inline-flex group-data-[collapsible=icon]:hidden" />
          <SidebarTrigger className="inline-flex" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
        <NavChats/>
      </SidebarContent>
    </Sidebar>
  );
}
