import React from "react";
import {Comment, Tooltip} from 'antd';
import moment from "moment";

const BasicComment = () => {
    //
    // const actions = [
    //     <span key="comment-basic-reply-to">Reply to</span>,
    // ];
    //
    // return (
    //     <Comment
    //         actions={actions}
    //         author={data.author}
    //         content={
    //             <p>
    //                 {data.body}
    //             </p>
    //         }
    //         datetime={
    //             <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
    //                 <span>{moment().fromNow()}</span>
    //             </Tooltip>
    //         }
    //     />
    // );
}

export default BasicComment;
//const fetcher = url => fetch(url).then(res => res.json())
// const { data } = useSWR(`http://localhost:8080/api/comment/`, fetcher)
// console.log(data);
