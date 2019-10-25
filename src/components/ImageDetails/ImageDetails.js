import React, { Component } from 'react';
import './ImageDetails.css';
import { Button, Input } from '../Utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { faEdit } from "@fortawesome/free-solid-svg-icons"

class ImageDetails extends Component {

    render() {
        return (
            <main role="main">
                <section class="image-details">
                    <img src="https://via.placeholder.com/250" alt="img-placeholder" />
                    <FontAwesomeIcon icon={faEdit} size="lg" />
                    <FontAwesomeIcon icon={faTrash} size="lg" />
                    <figcaption>Image Title</figcaption>
                    <p>Created on date 10/21/2019</p>
                    <h3>Description</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>
                <section class="comments">
                    <ul>
                        <li>
                            Richard says <br />
                            "LOL"
                            10/22/19 09:15PM
      </li>
                        <li>
                            Lili says <br />
                            "This is gorgeous"
                           10/22/19 08:15PM
      </li>
                        <li>
                            John says <br />
                            "It's alright, nothing special"
                            10/22/19 11:15PM
      </li>
                    </ul>
                </section>
                <section class="comment-form">
                    <h3>Comment</h3>
                    <textarea placeholder="What are you thinking of this image?"></textarea>
                    <button id="post-comment">Post
      <i class="fa fa-paper-plane"></i></button>
                </section>
            </main>
        );
    }
}
export default ImageDetails;