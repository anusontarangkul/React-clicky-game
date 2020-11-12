import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <nav className="nav">
            <h1>Gym Memes</h1>
            <h3 className="message">{props.message}</h3>
            <h3>Score: {props.score} | Top Score: {props.topScore}</h3>
        </nav>
    );

}

export default Nav;