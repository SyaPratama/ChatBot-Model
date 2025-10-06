import { MainSidebar } from "@/components/partials/main-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export function DefaultLayout({ children }: PropsWithChildren) {
  const isMobile: Boolean = useIsMobile()

  return (
    <>
      <SidebarProvider>
        <MainSidebar />
        <SidebarInset>
          <div className={cn("fixed top-5 left-5 z-1", !isMobile ? "hidden" : "" )}>
            <SidebarTrigger/>
          </div>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
