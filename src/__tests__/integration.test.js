import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";

import Root from "../Root";
import App from "../components/App";

let wrapped;

beforeEach(() => {
    moxios.install();
    moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
        status: 200,
        response: [{ name: "fetched #1" }, { name: "fetched #2" }],
    });
    wrapped = mount(
        <Root>
            <App />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
    moxios.uninstall();
});

describe("integration tests for comments", () => {
    it("can fetch a list of comments and display them", (done) => {
        wrapped.find("#fetch-comments").simulate("click");
        moxios.wait(() => {
            wrapped.update();
            expect(wrapped.find("li").length).toEqual(2);
            done();
        });
    });
});
