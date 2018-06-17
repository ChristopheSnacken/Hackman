import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { newGame, makeGuess } from '../actions/game'
import {randomWord,showGuess,wrongGuessCount,wrongGuessLimit,isWinner} from '../lib/game'
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
          Number of No-No's:{''}
          {wrongGuessCount(this.props.newWord, this.props.guesses)}
        </h3>

        {/* Ugly but works */}
        <div className="wrapper">
          <div>
            <button className="guesses" onClick={() => this.props.makeGuess('a')}>a</button>
            <button className="guesses" onClick={() => this.props.makeGuess('b')}>b</button>
            <button className="guesses" onClick={() => this.props.makeGuess('c')}>c</button>
            <button className="guesses" onClick={() => this.props.makeGuess('d')}>d</button>
            <button className="guesses" onClick={() => this.props.makeGuess('e')}>e</button>
            <button className="guesses" onClick={() => this.props.makeGuess('f')}>f</button>
          </div>
          <div>
            <button className="guesses" onClick={() => this.props.makeGuess('g')}>g</button>
            <button className="guesses" onClick={() => this.props.makeGuess('h')}>h</button>
            <button className="guesses" onClick={() => this.props.makeGuess('i')}>i</button>
            <button className="guesses" onClick={() => this.props.makeGuess('j')}>j</button>
            <button className="guesses" onClick={() => this.props.makeGuess('k')}>k</button>
            <button className="guesses" onClick={() => this.props.makeGuess('l')}>l</button>
          </div>
          <div>
            <button className="guesses" onClick={() => this.props.makeGuess('m')}>m</button>
            <button className="guesses" onClick={() => this.props.makeGuess('n')}>n</button>
            <button className="guesses" onClick={() => this.props.makeGuess('o')}>o</button>
            <button className="guesses" onClick={() => this.props.makeGuess('p')}>p</button>
            <button className="guesses" onClick={() => this.props.makeGuess('q')}>q</button>
            <button className="guesses" onClick={() => this.props.makeGuess('r')}>r</button>
          </div>
          <div>
            <button className="guesses" onClick={() => this.props.makeGuess('r')}>s</button>
            <button className="guesses" onClick={() => this.props.makeGuess('t')}>t</button>
            <button className="guesses" onClick={() => this.props.makeGuess('u')}>u</button>
            <button className="guesses" onClick={() => this.props.makeGuess('v')}>v</button>
            <button className="guesses" onClick={() => this.props.makeGuess('w')}>w</button>
            <button className="guesses" onClick={() => this.props.makeGuess('x')}>x</button>
          </div>
          <div>
            <button className="guesses" onClick={() => this.props.makeGuess('y')}>y</button>
            <button className="guesses" onClick={() => this.props.makeGuess('z')}>z</button>
          </div>
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


export default connect(mapStateToProps, { newGame, makeGuess })(Board)
