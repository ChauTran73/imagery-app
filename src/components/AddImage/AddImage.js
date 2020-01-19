import React, { Component } from 'react';
import './AddImage.css';
//import ImageListContext from '../../contexts/ImageListContext'
import ImageApiService from '../../services/image-api-service'
import { Button, Input } from '../Utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class AddImage extends Component {
    // static contextType = ImageListContext
    static defaultProps = {
        handleAddImage: () => { }
    }
    state = {
        image: null,
        selectedFile: null,
        error: null,

    }
    fileSelectedHandler = evt => {
        console.log(evt.target)
    }


    handleSubmitImage = evt => {
        evt.preventDefault();
        const { title, desc, img_url } = evt.target
        ImageApiService.postImage(title.value, desc.value, img_url.value)
            .then(this.props.addImage)
            .then(() => {
                title.value = ''
                desc.value = ''
                img_url.value = ''
                alert('Added image successfully')
                this.props.handleAddImage()
            })
            .catch(this.context.setError)

    }
    render() {
        const { error } = this.state
        // Render nothing if the "show" prop is false
        if (!this.props.isShowing) {
            return null;
        }

        return (
            <div className="container">
                <section>
                    <header>
                        <h1>Add New Image</h1>
                    </header>
                    <section>
                        <form id="add-image" onSubmit={this.handleSubmitImage}>
                            <div role='alert'>
                                {error && <p className='red'>{error}</p>}
                            </div>
                            <div className='title'>
                                <label htmlFor='AddImageForm__title'>
                                    Add Your Title
                        </label>
                                <Input
                                    required
                                    name='title'
                                    id='AddImageForm__title'>
                                </Input>
                            </div>

                            <div className='desc'>
                                <label htmlFor='AddImageForm__desc'>
                                    Tell everyone what your image is about
                        </label>
                                <Input
                                    required
                                    name='desc'
                                    id='AddImageForm__desc'>
                                </Input>
                            </div>
                            <div className='img_url'>
                                <label htmlFor='AddImageForm__url'>
                                    Add Destination Link
                        </label>
                                <Input
                                    required
                                    name='img_url'
                                    id='AddImageForm__url'>
                                </Input>
                            </div>
                            <div>
                                <input type="file" onChange={this.fileSelectedHandler} />
                            </div>
                            <div className='imgForm_Buttons'>
                                <button type="submit" className='submit_form'>Submit</button>
                                <button onClick={this.props.handleClose} className='close_form'>Close</button>
                            </div>

                        </form>

                    </section>
                </section>
            </div>
        );
    }



};
export default AddImage;