import React from 'react';
import Searchbar from '../components/Searchbar/Searchbar';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Button from './Button/Button';
import fetchFoto from '../api/api';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

export class App extends React.Component{
  state={
  nameSearch:'',
  fotos:[],
  currentPage: 1,
  loading: false,
  error: null,
  showModal: false,
  largeImage: '',
  totalAmount:'0',
  currentAmount: 0,
  }
handleFormSubmit = nameSearch=>{
  this.setState({
    fotos:[],
    nameSearch: nameSearch,
    currentPage: 1,
    error: null,
  });

}


 componentDidUpdate(_, prevState){
        const nameSearch =this.state.nameSearch
        const prevName = prevState.nameSearch
        if(prevName!==nameSearch){
                this.getFoto();     
        }      
      } 
  getFoto = async () =>{         
    const {nameSearch, currentPage } =this.state
    this.setState({loading: true})
    try {
      const {hits, totalHits} = await fetchFoto(nameSearch, currentPage);
      this.setState(prevState => ({
        fotos: [...prevState.fotos, ...hits],
        currentPage: prevState.currentPage + 1,
              })); 
      this.setState({totalAmount: totalHits});
      this.setState(prevState =>({currentAmount:prevState.currentAmount + hits.length,}))         
            } catch (error) {
              this.setState({ error });
            }finally{
            this.setState({loading:false})
            }
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
            const {fotos, loading, showModal, largeImage} = this.state;
        
        return(
          <div> 
            <Searchbar onSubmit={this.handleFormSubmit}/>
             { loading && <Loader/> } 
             <div>Vasya</div>
           <ImageGallery fotos={fotos} onImageClick={this.handleGalleryItem}/>
           {showModal&& <Modal onClose ={this.toggleModal}>
           <img src={largeImage} alt="" />
           </Modal> }    
          
           {fotos.length !== 0 && this.state.currentAmount !== this.state.totalAmount?( <Button onLoadFoto ={this.getFoto}/>):(false)}
          </div>       
          );
        } 
 
};
