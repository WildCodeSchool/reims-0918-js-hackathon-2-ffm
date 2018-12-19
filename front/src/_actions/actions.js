import { INFLATE_BALLOON, DEFLATE_BALLOON, CHOOSE_CARD } from "./actionTypes";

export const makeInflateBalloonAction = (pumpItUp) => ({
  type: INFLATE_BALLOON,
  pumpItUp
})

export const makeDeflateBalloonAction = (pumpItUp) => ({
  type: DEFLATE_BALLOON,
  pumpItUp
})


export const makeChooseCardAction = (memory) => ({
  type: CHOOSE_CARD,
  memory
})