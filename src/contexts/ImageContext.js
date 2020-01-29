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

  deleteComment = id => {
    let updatedComments = this.state.comments.filter(comment => comment.id !== id)
    this.setState({comments: [...updatedComments]})
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


  render() {
    const value = {
      image: this.state.image,
      comments: this.state.comments,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setImage: this.setImage,
      setComments: this.setComments,
      deleteComment: this.deleteComment,
      clearImage: this.clearImage,
      addComment: this.addComment,
    }
    return (
      <ImageContext.Provider value={value}>
        {this.props.children}
      </ImageContext.Provider>
    )
  }
}
