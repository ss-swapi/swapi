import React from "react";
import './PersonCard.scss'

function PersonCard(props) {
    return (
        <div className="person-card">
            <h3>{props.name}</h3>
            <ul className="card-details-list">
                <li>Origin: <strong>{props.homeworld.name}</strong></li>
                <li>Height: <strong>{props.height}</strong></li>
                <li>Mass: <strong>{props.mass}</strong></li>
                <li>Birth Date: <strong>{props.birthYear}</strong></li>
            </ul>
        </div>
    );
}

export default PersonCard;
