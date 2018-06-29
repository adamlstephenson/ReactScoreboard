import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Scoreboard</h1>
        </header>
        <div className="players">
          <div className="player">
            <div className="player-name">
              Adam Stephenson
            </div>
            <div className="player-score">
              <div className="counter">
                <button className="decrement"> - </button>
                <div className="counter-score"> 29 </div>
                <button className="increment"> + </button>
              </div>
            </div>
          </div>
          <div className="player">
            <div className="player-name">
              Erik Stephenson
            </div>
            <div className="player-score">
              <div className="counter">
                <button className="decrement"> - </button>
                <div className="counter-score"> 2 </div>
                <button className="increment"> + </button>
              </div>
            </div>
          </div>
        </div >
      </div>
    );
  }
}

export default App;
