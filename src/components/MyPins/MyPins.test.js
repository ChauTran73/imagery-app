import React from 'react';
import ReactDOM from 'react-dom';
import MyPins from './MyPins';
import TestData from '../Utils/TestData'
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <BrowserRouter>
        <MyPins myPins={TestData.pins}/>
      </BrowserRouter>
    ,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});