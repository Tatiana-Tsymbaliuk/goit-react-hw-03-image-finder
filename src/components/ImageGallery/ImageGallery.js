// import React from 'react';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import '../ImageGallery/ImageGallery.css';


const ImageGallery=({items, onImageClick})=>{
  <ul className="ImageGallery">
  {items.map(item => {
    return (
      <ImageGalleryItem
        key={item.id}
        image={item}
        onImageClick={onImageClick}
      />
    );
  })}
</ul>
}
export default ImageGallery;
