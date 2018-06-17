import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { newGame } from '../actions/game'
import {randomWord,showGuess,wrongGuessCount,wrongGuessLimit,isWinner} from '../lib/game'
import Buttons from './buttons'
import './Board.css'



class Board extends PureComponent {


  componentWillMount() {
    this.props.newGame(randomWord())
  }

  render() {



    return (
      <div className="Board">
        <div>
          {wrongGuessLimit(this.props.newWord, this.props.guesses) && (
            <div>
              <h1 className= "boo">BOOOOO! Want to try another word?</h1>
              <h3 className="Start"><Link to={ `/` }>New Game</Link></h3>
          </div>
          )}

          {isWinner(this.props.newWord, this.props.guesses) && (
            <div>
              <h1 className= "good">YEAH! Well DONE</h1>
              <h3 className="Start"><Link to={ `/` }>New Game</Link></h3>
          </div>
          )}

        </div>

        <h3>{showGuess(this.props.newWord, this.props.guesses)}</h3>

        <h3>
          Number of No-No's:
          {wrongGuessCount(this.props.newWord, this.props.guesses)}
        </h3>


        <div className="wrapper">
          <Buttons />

        </div>

      </div>

  )}
}




const mapStateToProps = state => {
  return {
    newWord: state.newWord,
    guesses: state.guesses,

  }
}


export default connect(mapStateToProps, { newGame})(Board)
