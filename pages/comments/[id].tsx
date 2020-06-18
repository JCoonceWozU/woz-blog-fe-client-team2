import {useRouter} from "next/router";
import useSWR from "swr";
import React from "react";

//test path for comments
const fetcher = url => fetch(url).then(res => res.json())

const CommentsPage = () => {

    const router = useRouter();
    const {data} = useSWR(`http://localhost:8080/api/comments/${router.query.id}`, fetcher)

    return (
        <div>
            <title> Comments </title>
            <section>
                <h1>
                    <p>Comments</p>
                    {data.body}
                </h1>
            </section>

        </div>
    )
}

export default CommentsPage;
