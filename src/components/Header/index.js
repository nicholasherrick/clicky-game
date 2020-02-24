import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div className="text-center jumbotron">
            <h1 className="header text-center">{props.children}</h1>
            <hr/>
            <p>Don't click on the same president more than once</p>
        </div>
    );
}

export default Header;