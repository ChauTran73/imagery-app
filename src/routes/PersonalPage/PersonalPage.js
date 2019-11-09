import React, { Component } from 'react';
import { Button, Input } from '../../components/Utils/Utils'
import AddImage from '../../components/AddImage/AddImage'
import ImageApiService from '../../services/image-api-service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons"

class PersonalPage extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => { },
        },
    }
    state = { 
        isShowing: false,  
        personalImageList: [],
        loading: true, 
    };

    setPersonalImageList = personalImageList => {
        this.setState({personalImageList})
    }
    
    componentDidMount() {
        ImageApiService.getImages()
        .then(resJson => this.setPersonalImageList(resJson))
        .catch(error => console.log(error))
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

    render() {
        return (
            <main >

                <button type="button" onClick={this.toggleModal} >
                    <FontAwesomeIcon icon={faPlus} size="lg" />
                </button>
                <AddImage 
                isShowing={this.state.isShowing} 
                handleClose={this.toggleModal}
                handleAddImage={this.onAddImageSuccess}
                 />
                <section className='my_pins'>
                    <h1>My Pins</h1>
                    <div>

                    </div>
                </section>



            </main>
        );
    }
}
export default PersonalPage;