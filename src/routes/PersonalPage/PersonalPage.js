import React, { Component } from 'react';
import { Button, Input } from '../../components/Utils/Utils'
import AddImage from '../../components/AddImage/AddImage'
import ImageApiService from '../../services/image-api-service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import MyPins from '../../components/MyPins/MyPins';
import ImageListItem from '../../components/ImageListItem/ImageListItem'
import ImageListContext from '../../contexts/ImageListContext'

class PersonalPage extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => { },
        },
        match: { params: {} }
    }

    //static contextType = ImageListContext;

    state = {
        isShowingAddImage: false,
        isShowingMyPins: false,
        personalImageList: [],
        loading: true,
    };

    setPersonalImageList = personalImageList => {
        console.log('my personal images:', personalImageList)
        this.setState({ personalImageList })

    }

    componentDidMount() {
        // this.clearError()
        ImageApiService.getImagesByUser()
            .then(resJson => this.setPersonalImageList(resJson))
            .catch(this.setError)
    }

    toggleModalAddImage = () => {
        this.setState({
            isShowingAddImage: !this.state.isShowingAddImage
        });
    }
    toggleModalMyPins = () => {
        this.setState({
            isShowingMyPins: !this.state.isShowingMyPins
        });
    }

    onAddImageSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/'
        history.push(destination)
    }

    renderImages = () => {
        return this.state.personalImageList.map(image =>
            <ImageListItem
                key={image.id}
                image={image}
            />
        )
    }

    render() {
        return (
            <main className='my_pins'>

                <Button type="button" onClick={this.toggleModalAddImage} >
                    <FontAwesomeIcon icon={faPlus} size="lg" className='blue' />
                </Button>
                <Button type="button" onClick={this.toggleModalMyPins} >
                   My Pins
                </Button>
                <AddImage
                    imageList={this.state.personalImageList}
                    isShowing={this.state.isShowingAddImage}
                    handleClose={this.toggleModalAddImage}
                    handleAddImage={this.onAddImageSuccess}
                />
                <MyPins
                    myPins={this.state.personalImageList}
                    isShowing={this.state.isShowingMyPins}
                    handleDeleteImage={this.handleDeleteImage}
                    onDeleteSuccess = {this.onAddImageSuccess}
                />




            </main>
        );
    }
}
export default PersonalPage;