import { combineReducers } from 'redux'
import newWord from './newWord'
import guesses from './guesses'


export default combineReducers({
  newWord,
  guesses
})
