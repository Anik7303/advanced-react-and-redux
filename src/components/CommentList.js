import React from "react";
import { useSelector } from "react-redux";

function CommentList() {
    const comments = useSelector((state) => state.comments);
    const renderComments = comments.map((comment, index) => <li key={index}>{comment}</li>);
    return <ul>{renderComments}</ul>;
}

export default CommentList;
