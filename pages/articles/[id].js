import Layout from "../../components/layout";
import Head from "next/dist/next-server/lib/head";
import React from "react";
import {getAllArticleIds, getArticle} from "../../lib/article/article";

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
                {/*<Date dateString={postData.date} />*/}
                <br />
                {/*<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />*/}
            </article>
        </Layout>
    );
}

export async function getStaticProps({ params }) {
    const article = await getArticle(params.id);
    return {
        props: {
            article,

        },
    };
}

export async function getStaticPaths() {
    const paths = getAllArticleIds();
    return {
        paths,
        fallback: false,
    };
}
