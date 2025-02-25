import "@/styles/globals.css";
import 'react-markdown-editor-lite/lib/index.css';

import { ToasterProvider } from "@/context/ToasterContext";
import { ModalProvider } from "@/context/ModalContext";
import type { AppProps } from "next/app";
import { DataProvider } from "@/context/DataContext";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <DataProvider>
      <ToasterProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </ToasterProvider>
    </DataProvider>
  )
}