import { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <Head>
        {/* put all meta-tags here */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div id="top" className="layout">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
