import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ImageContext from '../../contexts/ThingContext'
import ImageApiService from '../../services/thing-api-service'
import { Hyph, Section } from '../../components/Utils/Utils'
// import { ThingStarRating } from '../../components/ThingStarRating/ThingStarRating'
import CommentForm from '../../components/CommentForm/CommentForm'
import './ImagePage.css'

export default class ImagePage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = ImageContext

  componentDidMount() {
    const { imageId } = this.props.match.params
    this.context.clearError()
    ImageApiService.getImage(imageId)
      .then(this.context.setImage)
      .catch(this.context.setError)
    ImageApiService.getImageComments(imageId)
      .then(this.context.setComments)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearImage()
  }

  renderImage() {
    const { image, comments } = this.context
    return <>
      <div className='ImagePage__image' style={{backgroundImage: `url(${image.image_url})`}} />
      <h2>{image.title}</h2>
      <ImageDesc image={image} />
      <ImageComments comments={comments} />
      <CommentForm />
    </>
  }

  render() {
    const { error, image} = this.context
    let dontent
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
    <p className='ImagePage__desc'>
      {image.description}
    </p>
  )
}

function ImageComments({ comments = [] }) {
  return (
    <ul className='ImagePage__comments-list'>
      {comments.map(comment =>
        <li key={comment.id} className='ImagePage__comment'>
          <p className='ImagePage__comment-text'>
            {/* <FontAwesomeIcon
              size='lg'
              icon='quote-left'
              className='ImagePage__review-icon blue'
            /> */}
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
