import Layout from "../../components/layout";
import Head from "next/dist/next-server/lib/head";
import React from "react";
import fetch from "isomorphic-unfetch";

const Article = ({article}) => {
    return (
        <Layout>
            <Head>
                <title>{article.title}</title>
            </Head>
            <article>
                {article.title}
                <br/>
                {article.id}
                <br/>
                {article.body}
                <br/>
                {/*<Date dateString={postData.date} />*/}
                <br/>
                {/*<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />*/}
            </article>
        </Layout>
    );
}

export async function getStaticProps({params}) {
    const res = await fetch('http://localhost:8080/api/articles/${params.id}')
    const article = res.json();
    return {
        props: {
            article,
        },
    };
}

export async function getStaticPaths() {
    const res = await fetch('http://localhost:8080/api/articles')
    const articles = await res.json()
    const paths = articles.map((article) => ({
        params: { id: article.id },
    }))
    return {
        paths: [
            { params: { id: '1' } },
        ],
        fallback: false
    };
}

export default Article;

//serverside rendered
