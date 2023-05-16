import React from 'react';
import './ImageGalleryItem.css'
const ImageGalleryItem = ({items}) => {
         
      return items.map(item => (
                 <li className="ImageGalleryItem" key ={item.id}>
            <img src={item.webformatURL } alt={item.tags} className='ImageGalleryItem-image'/>
          </li>
          
              ))}
          
        
export default ImageGalleryItem;
