import React from 'react';
import Loader from 'components/Loader/Loader';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';
import Button from 'components/Button/Button';
import fetchFoto from '../../api/api'
import Modal from 'components/Modal/Modal';
import {FaTimes} from "react-icons/fa";

export default class ImageGallery extends React.Component{
  state={
        fotos:[],
        currentPage: 1,
        loading: false,
        error: null,
        showModal: false,
        largeImage: '',
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
      const {hits} = await fetchFoto(nameSearch, this.state.currentPage)
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
  handleGalleryItem = fullImageUrl => {
        this.setState({
          largeImage: fullImageUrl,
          showModal: true,
        });
      };
  //  fullImage = handleGalleryItem(fotos.fullImageUrl); 
      toggleModal = () => {
            this.setState(prevState => ({
              showModal: !prevState.showModal,
              largeImage: '',
            }));
          };

        render(){
                const {fotos, loading, error, showModal, largeImage } = this.state
                //const {nameSearch} = this.props              
        return(
          <div> <div>
            <button type='button' onClick={this.toggleModal}>Open Modal</button> </div> 
           {showModal&& <Modal onClose ={this.toggleModal}>
           <button type="button" onClick={this.toggleModal}><FaTimes/></button>
            
            <img src={largeImage} alt="" />
            
           </Modal> } 
           
        <ul className="ImageGallery">
       {fotos ? ( <ImageGalleryItem items={fotos} onImageClick={this.handleGalleryItem} />) : (<div></div>)}
      </ul>
      {fotos.length >=this.state.currentPage*12?( <Button onLoadFoto ={this.loadFoto}/>) : (<div></div>)}
     {loading&&<Loader/>}
      {error&&<h1>Все пропало...</h1>} 
      </div>  
      
     )} 
}