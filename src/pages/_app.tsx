import "@/styles/globals.css";
import 'react-markdown-editor-lite/lib/index.css';

import { ToasterProvider } from "@/context/ToasterContext";
import { ModalProvider } from "@/context/ModalContext";
import type { AppProps } from "next/app";
import { HydrationProvider } from "@/context/HydrationContext";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <HydrationProvider>
      <ToasterProvider>
        <ModalProvider>
            <Component {...pageProps} />
        </ModalProvider>
      </ToasterProvider>
    </HydrationProvider>
  )
}