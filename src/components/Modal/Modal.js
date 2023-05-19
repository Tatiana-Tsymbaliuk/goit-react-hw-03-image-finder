import React from "react";
import { createPortal } from 'react-dom';
import './Modal.css'

const modalRoot = document.querySelector('#root-modal');

export default class Modal extends React.Component{
        componentDidMount(){

window.addEventListener('keydown', this.handleKeyDown)
        }
handleKeyDown = event => {
             if (event.code === 'Escape') {
              this.props.onClose();
             }
        }
        
        componentDidUpdate(){
                window.removeEventListener('keydown', this.handleKeyDown)
        }
        handleBackdropClick = event => {
                    if (event.currentTarget === event.target) {
                      this.props.onClose();
                    }}
        render(){ 
                return(createPortal(  <div class="Overlay" onClick={this.handleBackdropClick}>
                <div class="Modal">
                {/* <img src={this.props.largeImage} alt="" /> */}
                {this.props.children}
                </div>
              </div>, modalRoot)
              ) 
        }
}