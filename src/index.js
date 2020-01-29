import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { ImageListProvider } from './contexts/ImageListContext'
import { ImageProvider } from './contexts/ImageContext'
import './index.css';


ReactDOM.render(
  <BrowserRouter>
    <ImageListProvider>
      <ImageProvider>
        <App />
      </ImageProvider>
    </ImageListProvider>

  </BrowserRouter>,
  document.getElementById('root')
)
