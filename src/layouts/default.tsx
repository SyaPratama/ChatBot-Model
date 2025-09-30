import { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import { MainSidebar } from "@/components/partials/main-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";

export function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <>
      <MainSidebar/>
      <SidebarInset className="px-4 py-3">{children}</SidebarInset>
    </>
  );
}
