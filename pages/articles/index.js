import Head from 'next/head'
import React from "react";
import Layout, {siteTitle} from "../../components/layout";

// this is the articles list page: "/articles"
const Articles = () => {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>

            </Head>

            <section>
                <h1>
                    <h1>Articles</h1>
                </h1>
            </section>
            <section>
                <p>This section will display Article titles with links to each [id].</p>
            </section>

        </Layout>
    )
}

export default Articles;
