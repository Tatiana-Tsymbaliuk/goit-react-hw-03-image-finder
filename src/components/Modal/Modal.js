import React from "react";
import { createPortal } from 'react-dom';
import './Modal.css'

const modalRoot = document.querySelector('#root-modal');

export default class Modal extends React.Component{
        componentDidMount(){
        window.addEventListener('keydown', this.handleKeyDown)
        }       
        componentDidUpdate(){
        window.removeEventListener('keydown', this.handleKeyDown)
        }
        handleBackdropClick = event => {
                if (event.currentTarget === event.target) {
                      this.props.onClose();
                    }}
        handleKeyDown = event => {
                 if (event.code === 'Escape') {
                        this.props.onClose();
                 }}

        render(){ 
                return(createPortal(  <div class="Overlay" onClick={this.handleBackdropClick}>
                <div class="Modal">
                {this.props.children}
                </div>
              </div>, modalRoot)
              ) 
        }
}