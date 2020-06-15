import Head from 'next/head'
import Layout, {siteTitle} from "../components/layout";
import React from "react";

 // this is the home page
export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
                {/*<link rel="icon" href="/favicon.ico" />*/}
            </Head>

            <section>
                <h1>
                    {siteTitle}
                </h1>
            </section>
            <section>
                <p>This section will display Article cards with routes to [id].</p>

            </section>

        </Layout>
    )
}

