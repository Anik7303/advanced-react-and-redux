import { SAVE_COMMENT } from "../../actions/types";
import reducer from "../comments";

describe("Reducer: comments", () => {
    it("handles actions of type SAVE_COMMENT", () => {
        const comment = "New Comment";
        const action = { type: SAVE_COMMENT, payload: comment };
        const newState = reducer([], action);
        expect(newState).toEqual([comment]);
    });

    it("doesn't throw error for unknown action types", () => {
        const action = { type: "UNKNOWN_ACTION_TYPE" };
        const newState = reducer([], action);
        expect(newState).toEqual([]);
    });
});
