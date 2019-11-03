import React, { Component } from 'react'

const ImageListContext = React.createContext({
  imageList: [],
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
    error: null,
  };

  // setImageList = imageList => {
  //   this.setState({ imageList })
  //   console.log(this.imageList)
  // }
  setImageList = imageList => {
    this.setState({imageList}, function () {
      console.log(this.imageList);
  });
  }

  addImage = image => {
    this.setImageList([
      ...this.state.imageList, image
    ])
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
      <div>
      {this.loading ? <div>Loading Images...</div> :
      <ImageListContext.Provider value={value}>
        {this.props.children}
      </ImageListContext.Provider>}
      </div>
    )
  }
}
