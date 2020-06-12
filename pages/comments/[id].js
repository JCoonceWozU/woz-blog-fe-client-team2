import Layout from "../../components/layout";
import {getAllCommentIds, getCommentData} from '../../lib/comments/comments'
import Head from "next/head";
import React from "react";

export default function Comment({ commentData }) {
    return (
        <Layout>
            <Head>
                <title>{commentData.title}</title>
            </Head>
            <article>
                <h1>{commentData.title}</h1>
                <div>
                    <Date dateString={commentData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: commentData.contentHtml }} />
            </article>
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = getAllCommentIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const commentData = await getCommentData(params.id);
    return {
        props: {
            commentData,
        },
    };
}
