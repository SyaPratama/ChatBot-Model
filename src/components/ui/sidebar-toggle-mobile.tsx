"use client"

import { useIsMobile } from "../../hooks/use-mobile";
import { SidebarTrigger } from "./sidebar";

export function SidebarToggleMobile() {
  const isMobile = useIsMobile();

  return (
    <>
    {
        isMobile ? 
        <SidebarTrigger/>
        :
        null
    }
    </>
  );

}
