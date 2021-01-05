import axios from "axios";

import { SAVE_COMMENT, FETCH_COMMENTS } from "./types";

export function saveComment(comment) {
    return { type: SAVE_COMMENT, payload: comment };
}

export function fetchComments() {
    return async (dispatch) => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
        return dispatch({ type: FETCH_COMMENTS, payload: res.data });
    };
}
