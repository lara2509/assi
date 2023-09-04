import React from 'react';
import axios from 'axios';
import './ImageDisplay.css';


const ImageDisplay = ({ imageUrl }) => {
  return (
    <div className="image-display">
      <img src={imageUrl} alt="Fetched Image" />
    </div>
  );
};

export default ImageDisplay;
