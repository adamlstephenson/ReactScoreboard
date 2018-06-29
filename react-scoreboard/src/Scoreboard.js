import React from 'react';
import './Scoreboard.css';


const Scoreboard = (props) => {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">{props.title}</h1>
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
    )
}

export default Scoreboard;