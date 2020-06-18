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
        const res = await fetch('http://localhost:8080/api/comments/', {
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
    };

    return (
        <form className="card comment-form">
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
                <button className="btn btn-sm btn-primary" type="submit" onSubmit={handleSubmit}>
                    Post Comment
                </button>
            </div>
        </form>
    );
};

export default CommentInput;


//have button redirect to articles
