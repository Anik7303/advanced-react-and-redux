import React from "react";
import { mount } from "enzyme";

import Root from "../../Root";
import CommentBox from "../CommentBox";

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

describe("CommentBox", () => {
    it("renders without crashing", () => {});

    it("has a textarea and two buttons", () => {
        expect(wrapped.find("textarea").length).toEqual(1);
        expect(wrapped.find("button").length).toEqual(2);
    });

    describe("works with the textarea", () => {
        beforeEach(() => {
            wrapped.find("textarea").simulate("change", { target: { value: "new comment" } });
            wrapped.update();
        });

        it("has a textarea where users can type in", () => {
            expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
        });

        it("when form is submitted, textarea clears", () => {
            wrapped.find("form").simulate("submit");
            wrapped.update();
            expect(wrapped.find("textarea").prop("value")).toEqual("");
        });
    });
});
