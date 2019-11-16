import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ImageContext from '../../contexts/ImageContext'
import ImageApiService from '../../services/image-api-service'
import { Hyph, Section } from '../../components/Utils/Utils'
import CommentForm from '../../components/CommentForm/CommentForm'
import './ImagePage.css'
import moment from 'moment'

const nullImage = {
  author: {},
}
export default class ImagePage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  state = {
    image: nullImage,
    error: null,
    comments: [],
  };

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
  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  componentDidMount() {
    const { imageId } = this.props.match.params
    this.clearError()
    ImageApiService.getImage(imageId) 
      .then(resJson => this.setImage(resJson))
      .catch(this.setError)
    ImageApiService.getImageComments(imageId)
      .then(resJson => this.setComments(resJson))
      .catch(this.setError) 
  }

  componentWillUnmount() {
    this.clearImage()
  }

  renderImage() {
    const { error, image, comments} = this.state
    return <>
      <div className='ImagePage__image' />
      <img src= {`${image.url}`} />
      <h2>{image.title}</h2>
      <ImageDesc image={image} />
      <ImageComments comments={comments} />
      <CommentForm />
    </>
  }

  render() {
    // const { error, image} = this.context
    const { error, image} = this.state
    let content
    if (error) {
      content = (error.error === `Image doesn't exist`)
        ? <p className='red'>Image not found</p>
        : <p className='red'>There was an error</p>
    } else if (!image.id) {
      content = <div className='loading' />
    } else {
      content = this.renderImage()
    }
    return (
      <Section className='ImagePage'>
        {content}
      </Section>
    )
  }
}

function ImageDesc({ image }) {
  return (
    <div className='ImagePage__desc'>
      {image.description}
      <p><i> - Created by {image.author.full_name}</i></p>
      On {moment(image.date_created).format('MMMM Do YYYY')}
    </div>
  )
}

function ImageComments({ comments = [] }) {
  return (
    <ul className='ImagePage__comment-list'>
      {comments.map(comment =>
        <li key={comment.id} className='ImagePage__comment'>
          <p className='ImagePage__comment-text'>
            {comment.text}
          </p>
          <p className='ImagePage__comment-user'>
            {/* <ThingStarRating rating={review.rating} /> */}
            <Hyph />
            {comment.user.full_name}
          </p>
        </li>
      )}
    </ul>
  )
}
