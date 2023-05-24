//import React from 'react';
import '../ImageGalleryItem/ImageGalleryItem.css'
const ImageGalleryItem = ({item, onImageClick}) => {
    return(<li className="ImageGalleryItem">       
            <img 
            src={item.webformatURL} 
            alt={item.tags} 
            onClick={()=>onImageClick(item.largeImageURL)}
            className='ImageGalleryItem-image'/>
          </li> );        
              }
ImageGalleryItem.defaultProps = {
                tags: '',
              };
              
export default ImageGalleryItem;

// return items.map(item => (     
//   <li className="ImageGalleryItem" key ={item.id}>
// <img src={item.webformatURL } 
// alt={item.tags} 
// onClick={()=>onImageClick(item.largeImageURL)}
// className='ImageGalleryItem-image'/>
// </li>         
// ))