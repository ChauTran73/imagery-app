import React, { Component } from 'react';
import './ImageListItem.css';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart , faTrash} from "@fortawesome/free-solid-svg-icons"
import ImageListContext from '../../contexts/ImageListContext'

class ImageListItem extends Component {
    static contextType = ImageListContext;

    render() {
        const { image } = this.props
        return (
            <div className='ImageListItem'>
                <Link to={`/images/${image.id}`} >
                    <div className='ImageListItem__image' >
                        <img src={`${image.url}`} />
                       
                        <div className='ImageListItem_details'>
                            <div className='ImageListItem_text'>
                                <h2 className='ImageListItem_heading'>{image.title}</h2>
                            </div>
                        </div>
                        {       
                            this.props.renderSaveButton && localStorage.getItem('user_id')?
                                <button className='save-icon'
                                    onClick={() => this.props.handleSaveImage(image)}>
                                    {/* <FontAwesomeIcon icon={faHeart} /> */} Save
                                </button> : null
                        }
                    </div>
                </Link>
                      
                        {
                            this.props.renderDeleteButton && localStorage.getItem('user_id') == image.author.id ? 
                            <div onClick={() => this.props.handleDeleteImage(image.id)}>
                                <FontAwesomeIcon icon={faTrash}/> 
                            </div>: null
        
                        }
                    
            </div>
        );
    }
}
export default ImageListItem;