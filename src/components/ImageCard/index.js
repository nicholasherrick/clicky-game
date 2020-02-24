import React from 'react';
import './style.css';

function ImageCard(props) {
    return (
        <div onClick={() => props.clicked(props.id)} className="col-md-3 col-sm-6 col-xs-12 mx-auto img-fluid image">
            <img src={props.image} alt={props.name} />
        </div>
    );
}

export default ImageCard;