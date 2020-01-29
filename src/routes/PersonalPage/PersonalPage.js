import React, { Component } from 'react';
import AddImage from '../../components/AddImage/AddImage'
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
        match: { params: {} },
        personalImageList: []
    }

    static contextType = ImageListContext;

    state = {
        isShowingAddImage: false,
        // isShowingMyPins: false,
        loading: true,
    };

    handleAddImg = newImg => {
        this.context.addImage(newImg)
    }

    toggleModalAddImage = () => {
        this.setState({
            isShowingAddImage: !this.state.isShowingAddImage
        });
    }
    // toggleModalMyPins = () => {
    //     this.setState({
    //         isShowingMyPins: !this.state.isShowingMyPins
    //     });
    // }

    onAddImageSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/'
        history.push(destination)
    }

    renderImages = () => {
        return this.context.personalImageList.map(image =>
            <ImageListItem
                key={image.id}
                image={image}
            />
        )
    }

    render() {
        return (
            <main className='my_pins'>

                <button type="button" onClick={this.toggleModalAddImage} >
                    <FontAwesomeIcon icon={faPlus} size="lg" className='blue' />
                </button>
                {/* <button type="button" onClick={this.toggleModalMyPins} >
                    My Pins
                </button> */}
                <AddImage
                    addImage={this.handleAddImg}
                    isShowing={this.state.isShowingAddImage}
                    handleClose={this.toggleModalAddImage}
                    onAddImageSuccess={this.onAddImageSuccess}
                />
                <MyPins
                    myPins={this.context.personalImageList}
                    // isShowing={this.state.isShowingMyPins}
                    onDeleteSuccess={this.onAddImageSuccess}
                />

            </main>
        );
    }
}
export default PersonalPage;