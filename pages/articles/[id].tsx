import React from "react";
import {useRouter} from "next/router";
import useSWR from 'swr';
import CommentList from "../../components/comments/commentList";

const fetcher = url => fetch(url).then(res => res.json())

const ArticlePage = () => {

    const router = useRouter();
    const { data, error } = useSWR(`http://localhost:8080/api/articles/${router.query.id}`, fetcher)

    if (error) return <div>Failed to load articles</div>
    if (!data) return <div>Loading...</div>

    return (
        <div>
            <title> {data.title} | Woz U Woz U Next.js Blog Project Team 2</title>
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
                <CommentList />
            </section>

        </div>
    )
}

export default ArticlePage;


