import React from 'react';
import Loader from 'components/Loader/Loader';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';
import Button from 'components/Button/Button';
import fetchFoto from '../../api/api'

export default class ImageGallery extends React.Component{
  state={
        fotos:[],
        currentPage: 1,
        loading: false,
        error: null,

  }   
     async componentDidUpdate(prevProps, prevState){
        const nameSearch =this.props.nameSearch
        const prevName = prevProps.nameSearch
        if(prevName!==nameSearch||this.state.currentPage!==prevState.currentPage){
                this.getFoto();
              // try {
              //   const {hits} = await fetchFoto(nameSearch)
              //   this.setState({fotos: hits})
              // } catch (error) {
              //   this.setState({error})
              // }finally{
              //   this.setState({loading:false})
              // }
              
        }
      } 
  getFoto = async () =>{
    const nameSearch =this.props.nameSearch
   //const currentPage = this.state;
    this.setState({loading: true})
    try {
      const {hits} = await fetchFoto(nameSearch)
      this.setState(prevState => ({
        fotos: [...prevState.fotos, ...hits],
        
              }));
             
            } catch (error) {
              this.setState({ error });
            }finally{
            this.setState({loading:false})
            }
            }

  loadFoto = ()=>{
    this.setState(prevState =>({currentPage:prevState.currentPage+=1}))
    
  }

        render(){
                const {fotos, loading, error} = this.state
                const {nameSearch} = this.props              
        return(
          <div>      
        <ul className="ImageGallery">
               {loading&&<Loader/>}
                {!nameSearch&&<div>Vvedite name foto</div>}
                {fotos ? ( <ImageGalleryItem items={fotos}/>) : (<div></div>)}
      </ul>
      {nameSearch?( <Button onLoadFoto ={this.loadFoto}/>) : (<div></div>)}
     
      {error&&<h1>Все пропало...</h1>} 
      </div>  
      
     )} 
}