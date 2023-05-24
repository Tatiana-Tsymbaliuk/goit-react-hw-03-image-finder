import React from 'react';
import {FaSistrix} from 'react-icons/fa';
import './Searchbar.css'

export default class Searchbar extends React.Component{
        state ={
        nameSearch:'',
        }
handleNameChange = event=>{
        const { name, value } = event.currentTarget;

            this.setState({
              [name]: value,
            });
}
handleSubmit = event=>{
        event.preventDefault();
        if(this.state.nameSearch.trim()=== ''){
             alert('Введите свой поиск');
                return;  
        }  
         
             this.props.onSubmit(this.state.nameSearch);
        this.setState({nameSearch:''})
}
// resetForm = () =>
//     this.setState({
//         nameSearch: '',
//     });
        render(){
                return(
                        <header className="Searchbar">
                        <form className="SearchForm " onSubmit = {this.handleSubmit}>
                          <button type="submit" className="SearchForm-button">
                          <span className="button-label"><FaSistrix className="Icon"/></span>
                          </button>
                      
                          <input
                            className="SearchForm-input"
                            type="text"
                            name="nameSearch"
                            value={this.state.nameSearch}
                            onChange={this.handleNameChange}
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                          />
                        </form>
                      </header>      
                )
        }
}