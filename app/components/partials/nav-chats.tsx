import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

const nav = [
  {
    id: 1,
    title: "New Chat",
  },
  {
    id: 2,
    title: "New Chat",
  },
];

export function NavChats() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>
        <h2>Chats</h2>
      </SidebarGroupLabel>
      <SidebarMenu>
        {nav.map((item) => (
          <SidebarMenuItem key={item.id} className="group-data-[collapsible=icon]:hidden my-0.5">
            <SidebarMenuButton>
              <span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
