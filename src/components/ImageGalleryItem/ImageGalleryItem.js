import React from 'react';
import './ImageGalleryItem.css'
const ImageGalleryItem = ({items, onImageClick}) => {
   
      return items.map(item => (     
                 <li className="ImageGalleryItem" key ={item.id}>
            <img src={item.webformatURL } 
            alt={item.tags} 
            onClick={()=>onImageClick(item.largeImageURL)}
            className='ImageGalleryItem-image'/>
          </li>
          
              ))}
          
        
export default ImageGalleryItem;
