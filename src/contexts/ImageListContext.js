import React, { Component } from 'react'

const ImageListContext = React.createContext({
  imageList: [],
  personalImageList: [],
  error: null,
  loading: true,
  setError: () => {},
  clearError: () => {},
  setImageList: () => {},
})
export default ImageListContext

export class ImageListProvider extends Component {
  state = {
    imageList: [],
    personalImageList: [],
    error: null,
  };

  setImageList = imageList => {
    this.setState({imageList})
  }

  setPersonalImageList = personalImageList => {
    this.setState({personalImageList})
  }

  addImage = image => {
    this.setState({
      imageList:  [
        ...this.state.imageList, image
      ],
      personalImageList: this.state.personalImageList.concat(image)
    })
  }

  saveImage = image => {
    this.setState({
      personalImageList: this.state.personalImageList.concat(image)
    })
  }

  deleteImage = image_id => {
    let updatedImageList = this.state.imageList.filter(image => image.id !== image_id)
    this.setState({
      imageList: [...updatedImageList],
    })
  }
  

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      imageList: this.state.imageList,
      personalImageList: this.state.personalImageList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setImageList: this.setImageList,
      setPersonalImageList: this.setPersonalImageList,
      addImage: this.addImage,
      saveImage: this.saveImage,
      deleteImage: this.deleteImage
    }
    return (
      <div>
      {this.loading ? <div>Loading Images...</div> :
      <ImageListContext.Provider value={value}>
        {this.props.children}
      </ImageListContext.Provider>}
      </div>
    )
  }
}
