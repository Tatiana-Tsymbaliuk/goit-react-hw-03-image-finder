import React from 'react';
import Loader from 'components/Loader/Loader';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';
import Button from 'components/Button/Button';
import fetchFoto from '../../api/api'
import Modal from 'components/Modal/Modal';

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
        }
      } 
  getFoto = async () =>{
    const nameSearch =this.props.nameSearch
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

  handleGalleryItem = (largeImageSrc) => {   
        this.setState({        
          largeImage: largeImageSrc,
          showModal: true,
        });     
      };
 
  toggleModal = () => {
            this.setState(prevState => ({
              showModal: !prevState.showModal,
              largeImage: '',
            }));
          };

        render(){
                const {fotos, loading, error, showModal, largeImage } = this.state            
        return(
          <div> 
           {showModal&& <Modal onClose ={this.toggleModal}>
           <img src={largeImage} alt="" />
           </Modal> }    
          <ul className="ImageGallery">
           {fotos ? ( <ImageGalleryItem items={fotos} onImageClick={this.handleGalleryItem} />) : (<div></div>)}
          </ul>
           {fotos.length >=this.state.currentPage*12?( <Button onLoadFoto ={this.loadFoto}/>) : (<div></div>)}
           {loading&&<Loader/>}
           {error&&<h1>Error...</h1>} 
          </div>       
          )} 
}