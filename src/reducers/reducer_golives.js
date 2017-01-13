import { FETCH_GOLIVES } from '../actions'
const INITIAL_STATE = { all: [] }

export const GoLivesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_GOLIVES:
      return {...state, all: action.payload.data}
    default:
      return state
  }
}
