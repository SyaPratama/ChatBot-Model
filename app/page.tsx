import { SidebarInset } from "./components/ui/sidebar";
import { SidebarToggleMobile } from "./components/ui/sidebar-toggle-mobile";

export default function Home() {
  return (
    <SidebarInset className="p-4">
      <SidebarToggleMobile/>
    </SidebarInset>
  );
}
