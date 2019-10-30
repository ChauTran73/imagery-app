import React, { Component } from 'react'
import ImageListContext from '../../contexts/ImageListContext'

import { Section } from '../../components/Utils/Utils'
import ImageDetails from '../../components/ImageDetails/ImageDetails'
import './ImageListPage.css'

export default class ImageListPage extends Component {
  static contextType = ImageListContext

  componentDidMount() {
    this.context.clearError()
    ImageApiService.getImages()
      .then(this.context.setImageList)
      .catch(this.context.setError)
  }

  renderImages() {
    const { imageList = [] } = this.context
    return imageList.map(image =>
      <ImageDetails
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
