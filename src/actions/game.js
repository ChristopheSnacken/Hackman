export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'

export const newGame = newWord => {
  return {
    type: NEW_GAME,
    payload: newWord
  }
}

export const makeGuess = guess => {
  return {
    type: MAKE_GUESS,
    payload: guess
  }
}
