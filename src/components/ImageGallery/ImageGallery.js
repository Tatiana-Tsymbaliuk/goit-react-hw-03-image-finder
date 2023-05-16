import React from 'react';
import Loader from 'components/Loader/Loader';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';
import Button from 'components/Button/Button';
import fotoAPI from './src/api'

export default class ImageGallery extends React.Component{
  state={
        fotos: '',
        loading: false,
        error: null,
  }   
      componentDidUpdate(prevProps, prevState){
        const nameSearch =this.props.nameSearch
        const prevName = prevProps.nameSearch
        if(prevName!==nameSearch){
                console.log('update project');
                this.setState({loading: true})
                fotoAPI
                .fetchFoto(nameSearch)
                .then(data=>this.setState({fotos:data.hits}))
                .catch(error=>this.setState({error}))
                .finally(()=>this.setState({loading:false}))
        }
      }  

        render(){
                const {fotos, loading, error} = this.state
                const {nameSearch} = this.props
        return(
          <div>   {error&&<h1>Все пропало...</h1>}    
        <ul className="ImageGallery">
               {loading&&<Loader/>}
                {!nameSearch&&<div>Vvedite name foto</div>}
                {fotos ? ( <ImageGalleryItem items={fotos}/>) : (<div></div>)}
      </ul>
      {fotos&&<Button/>}
      </div>  
      
     )} 
}