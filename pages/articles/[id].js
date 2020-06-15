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
    const res = await fetch('https://localhost:8080/api/${id}')
    const article = await getArticle(params.id);
    return {
        props: {
            article,
        },
    };
}

export async function getStaticPaths() {
    const res = await fetch('https://localhost:8080/api/articles')
    //const paths = getAllArticleIds();
    const paths = articles.map((article) => ({
        params: { id: article.id },
     }))
    return {
        paths,
        fallback: false,
    };
}

// // This also gets called at build time
// export async function getStaticProps({ params }) {
//     // params contains the post `id`.
//     // If the route is like /posts/1, then params.id is 1
//     const res = await fetch(`https://.../posts/${params.id}`)
//     const post = await res.json()
//
//     // Pass post data to the page via props
//     return { props: { post } }
// }
// // This function gets called at build time
// export async function getStaticPaths() {
//     const res = await fetch('https://.../posts')
//     const posts = await res.json()
//
//     // Get the paths we want to pre-render based on posts
//     const paths = posts.map((post) => ({
//         params: { id: post.id },
//     }))
//
//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: false }
// }

