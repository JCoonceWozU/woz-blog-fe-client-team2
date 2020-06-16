import Layout from "../../components/layout";
import Head from "next/dist/next-server/lib/head";
import React from "react";
import fetch from "isomorphic-unfetch";
import useSWR from "swr";
import useRouter from "next";

const Article = ({ article }) => {

    // const router = useRouter( article.id );
    // const { data, error } = useSWR(`/api/articles/${router.article.id}`, fetch)
    //
    // if (error) return <div>Failed to load articles</div>
    // if (!data) return <div>Loading...</div>

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
            </article>
        </Layout>
    );
}

export async function getStaticPaths() {
    const res = await fetch('http://localhost:8080/api/articles/')
    const article = res.json();
    const paths = article.map( (article) => `/articles/${article.id}`)
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({params}) {
    const res = await fetch('http://localhost:8080/api/articles/${params.id}')
    const article = res.json();
    console.log(article)
    return {
        props: {
            article,
        },
    };
}

export default Article;

//serverside rendered
