import React from 'react';
import '../Scoreboard.css';
import Header from "./Header";
import Player from "./Player";

const Scoreboard = (props) => {

    const PLAYERS = [
        {
            name: "Adam Stephenson",
            score: 29
        },
        {
            name: "Erik Stephenson",
            score: 2
        }
    ]

    return (
        <div className="App">
            <Header title="Aldrich Scoreboard" />

            <div className="players">

                <div className="player">
                    {PLAYERS.map((player) => {
                        return <Player name={player.name} score={player.score} />
                    })}
                </div>
            </div >
        </div>
    )
}

export default Scoreboard;