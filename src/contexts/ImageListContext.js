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
  async setImageList(imageList){
    await this.setState({ imageList });
    console.log(this.state.imageList);
}
  // setImageList = imageList => {
  //   this.setState({imageList}, function () {
  //     console.log(this.imageList);
  // });
  // }

  addImage = image => { //not sure if this works?
    this.setImageList(
      [
      ...this.state.imageList, image,
      ...this.state.personalImageList, image
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
      personalImageList: this.state.personalImageList,
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
