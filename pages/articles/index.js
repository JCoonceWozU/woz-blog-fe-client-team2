import Head from 'next/head'
import Layout, {siteTitle} from "../../components/layout";
import React from "react";
import Link from "next";
import fetch from "isomorphic-unfetch";


const Articles = ({articles}) => {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section>
                <h1>
                    Articles
                </h1>
            </section>
            <section>
                <ul>
                    {articles.map(({id, title}) => (
                        <li key={id}>
                            <Link href="./[id].js" as={`/articles/${id}`}>
                                <a>{title}</a>
                            </Link>

                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:8080/api/articles')
    const articles = await res.json()
    console.log(articles)

    return {
        props: {
            articles,
        },
    }
}

export default Articles;
