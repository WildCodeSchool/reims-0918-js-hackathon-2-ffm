import memoryReducer from "./memoryReducer"
import { makeChooseCardAction } from "../_actions/actions";

describe("memoryReducer", () => {
  it("should return a chosen card", () => {
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
    expect(memoryUpReducer(previousState, makeChooseCardAction(previousState))).toEqual(expected)
  })
})