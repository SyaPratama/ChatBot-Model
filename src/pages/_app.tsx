import { AppProps } from "next/app";
import { DefaultLayout } from "../layouts/default";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import { SidebarProvider } from "components/ui/sidebar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <html>
      <DefaultSeo title="Paw CHAT" />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
        enableSystem
      >
        <SidebarProvider defaultOpen={false}>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </SidebarProvider>
      </ThemeProvider>
    </html>
  );
}
