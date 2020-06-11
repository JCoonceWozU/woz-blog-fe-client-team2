import Head from 'next/head'
import {siteTitle} from "../components/layout";
import React from "react";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>{siteTitle}</title>
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>

      <main>
        <h1 className="title">
          Learn <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

    </div>
  )
}
