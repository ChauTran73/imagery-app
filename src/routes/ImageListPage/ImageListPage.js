import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import ImageListItem from '../../components/ImageListItem/ImageListItem'
import ImageListContext from '../../contexts/ImageListContext'
import './ImageListPage.css'


export default class ImageListPage extends Component {
  state = {
    loading: true,
    renderSaveButton: false,
    renderDeleteButton: false
  }

  static contextType = ImageListContext

  componentDidMount() {
    if (this.props.location.pathname == '/') {
      this.setState({
        renderSaveButton: true,
      })
    }
    if(this.props.location.pathname == '/my-wall'){
      this.setState({
        renderDeleteButton: true
      })
    }
  }

  handleSaveImage = img => {
    const { personalImageList } = this.context
 
    if(personalImageList.length === 0){
      this.context.saveImage(img)
      alert('Saved Image!')
    }
    else{
      const result = personalImageList.find(image => image.id === img.id)
      if (personalImageList.indexOf(result) === -1) {
        this.context.saveImage(img)
        alert('Saved Image!')
      }
        else{
          alert('Image already saved')
        }

      }
    //     const newFav = {
    //       user_id: localStorage.getItem('user_id'),
    //       image_id: img.id,
    //     }
    //     FavouriteService.insertFavourite(newFav)
    //       .then(img => {
    //         this.context.saveImage(img);
    //       })
    //       alert('Saved Image!')
    //   }
    //   else {
    //     alert('Image already saved!')
    //   }
    // }
      

  }

  renderImages() {
    const { imageList } = this.context
    return imageList.map(image =>
      <ImageListItem
        key={image.id}
        image={image}
        handleSaveImage={this.handleSaveImage}
        renderSaveButton={this.state.renderSaveButton}
        renderDeleteButton={this.state.renderDeleteButton}
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
