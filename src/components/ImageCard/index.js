import React from 'react';
import './style.css';

function ImageCard(props) {
    return (
        // Runs the clicked function in App.js when an image is clicked, passing in the id of the clicked president
        <div onClick={() => props.clicked(props.id)} className="col-md-3 col-sm-6 col-xs-12 mx-auto img-fluid image">
            {/* Dropped in the needed props to display the correct image */}
            <img src={props.image} alt={props.name} />
        </div>
    );
}

export default ImageCard;