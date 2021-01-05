import { SAVE_COMMENT } from "../types";
import { saveComment } from "../";

describe("save comment action", () => {
    it("has the correct type", () => {
        const action = saveComment("");
        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it("has the correct payload", () => {
        const comment = "New Comment";
        const action = saveComment(comment);
        expect(action.payload).toEqual(comment);
    });
});
