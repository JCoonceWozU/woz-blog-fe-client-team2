import {useRouter} from "next/router";
import useSWR from "swr";
import React from "react";

//test path for comments
const fetcher = url => fetch(url).then(res => res.json())

const CommentsPage = () => {

    const router = useRouter();
    const {data, error} = useSWR(`http://localhost:8080/api/comments/${router.query.id}`, fetcher)

    if (error) return <div>Failed to load articles</div>
    if (!data) return <div>Loading...</div>

    return (
        <div>
            <title> Comments </title>
            <section>
                <h1>
                    <p>Comments</p>
                    <p>{data.id}</p>
                </h1>
            </section>

        </div>
    )
}

export default CommentsPage;
