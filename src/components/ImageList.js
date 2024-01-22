// src/components/ImageList.js
import React from 'react';
import './ImageList.css';

function ImageList(props) {
  return (
    <div>
      {props.images.map((image) => (
        <div className="image-card" key={image.id}>
          <img src={image.urls.regular} alt={image.alt_description} />
          <p>{image.alt_description}</p>
          <a href={image.links.html} target="_blank" rel="noopener noreferrer">
            View on Unsplash
          </a>
        </div>
      ))}
    </div>
  );
}

export default ImageList;
