import { NEW_GAME, MAKE_GUESS } from '../actions/game.js'

export default (state = [], action) => {
  switch (action.type) {
    case NEW_GAME:
      return []
    case MAKE_GUESS:
      return [...state, action.payload]
    default:
      return state
  }
}
