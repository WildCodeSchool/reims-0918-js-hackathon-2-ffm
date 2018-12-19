import { INFLATE_BALLOON, DEFLATE_BALLOON } from "./actionTypes";

export const makeInflateBalloonAction = () => ({
  type: INFLATE_BALLOON
})

export const makeDeflateBalloonAction = () => {
  type: DEFLATE_BALLOON
}