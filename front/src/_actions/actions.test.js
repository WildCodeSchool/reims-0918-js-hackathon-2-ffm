import { INFLATE_BALLOON, DEFLATE_BALLOON, CHOOSE_CARD } from "./actionTypes"
import { makeInflateBalloonAction, makeDeflateBalloonAction, makeChooseCardAction } from "./actions";

describe("makeInflateBalloonAction", () => {
  it("should return a INFLATE_BALLON action", () => {
    const pumpItUp = {
      score: 0
    }
    const expected = {
      type: INFLATE_BALLOON,
      pumpItUp
    }
    expect(makeInflateBalloonAction(pumpItUp)).toEqual(expected)
  })
})

describe("makeDeflateBalloonAction", () => {
  it("should return a DEFLATE_BALLON action", () => {
    const pumpItUp = {
      score: 0
    }
    const expected = {
      type: DEFLATE_BALLOON,
      pumpItUp
    }
    expect(makeDeflateBalloonAction(pumpItUp)).toEqual(expected)
  })
})


describe("makeChooseCardAction", () => {
  it("should return a CHOOSE_CARD action", () => {
    const memory = {
      score: 0
    }
    const expected = {
      type: CHOOSE_CARD,
      memory
    }
    expect(makeChooseCardAction(memory)).toEqual(expected)
  })
})