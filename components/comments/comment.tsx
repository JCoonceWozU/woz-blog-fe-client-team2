import React from "react";
import {Comment, Tooltip} from 'antd';
import moment from "moment";
import {useRouter} from "next/router";
import useSWR from "swr";

const BasicComment = () => {

    const fetcher = url => fetch(url).then(res => res.json())

    const router = useRouter();
    const { data, error } = useSWR(`http://localhost:8080/api/comments/${router.query.id}`, fetcher)

    if (error) return <div>Failed to load articles</div>
    if (!data) return <div>Loading...</div>

    const actions = [
        <span key="comment-basic-reply-to">Reply to</span>,
    ];

    return (
        <Comment
            actions={actions}
            author={data.author}
            content={
                <p>
                    {data.body}
                </p>
            }
            datetime={
                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().fromNow()}</span>
                </Tooltip>
            }
        />
    );
}

export default BasicComment;
//const fetcher = url => fetch(url).then(res => res.json())
// const { data } = useSWR(`http://localhost:8080/api/comment/`, fetcher)
// console.log(data);
