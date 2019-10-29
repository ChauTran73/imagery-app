import React, { Component } from 'react'

export const nullImage = {
  author: {},
}

const ImageContext = React.createContext({
  image: nullImage,
  comments: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setImage: () => {},
  clearImage: () => {},
  setComments: () => {},
  addComment: () => {},
  setLikes: () => {},
  addLike : () => {}
})

export default ImageContext

export class ImageProvider extends Component {
  state = {
    image: nullImage,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setImage = image => {
    this.setState({ image })
  }

  setComments = comments => {
    this.setState({ comments })
  }

  clearImage = () => {
    this.setImage(nullImage)
    this.setComments([])
  }

  addComment = comment => {
    this.setComments([
      ...this.state.comments,
      comment
    ])
  }

//   setLikes = likes => {
//       this.setLikes()
//   }

//   addLike = like =>{

//   }

  render() {
    const value = {
      image: this.state.image,
      comments: this.state.comments,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setImage: this.setImage,
      setComments: this.setComments,
      clearImage: this.clearImage,
      addComment: this.addComment,
    //   setLikes: this.setLikes,
    //   addLike: this.addLike
    }
    return (
      <ImageContext.Provider value={value}>
        {this.props.children}
      </ImageContext.Provider>
    )
  }
}
