import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import './App.css';
import Start from './components/Start';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hangman Game</h1>
        </header>
        <main>
          <Route exact path="/" component={Start} />
          <Route path="/hangman" component={Board} />
        </main>
      </div>
    );
  }
}

export default App;
