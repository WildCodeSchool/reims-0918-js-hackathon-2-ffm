import { } from "../_actions/actionTypes";

const initialState = {
  card1: null,
  card2: null,
  score: 0,
  maxScore: 0,
  difficulty: "easy"
}

const memoryReducer = (previousState = initialState, action) => {
  return previousState
}

export default memoryReducer