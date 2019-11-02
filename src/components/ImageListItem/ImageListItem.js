import React, { Component } from 'react';
import './ImageListItem.css';
import { Link } from 'react-router-dom'
import { Button, Input } from '../Utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons"


class ImageListItem extends Component {

    render() {
        const { image } = this.props
        return (
            <Link to={`/images/${image.id}`} className='ImageListItem'>
                <div className='ImageListItem__image' >
                    <img src={`${image.url}`} />

                    <div className='ImageListItem_details'>
                        <div className='ImageListItem_text'>
                            <h2 className='ImageListItem_heading'>{image.title}</h2>
                            <span >
                                <FontAwesomeIcon icon={faHeart} className="pin" size="lg" />
                            </span>

                        </div>
                    </div>
                </div>
            </Link>

        );
    }
}
export default ImageListItem;