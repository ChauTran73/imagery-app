import React, { Component } from 'react'
import ImageContext from '../../contexts/ImageContext'
import ImageApiService from '../../services/image-api-service'
import { Button, Textarea } from '../Utils/Utils'
import './CommentForm.css'


export default class CommentForm extends Component {
 // static contextType = ImageContext 

  handleSubmit = ev => {
    ev.preventDefault()
    // const { image } = this.context
    //this image is passed from ImagePage and contains info about img and the author who created it
    const { image }= this.props 
    console.log(image)
    const { text } = ev.target

    ImageApiService.postComment(image.id, text.value)
      // .then(this.context.addComment)
      .then(this.props.addComment)
      .then(() => {
        text.value = ''
      })
      .catch(this.props.setError)
  }

  render() {
    return (
      <form
        className='CommentForm'
        onSubmit={this.handleSubmit}
      >
        <div className='text'>
          <Textarea
            required
            aria-label='Type a comment...'
            name='text'
            id='text'
            cols='30'
            rows='3'
            placeholder='Type a comment..'>
          </Textarea>
        </div>

        <div className='select'>
          <label htmlFor='rating'>Rate this thing!</label>
          <select
            required
            aria-label='Rate this image!'
            name='rating'
            id='rating'
          >
            <option value='1'>1 Star</option>
            <option value='2'>2 Stars</option>
            <option value='3'>3 Stars</option>
            <option value='4'>4 Stars</option>
            <option value='5'>5 Stars</option>
          </select>
        </div>

        <button type='submit'>
          Post Comment
        </button>
      </form>
    )
  }
}
