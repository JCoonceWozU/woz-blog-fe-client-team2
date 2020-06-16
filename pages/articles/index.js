import Head from 'next/head'
import Layout, {siteTitle} from "../../components/layout";
import React from "react";
import Link from "next";
import fetch from "isomorphic-unfetch";
import useSWR from "swr";


const Articles = ({props}) => {

    //const { article } = useSWR('/api/articles', fetch)

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
                    {props.article.map((article) => (
                        <li key={article.id}>
                            <Link href="./articles/[id]" as={`/articles/${article.id}`}>
                                <a>{props.article.title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

// export async function getStaticProps() {
//     const res = await fetch('http://localhost:8080/api/articles')
//     const article = await res.json()
//     //console.log(article)
//     return {
//         props: {
//             article,
//         },
//     }
// }

export default Articles;
