import { ThemeProvider } from "next-themes";
import { MainSidebar } from "./components/partials/main-sidebar";
import { SidebarProvider } from "./components/ui/sidebar";
import "./styles/globals.css";
import "./styles/app.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider defaultOpen={false}>
            <MainSidebar />
            {children}
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
