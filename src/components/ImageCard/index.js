import React from 'react';
import './style.css';

function ImageCard(props) {
    return (
        <div className="card col-3 mx-auto">
            <div className="img-fluid image">
                <img src={props.image} alt={props.name}/>
                <span onClick={() => props.clicked()}></span>
            </div>
        </div>
    );
}

export default ImageCard;