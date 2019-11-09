import React, { Component } from 'react';
import './MyWall.css';
import { Button, Input } from '../Utils/Utils'
import AddImage from '../AddImage/AddImage'
import MyPins from '../../routes/MyPins/MyPins'
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
                <section className='my_pins'>
                    <h1>My Pins</h1>
                    <div>
                        
                    </div>
                </section>
               
                           
                
            </main>
        );
    }
}
export default MyWall;