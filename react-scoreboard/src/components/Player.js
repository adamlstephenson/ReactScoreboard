import React from 'react';
import Counter from "./Counter";

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

export default Player;