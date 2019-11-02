import React, { Component } from 'react';
import './ImageListItem.css';
import { Link } from 'react-router-dom'
import { Button, Input } from '../Utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { faEdit } from "@fortawesome/free-solid-svg-icons"

class ImageListItem extends Component {

    render() {
        const { image } = this.props
        return (
            <Link to={`/images/${image.id}`} className='ImageDetails'>
                <div className='ImageDetails_container'>
                    <div className='ImageDetails_text'>
                        <h2 className='ImageDetails_heading'>{image.title}</h2>
                        <p className='ImageDetails_description'>{image.description}</p>
                    </div>
                </div>
            </Link>
        );
    }
}
export default ImageListItem;