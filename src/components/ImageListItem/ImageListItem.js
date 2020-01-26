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
            <div className='image-container'>
                <Link to={`/images/${image.id}`} className='ImageListItem'>
                    <div className='ImageListItem__image' >
                        <img src={`${image.url}`} />
                       
                        <div className='ImageListItem_details'>
                            <div className='ImageListItem_text'>
                                <h2 className='ImageListItem_heading'>{image.title}</h2>
                            </div>
                        </div>

                    </div>
                </Link>
                        {       
                            this.props.renderSaveButton ?
                                <span className='save-image'
                                    onClick={() => this.props.handleSaveImage(image)}>
                                    <FontAwesomeIcon icon={faHeart} size='lg'/>
                                </span> : null
                        }
                        {
                            this.props.renderSaveButton && localStorage.getItem('user_id') == image.author.id ? 
                            <div onClick={() => this.props.handleDeleteImage(image.id)}>
                                <FontAwesomeIcon icon={faTrash}/> 
                            </div>: null
        
                        }
                    
            </div>
        );
    }
}
export default ImageListItem;