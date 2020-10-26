import React from "react";
import './PersonCard.scss'

function PersonCard(props) {
    return (
        <div className="person-card">
            <h3>{props.name}</h3>
            <ul className="card-details-list">
                <li><strong>Origin</strong>: {props.homeworld.name}</li>
                <li><strong>Height</strong>: {props.height}</li>
                <li><strong>Mass</strong>: {props.mass}</li>
                <li><strong>Birth Date</strong>: {props.birthYear}</li>
            </ul>
        </div>
    );
}

export default PersonCard;
