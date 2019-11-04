import React, { Component } from 'react';
import './MyWall.css';
import { Button, Input } from '../Utils/Utils'
import AddImage from '../AddImage/AddImage'
import ImageListPage from '../../routes/ImageListPage/ImageListPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from "@fortawesome/free-solid-svg-icons"

class MyWall extends Component {

    state = { isShowing: false };
    
    toggleModal = () => {
        this.setState({
          isShowing: !this.state.isShowing
        });
      }
    render() {
        return (
            <main >
            
                <button type="button" onClick={this.toggleModal} >
                   <FontAwesomeIcon icon={faPlus} size="lg"/>
                </button>
                <AddImage isShowing={this.state.isShowing} handleClose={this.toggleModal}/>
                <h1>My Pins</h1>
                           
                <ImageListPage/>
            </main>
        );
    }
}
export default MyWall;