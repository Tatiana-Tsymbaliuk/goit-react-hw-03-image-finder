import React from 'react';
import Searchbar from "components/Searchbar/Searchbar";
import ImageGallery from "components/ImageGallery/ImageGallery"



export class App extends React.Component{
  state={
  nameSearch:'',
  }
handleFormSubmit= nameSearch=>{
  this.setState({nameSearch});
}

  render(){
  return (
    <div>
      <Searchbar onSubmit={this.handleFormSubmit}/>
      <ImageGallery nameSearch={this.state.nameSearch}/>
    </div>
  )};
};
