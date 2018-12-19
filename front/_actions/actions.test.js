import { INFLATE_BALLOON } from "./actionTypes"
import { makeInflateBalloonAction, makeDeflateBalloonAction } from "./actions";

describe("makeInflateBalloonAction", () => {
  it("should return a INFLATE_BALLON action", () => {
    const expected = {
      type: INFLATE_BALLOON
    }
    expect(makeInflateBalloonAction()).ToEqual(expected)
  })
})

describe("makeDeflateBalloonAction", () => {
  it("should return a DEFLATE_BALLON action", () => {
    const expected = {
      type: DEFLATE_BALLOON,
      ou: "ere"
    }
    expect(makeDeflateBalloonAction()).ToEqual(expected)
  })
})