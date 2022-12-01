import React from "react";
import Proptypes from 'prop-types';

export default function Gallery({ images }) {
    return (
        <div key={images}>
            <img src={images} />                        
        </div>
    );
    }

    Gallery.propTypes = {
    images: Proptypes.arrayOf(Proptypes.object).isRequired,
    };