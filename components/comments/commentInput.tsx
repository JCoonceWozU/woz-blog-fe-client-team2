import {trigger} from "swr";
import React from "react";

const CommentInput = () => {

    const [content, setContent] = React.useState("");
    const [isLoading, setLoading] = React.useState(false);

    const handleChange = React.useCallback((e) => {
        setContent(e.target.value);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch('http://localhost:8080/api/comment/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain, */*',
            },
            body: JSON.stringify(content),
        })
        console.log(res)
        setLoading(false);
        setContent("");
        await trigger(`http://localhost:8080/api/comment`);

    };

    return (
        <form className="card comment-form" onSubmit={handleSubmit}>
            <div className="card-block">
        <textarea
            rows={5}
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

// const fetcher = url => fetch(url).then(res => res.json())

// const router = useRouter();
// const { data } = useSWR(`http://localhost:8080/api/comment/${router.query.id}`, fetcher)
