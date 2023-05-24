// import React from 'react';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import '../ImageGallery/ImageGallery.css';


const ImageGallery=({fotos, onImageClick})=>{
  return (<ul className="ImageGallery">
  {fotos.map(foto => {
    return (
      <ImageGalleryItem
        key={foto.id}
        image={foto}
        onImageClick={onImageClick}
      />
    );
  })}
</ul>)
}
export default ImageGallery;
