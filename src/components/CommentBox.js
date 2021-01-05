import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { saveComment, fetchComments } from "../actions";

function CommentBox() {
    const [comment, setComment] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(saveComment(comment));
        setComment("");
    };

    const handleFetchComments = (event) => {
        event.preventDefault();
        dispatch(fetchComments());
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>Add a Comment</h4>
            <textarea
                rows={6}
                cols={26}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <div>
                <button onClick={handleSubmit}>Submit</button>
                <button id="fetch-comments" onClick={handleFetchComments}>
                    Fetch Comments
                </button>
            </div>
        </form>
    );
}

export default CommentBox;
