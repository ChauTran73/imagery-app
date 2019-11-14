import React, { Component } from 'react';
import ImageListItem from '../../components/ImageListItem/ImageListItem'
import ImageApiService from '../../services/image-api-service'
import { Button } from '../Utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons"

class MyPins extends Component {
  handleDeleteImage(id) {
    ImageApiService.deleteImage(id)
      .then(alert('Deleted Image! Please refresh the page for now...'))
      
      .catch(err => console.log(err))
  }
  renderImages() {
    return this.props.myPins.map((image, index) =>
      <div className='ImageItem' key={index}>
        <ImageListItem
          key={image.id}
          image={image}
        />
        <Button onClick={() => this.handleDeleteImage(image.id)}>
          <FontAwesomeIcon icon={faTrash} size="lg" />
        </Button>

        
        </div>
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