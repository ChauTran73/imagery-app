import React, { Component } from 'react';
import ImageListItem from '../../components/ImageListItem/ImageListItem'
import ImageApiService from '../../services/image-api-service'
import './MyPins.css'
import ImageListContext from '../../contexts/ImageListContext'

class MyPins extends Component {
  constructor(props){
    super(props);
    this.state = {
      imageList: props.myPins,
    }
  }
 
  static contextType = ImageListContext

  handleDeleteImage = image_id => {
    const updatedImages = this.context.personalImageList.filter(image => image.id !== image_id)
    this.context.setPersonalImageList(updatedImages)
    this.context.deleteImage(image_id)
    ImageApiService.deleteImage(image_id)
    .then(alert('Deleted successfully!'))
    .catch(err => alert(err.message))
}


  renderImages() {
    return this.props.myPins.map((image, index) =>
      <div className='ImageItem' key={index}>
        <ImageListItem
          key={image.id}
          image={image}
          handleDeleteImage={this.handleDeleteImage}
        />
      </div>
    )
  }
  render() {
    // if (!this.props.isShowing) {
    //   return null;
    // }
    return (
      <div className='Pins_Gallery'>
      <h2>My Pins</h2>
        {this.props.myPins.length > 0 ? this.renderImages() : 'No pins at the moment!'}
      </div>
    );
  }
};
export default MyPins;