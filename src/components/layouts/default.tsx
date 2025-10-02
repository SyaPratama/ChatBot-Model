import { MainSidebar } from "@/components/partials/main-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { PropsWithChildren } from "react";

export function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <>
      <SidebarProvider>
        <MainSidebar />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </>
  );
}
