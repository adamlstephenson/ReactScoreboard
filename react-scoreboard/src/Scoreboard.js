import React from 'react';
import './Scoreboard.css';

let players = [
    {
        name: "Adam Stephenson",
        score: 29
    },
    {
        name: "Erik Stephenson",
        score: 2
    }
]

const Header = (props) => {
    return (
        <header className="App-header">
            <h1 className="App-title">{props.title}</h1>
        </header>
    )
}

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="decrement"> - </button>
            <div className="counter-score"> {props.score} </div>
            <button className="increment"> + </button>
        </div>
    )
}

const Player = (props) => {
    return (
        <div className="player">
            <div className="player-name">
                {props.name}
            </div>
            <div className="player-score">
                <Counter score={props.score} />
            </div>
        </div>
    )
} 

const Scoreboard = (props) => {
    return (
        <div className="App">
            <Header title="Aldrich Scoreboard" />

            <div className="players">

                <div className="player">
                    {props.players.map((player) => {
                        return <Player name={player.name} score={player.score} />
                    })}
                    <Player name="Adam Stephenson" score={29} />
                    <Player name="Erik Stephenson" score={2} />
                </div>
            </div >
        </div>
    )
}

export default Scoreboard;