import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header/Header";

export default function Layout({ title, keywords, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: "The best premium Shopify Them 2022",
  description: "new-gecko.myshopify.com",
  keywords: "",
};
