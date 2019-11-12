import React, { Component } from 'react';
import { Button, Input } from '../../components/Utils/Utils'
import AddImage from '../../components/AddImage/AddImage'
import ImageApiService from '../../services/image-api-service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import UserService from '../../services/user-service';
import ImageListItem from '../../components/ImageListItem/ImageListItem'

class PersonalPage extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => { },
        },
        match: { params: {} }
    }
    state = { 
        isShowing: false,  
        personalImageList: [],
        // userId: null,
        loading: true, 
    };

    setPersonalImageList = personalImageList => {
        console.log('my personal images:', personalImageList)
        this.setState({personalImageList})
        
    }
    
    componentDidMount() {
      //how do I get all images created by the currently loggedin user and display it here on personal wall
      //
        // this.clearError()
      //get userId of the current logged in user
     
        ImageApiService.getImagesByUser()
          .then(resJson => this.setPersonalImageList(resJson))
          .catch(this.setError)
      

    }

    toggleModal = () => {
        this.setState({
            isShowing: !this.state.isShowing
        });
    }

    onAddImageSuccess= ()  =>{
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/'
        history.push(destination)
    }

    renderImages() {
        return this.state.personalImageList.map(image =>
          <ImageListItem
            key={image.id}
            image={image}
          />
        )
      }

    render() {
        return (
            <main >

                <button type="button" onClick={this.toggleModal} >
                    <FontAwesomeIcon icon={faPlus} size="lg" />
                </button>
                <AddImage 
                imageList={this.state.personalImageList}
                isShowing={this.state.isShowing} 
                handleClose={this.toggleModal}
                handleAddImage={this.onAddImageSuccess}
                 />
                <section className='my_pins'>
                    <h1>My Pins</h1>
                    <div>
                        {this.renderImages()}
                    </div>
                </section>



            </main>
        );
    }
}
export default PersonalPage;