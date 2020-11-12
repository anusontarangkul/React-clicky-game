import React from "react";
import "./style.css";

function Card(props) {
    return (

        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img onClick={props.handleClick} id={props.id} src={props.imageURL} className="image-edits" alt={props.alt} data-id={props.id}></img>
                </div>
            </div>
        </div>
    )
}
export default Card;
