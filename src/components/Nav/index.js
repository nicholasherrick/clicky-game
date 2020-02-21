import React from 'react';
import "./style.css";

function Nav(props) {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link" href="/"><h2>Presidential Clicky Game</h2></a>
            </li>
            <li className="nav-item">
                <h2 className="nav-link">Click an image to begin!</h2>
            </li>
            <li className="nav-item">
                <h2 className="nav-link">Score:{props.score} | Top Score:{props.topScore}</h2>
            </li>
        </ul>
    );
}

export default Nav;