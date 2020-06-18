import React from "react";
import {useRouter} from "next/router";
import useSWR from 'swr';
import CommentInput from "../../components/comments/commentInput";
import Layout from "../../components/common/Layout";
import Head from "next/head";

const fetcher = url => fetch(url).then(res => res.json())

const ArticlePage = () => {

    const router = useRouter();
    const { data, error } = useSWR(`http://localhost:8080/api/articles/${router.query.id}`, fetcher)

    if (error) return <div>Failed to load articles</div>
    if (!data) return <div>Loading...</div>

    return (
        <div>
            <Head>
            <title> siteTitle </title>
            </Head>
            <section>
                <h1>
                    <p>Article: {data.title}</p>
                </h1>
            </section>
            <section>
                <p>This section will display each individual article.</p>
                <p> {data.body} </p>
            </section>
            <section>
                <CommentInput />
                {/*<CommentList />*/}
            </section>
        </div>
    )
}

export default ArticlePage;


