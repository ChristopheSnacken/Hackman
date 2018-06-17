import React, { PureComponent } from 'react'
import { makeGuess } from '../actions/game'
import { connect } from 'react-redux'

import './Board.css'


class Buttons extends PureComponent {

  render() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return alphabet.map( letter => <button disabled = {this.props.guesses.indexOf(letter) >= 0} className="guesses" onClick={() => this.props.makeGuess(letter)}>{letter}</button>)
  }

}

const mapStateToProps = state => {
  return {
    guesses: state.guesses,

  }
}
export default connect(mapStateToProps, { makeGuess })(Buttons)
