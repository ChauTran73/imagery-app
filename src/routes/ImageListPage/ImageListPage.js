import React, { Component } from 'react'
import ImageApiService from '../../services/image-api-service'
import { Section } from '../../components/Utils/Utils'
import ImageListItem from '../../components/ImageListItem/ImageListItem'
import './ImageListPage.css'

export default class ImageListPage extends Component {
  state= {
    imageList: [],
    loading: true,
    // error: null
  }
  
  setImageList = imageList => {
    this.setState({imageList}, function () {
      console.log(this.state.imageList);
  });
  }

  componentDidMount() {
    ImageApiService.getImages()
    .then(resJson => this.setImageList(resJson))
    .catch(error => console.log(error))
      
  }

  renderImages() {
    return this.state.imageList.map(image =>
      <ImageListItem
        key={image.id}
        image={image}
      />
    )
  }

  render() {
    const { error } = this.context
    return (
      <Section list className='ImageListPage'>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderImages()}
      </Section>
    )
  }
}
