import { INFLATE_BALLOON } from "../_actions/actionTypes";

const initialState = {
  score: 0,
  maxScore: 0,
  difficulty: "easy"
}

const pumpItUpReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case INFLATE_BALLOON:
      return {
        ...action.pumpItUp,
        score: action.pumpItUp.score + 5,
        maxScore: action.pumpItUp.score + 5 > action.pumpItUp.maxScore ? action.pumpItUp.score + 5 : action.pumpItUp.maxScore
      }
    default:
      return previousState
  }
}

export default pumpItUpReducer