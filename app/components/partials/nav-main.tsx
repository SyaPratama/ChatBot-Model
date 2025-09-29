import { BsPencilSquare, BsSearch } from "react-icons/bs";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";


const nav = [
  {
    title: "New Chat",
    icon: BsPencilSquare,
  },
  {
    title: "Search Chat",
    icon: BsSearch,
  },
];

export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>
        <h2>Main</h2>
      </SidebarGroupLabel>
      <SidebarMenu>
        {nav.map((item) => (
          <SidebarMenuItem key={item.title} className="my-0.5">
            <SidebarMenuButton className="cursor-pointer">
              <item.icon />
              <span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
