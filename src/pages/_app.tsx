import { AppProps } from "next/app";
import { DefaultLayout } from "../layouts/default";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
