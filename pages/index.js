import React, {Component} from 'react';
import Layout, {siteTitle} from "../components/layout";
import Head from "next";
import Link from "next";
import fetch from "isomorphic-unfetch";

//this is home page
const Index = ( ) => {
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
                <h2>Articles</h2>
                <ul>

                </ul>

            </section>

        </Layout>
    )
}

// export async function getStaticProps() {
//     const res = await fetch('http://localhost:8080/api/articles')
//     const articles = await res.json()
//     //console.log(articles)
//     return {
//         props: {
//             articles,
//         },
//     }
// }

export default Index;
