import { AppProps } from "next/app";
import { DefaultLayout } from "../components/layouts/default";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo" 
import { baseSEO } from "@/lib/defaultSeo";
import "@/styles/globals.css";
import "@/styles/app.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo { ...baseSEO }/>
      <ThemeProvider attribute="class">
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ThemeProvider>
    </>
  );
}
