import pumpItUpReducer from "./pumpItUpReducer"
import { makeInflateBalloonAction } from "../_actions/actions";

describe("balloonGameReducer", () => {
  it("should return balloonGame with score of 5", () => {
    const previousState = {
      score: 0,
      maxScore: 0,
      difficulty: "easy"
    }
    const expected = {
      score: 5,
      maxScore: 5,
      difficulty: "easy"
    }
    expect(pumpItUpReducer(previousState, makeInflateBalloonAction(previousState))).toEqual(expected)
  })
})