import useSWR, {trigger} from "swr";
import React from "react";
import {useRouter} from "next/router";

const fetcher = url => fetch(url).then(res => res.json())

const CommentInput = () => {

    const router = useRouter();
    const {
        query: { id },
    } = router;

    const [content, setContent] = React.useState("");
    const [isLoading, setLoading] = React.useState(false);

    const handleChange = React.useCallback((e) => {
        setContent(e.target.value);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        useSWR(`http://localhost:8080/api/comment/`, fetcher)
        setLoading(false);
        setContent("");
        await trigger(`http://localhost:8080/api/comment/`);
    };

    return (
        <form className="card comment-form" onSubmit={handleSubmit}>
            <div className="card-block">
        <textarea
            rows={3}
            className="form-control"
            placeholder="Write a comment..."
            value={content}
            onChange={handleChange}
            disabled={isLoading}
        />
            </div>
            <div className="card-footer">
                <button className="btn btn-sm btn-primary" type="submit">
                    Post Comment
                </button>
            </div>
        </form>
    );
};

export default CommentInput;
