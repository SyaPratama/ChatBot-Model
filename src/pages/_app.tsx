import { AppProps } from "next/app";
import { DefaultLayout } from "../components/layouts/default";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import "@/styles/app.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ThemeProvider>
    </>
  );
}
