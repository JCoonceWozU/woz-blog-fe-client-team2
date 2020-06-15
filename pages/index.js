import Head from 'next/head'
import Layout, {siteTitle} from "../components/layout";
import React from "react";
import {getArticlesForHome} from "../lib/article/article";

export async function getStaticProps() {
    const allArticles = getArticlesForHome();
    return {
        props: {
            allArticles,
        },
    };
}

 // this is the home page
export default function Home( ) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
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

