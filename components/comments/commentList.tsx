import {useRouter} from "next/router";
import useSWR from "swr";
import React from "react";
import BasicComment from "./comment";
import CommentInput from "./commentInput";

const fetcher = url => fetch(url).then(res => res.json())

const CommentList = () => {

    const { data } = useSWR(`http://localhost:8080/api/comment/`, fetcher)

    return (
        <div>
            <CommentInput />

            {data.map((comment) => (
                <BasicComment key={comment.id}/>
            ))}
        </div>
    );
}

export default CommentList;
