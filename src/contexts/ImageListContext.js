import React, { Component } from 'react'

const ImageListContext = React.createContext({
  imageList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setImageList: () => {},
})
export default ImageListContext

export class ImageListProvider extends Component {
  state = {
    imageList: [],
    error: null,
  };

  setImageList = imageList => {
    this.setState({ imageList })
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
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setImageList: this.setImageList,
    }
    return (
      <ImageListContext.Provider value={value}>
        {this.props.children}
      </ImageListContext.Provider>
    )
  }
}
