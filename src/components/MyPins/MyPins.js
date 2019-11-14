import React, { Component } from 'react';
import ImageListItem from '../../components/ImageListItem/ImageListItem'
import ImageApiService from '../../services/image-api-service'
import { Button } from '../Utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MyPins extends Component {
    renderImages(){
        return this.props.myPins.map(image =>
          <ImageListItem
            key={image.id}
            image={image}
          />
        )
      }
    render() {
        if (!this.props.isShowing) {
            return null;
        }
        return (
            <div className='my_pins'>
                {this.renderImages()}
            </div>
        );
    }



};
export default MyPins;