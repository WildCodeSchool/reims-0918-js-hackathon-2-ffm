import { INFLATE_BALLOON, DEFLATE_BALLOON } from "./actionTypes";

export const makeInflateBalloonAction = (pumpItUp) => ({
  type: INFLATE_BALLOON,
  pumpItUp
})

export const makeDeflateBalloonAction = (pumpItUp) => ({
  type: DEFLATE_BALLOON,
  pumpItUp
})