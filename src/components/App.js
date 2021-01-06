import React from "react";
import { Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import { changeAuth } from "../actions";

function App() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const renderLogin = () => {
        if (auth) {
            return (
                <button onClick={() => dispatch(changeAuth(false))}>
                    Sign Out
                </button>
            );
        }
        return (
            <button onClick={() => dispatch(changeAuth(true))}>Sign In</button>
        );
    };

    const renderHeader = (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/post">Post</Link>
                    </li>
                    <li>{renderLogin()}</li>
                </ul>
            </nav>
        </header>
    );

    return (
        <div className="App">
            {renderHeader}
            <Route exact path="/" component={CommentList} />
            <Route exact path="/post" component={CommentBox} />
        </div>
    );
}

export default App;
