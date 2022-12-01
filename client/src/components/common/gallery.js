import React from "react";
import Proptypes from 'prop-types';

export default function Gallery({ images }) {
    return (
        <div className="gallery">
        {images.map((image) => (
            <img src={image.url} alt={image.alt} key={image.alt} />
        ))}
        </div>
    );
    }

    Gallery.propTypes = {
    images: Proptypes.arrayOf(Proptypes.object).isRequired,
    };