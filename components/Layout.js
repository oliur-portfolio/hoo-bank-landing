import React from "react";
import Head from "next/head";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = ({ title, children, nav }) => {
  return (
    <div>
      <Head>
        <title>{title ? title : "Landing Page"}</title>
      </Head>

      <Navbar nav={nav} />
      <main className="min-h-[80vh] mx-auto relative overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};
