import React, {useState} from "react";
import {Comment, Tooltip, Avatar} from 'antd';
import moment from "moment";
import {useRouter} from "next/router";
import useSWR from "swr";

const fetcher = url => fetch(url).then(res => res.json())

const BasicComment = () => {

    const router = useRouter();
    const {
        query: { id },
    } = router;
    const { data } = useSWR(`http://localhost:8080/api/comment/${router.query.id}`, fetcher)

    const { comment } = data;

    const actions = [
        <span key="comment-basic-reply-to">Reply to</span>,
    ];

    return (
        <Comment
            actions={actions}
            author={comment.author}
            content={
                <p>
                    {comment.body}
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
