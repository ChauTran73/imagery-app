import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import ImageApiService from '../../services/image-api-service'
import { Hyph, Section } from '../../components/Utils/Utils'
import CommentForm from '../../components/CommentForm/CommentForm'
import './ImagePage.css'
import moment from 'moment'
import ImageContext from '../../contexts/ImageContext'

export default class ImagePage extends Component {
  static defaultProps = { //this props inherits from router
    match: { params: {} },
  }

  static contextType = ImageContext;


  componentDidMount() {
    const { imageId } = this.props.match.params //get image id from the params in url
    this.context.clearError()
    ImageApiService.getImage(imageId) 
      .then(resJson => this.context.setImage(resJson))
      .catch(this.setError)

    ImageApiService.getImageComments(imageId)
      .then(resJson => this.context.setComments(resJson))
      .catch(this.setError) 
    
  }

  componentWillUnmount() {
    this.context.clearImage()
  }

  deleteComment = id =>{
    this.context.deleteComment(id)
    ImageApiService.deleteComment(id)
    .catch(err => console.log(err))
  }

  renderImage() {
     const { error, image, comments} = this.context
    
    return <>
      <div className='ImagePage__image' />
      <img src= {`${image.url}`} height='450'/>
      <ImageDesc image={image} />
      <h3>Comments</h3>
      <ImageComments comments={comments} deleteComment={this.deleteComment}/>
      <CommentForm 
        image={image} 
        addComment={this.context.addComment}
        setError={this.context.setError}
      />
    </>
  }

  render() {
  
    const { error, image} = this.context
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
      <h2>{image.title}</h2>
      <p>{image.description}</p>
      <p> By <i> {image.author.full_name} </i></p>
      <p> Created on {moment(image.date_created).format('MMMM Do YYYY')}</p>
    </div>
  )
}

function ImageComments({ comments = [], deleteComment }) {
  return (
    <ul className='ImagePage__comment-list'>
    {comments.length == 0 ? <b>No comments at this moment!</b> : 
      comments.map(comment =>
        <li key={comment.id} className='ImagePage__comment'>
          <p className='ImagePage__comment-text'>
            {comment.text} 
          </p>
          <p className='ImagePage__comment-user'>
            {/* <StarRating rating={comment.rating} /> */}
            <Hyph />
            {comment.user.full_name}   {'  '}
            {localStorage.getItem('user_id') == comment.user.id ? 
            <span onClick={() => deleteComment(comment.id)}>
              <FontAwesomeIcon icon={faTrash} style={{color: 'red'}}/>
            </span> :  null}
          </p>
          
        </li>

      )}
      
    </ul>
  )
}
