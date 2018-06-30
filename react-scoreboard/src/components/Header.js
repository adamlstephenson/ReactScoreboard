import React from 'react';

const Header = (props) => {
    return (
        <header className="App-header">
            <h1 className="App-title">{props.title}</h1>
        </header>
    )
}

export default Header;