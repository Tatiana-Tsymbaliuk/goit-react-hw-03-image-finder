import React from 'react';
import { Audio } from 'react-loader-spinner'
// import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends React.Component{
  state={
        fotos: null,
        loading: false,
  }   
      componentDidUpdate(prevProps, prevState){
        if(prevProps.nameSearch!==this.props.nameSearch){
                console.log('update project');
                this.setState({loading: true})
                fetch(`https://pixabay.com/api/?q=${this.props.nameSearch}&page=1&key=35097057-211b94425911255e7a1c05e6d&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res=> res.json())
                .then(fotos=>this.setState({fotos}))
                .finally(()=>this.setState({loading:false}))
        }
      }  

        render(){
                const {fotos, loading} = this.state
                const {nameSearch} = this.props
                return(
                <ul className="">
               {loading&&<div><Audio
                height="80"
                width="80"
                radius="9"
                color="blue"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass/></div>}
                        {!nameSearch&&<div>Vvedite name foto</div>}
                       {fotos&& <div>{fotos.hits.id}</div>} 
                        {/* {fotos&&  fotos.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}*/}
        </ul>)} 
}