import React from 'react';

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="decrement"> - </button>
            <div className="counter-score"> {props.score} </div>
            <button className="increment"> + </button>
        </div>
    )
}

export default Counter;