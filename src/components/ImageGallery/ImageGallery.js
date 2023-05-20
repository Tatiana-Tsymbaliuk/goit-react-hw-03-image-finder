import React from 'react';
import Loader from '../Loader/Loader';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import '../ImageGallery/ImageGallery.css';
import Button from '../Button/Button';
import fetchFoto from '../../api/api';
import Modal from '../Modal/Modal';

export default class ImageGallery extends React.Component{
  state={
        fotos:[],
        currentPage: 1,
        loading: false,
        error: null,
        showModal: false,
        largeImage: '',
        totalAmount:'0',
        currentAmount: 0,
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
      const {hits, totalHits} = await fetchFoto(nameSearch, this.state.currentPage)
      this.setState(prevState => ({
        fotos: [...prevState.fotos, ...hits],
              })); 
      this.setState({totalAmount: totalHits});
      this.setState(prevState =>({currentAmount:prevState.currentAmount + hits.length,}))         
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
            const {fotos, loading, showModal, largeImage } = this.state;
            // const needToShowLoadMore = fotos.length !== 0 &&this.state.currentAmount !== this.state.totalAmount ;          
        return(
          <div> 
           {showModal&& <Modal onClose ={this.toggleModal}>
           <img src={largeImage} alt="" />
           </Modal> }    
          <ul className="ImageGallery">
           { loading ? (<Loader/> ) : (<ImageGalleryItem items={fotos} onImageClick={this.handleGalleryItem} />)}
          </ul>
           {fotos.length !== 0 &&
        this.state.currentAmount !== this.state.totalAmount?( <Button onLoadFoto ={this.loadFoto}/>):(false)}
         

          </div>       
          );
        } 
}