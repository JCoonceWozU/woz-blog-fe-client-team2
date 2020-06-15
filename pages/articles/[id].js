import Layout from "../../components/layout";
import Head from "next/dist/next-server/lib/head";
import React from "react";

export default function articles({ article }) {
    return (
        <Layout>
            <Head>
                <title>{article.title}</title>
            </Head>
            <article>
                {article.title}
                <br />
                {article.id}
                <br />
                {article.body}
                <br />
                {/*<Date dateString={postData.date} />*/}
                <br />
                {/*<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />*/}
            </article>
        </Layout>
    );
}

export async function getStaticProps({ params }) {
    const res = await fetch('https://localhost:8080/api/articles/${params.id}')
    const article = res.json();
    return {
        props: {
            article,
        },
    };
}

//serverside rendered
