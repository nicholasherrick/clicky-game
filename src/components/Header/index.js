import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div className="text-center jumbotron">
            <h1 className="header text-center">{props.children}</h1>
            <hr/>
            <p>{props.message}</p>
        </div>
    );
}

export default Header;