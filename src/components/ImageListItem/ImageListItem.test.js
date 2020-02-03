import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import ImageListItem from './ImageListItem';
import TestData from '../Utils/TestData'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <ImageListItem image={TestData.image} />
        </BrowserRouter>
        ,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});