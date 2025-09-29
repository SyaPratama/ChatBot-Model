"use client";
import { Icon } from "../ui/icon";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarSeparator,
  SidebarTrigger,
} from "../ui/sidebar";
import { NavChats } from "./nav-chats";
import { NavFooter } from "./nav-footer";
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
        <NavChats />
      </SidebarContent>
      <SidebarFooter className="w-full p-0">
        <SidebarSeparator className="w-full m-0 group-data-[collapsible=icon]:hidden" />
        <NavFooter />
      </SidebarFooter>
    </Sidebar>
  );
}
