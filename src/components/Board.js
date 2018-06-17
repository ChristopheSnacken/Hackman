import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { newGame, makeGuess } from '../actions/game'
import {randomWord,showGuess,wrongGuessCount,wrongGuessLimit,isWinner} from '../lib/game'


class Board extends PureComponent {


  componentWillMount() {
    this.props.newGame(randomWord())
  }



  render() {
    return (
      <div className="Board">
        <h1>Board</h1>
        <h3>{showGuess(this.props.newWord, this.props.guesses)}</h3>
        {/* Ugly but works */}
        <div className="wrapper">
          <div>
            <button onClick={() => this.props.makeGuess('a')}>a</button>
            <button onClick={() => this.props.makeGuess('b')}>b</button>
            <button onClick={() => this.props.makeGuess('c')}>c</button>
            <button onClick={() => this.props.makeGuess('d')}>d</button>
            <button onClick={() => this.props.makeGuess('e')}>e</button>
            <button onClick={() => this.props.makeGuess('f')}>f</button>
          </div>
          <div>
            <button onClick={() => this.props.makeGuess('g')}>g</button>
            <button onClick={() => this.props.makeGuess('h')}>h</button>
            <button onClick={() => this.props.makeGuess('i')}>i</button>
            <button onClick={() => this.props.makeGuess('j')}>j</button>
            <button onClick={() => this.props.makeGuess('k')}>k</button>
            <button onClick={() => this.props.makeGuess('l')}>l</button>
          </div>
          <div>
            <button onClick={() => this.props.makeGuess('m')}>m</button>
            <button onClick={() => this.props.makeGuess('n')}>n</button>
            <button onClick={() => this.props.makeGuess('o')}>o</button>
            <button onClick={() => this.props.makeGuess('p')}>p</button>
            <button onClick={() => this.props.makeGuess('q')}>q</button>
            <button onClick={() => this.props.makeGuess('r')}>r</button>
          </div>
          <div>
            <button onClick={() => this.props.makeGuess('r')}>s</button>
            <button onClick={() => this.props.makeGuess('t')}>t</button>
            <button onClick={() => this.props.makeGuess('u')}>u</button>
            <button onClick={() => this.props.makeGuess('v')}>v</button>
            <button onClick={() => this.props.makeGuess('w')}>w</button>
            <button onClick={() => this.props.makeGuess('x')}>x</button>
          </div>
          <div>
            <button onClick={() => this.props.makeGuess('y')}>y</button>
            <button onClick={() => this.props.makeGuess('z')}>z</button>
          </div>
        </div>



        <h3>
          Number of No-No's:{''}
          {wrongGuessCount(this.props.newWord, this.props.guesses)}
        </h3>
        <h3 className="Start"><Link to={ `/` }>New Game</Link></h3>

        <div>
          {wrongGuessLimit(this.props.newWord, this.props.guesses) && (
            <h1>BOOOOO!</h1>
          )}
          {isWinner(this.props.newWord, this.props.guesses) && (
            <h1>YEAH!</h1>
          )}
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
