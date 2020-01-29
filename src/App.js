import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import LoginPage from './routes/LoginPage/LoginPage';
import RegistrationPage from './routes/RegistrationPage/RegistrationPage';
import PersonalPage from './routes/PersonalPage/PersonalPage';
import ImagePage from './routes/ImagePage/ImagePage';
import ImageListPage from './routes/ImageListPage/ImageListPage';
import ImageApiService from './services/image-api-service'
import { Redirect } from 'react-router'
import ImageListContext from '../src/contexts/ImageListContext'

class App extends Component {
  state = {
    hasError: false,
    imageList: [],
    personalImageList: []
  }

  static contextType = ImageListContext;

  componentDidMount(){
    ImageApiService.getImages()
    .then(imageList => {
      this.context.setImageList(imageList)
      this.setState({imageList})
    }
      )
    ImageApiService.getImagesByUser(localStorage.getItem('userId'))
    .then(personalImageList => {
      this.context.setPersonalImageList(personalImageList)
      this.setState({personalImageList})
    })
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <Route path={`/`} component={NavBar} />
        </header>
        <main className='App__main'>
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route
              exact
              path={'/'}
              component={ImageListPage}
            />
            <Route
              path={'/login'}
              render={(props) => (
                <LoginPage {...props} 
                handleLoginSuccess={this.handleLoginSuccess}
                />
              )}
            />
            <Route
              path={'/register'}
              component={RegistrationPage}
            />
            <Route
              path={'/my-wall'}
              component={PersonalPage}
             
            />
            <Route
              path={'/images/:imageId'}
              component={ImagePage}
            />
            {/* <Route
              component={NotFoundPage}
            /> */}
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;