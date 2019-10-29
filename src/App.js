import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Gallery from './components/Gallery/Gallery';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import MyWall from './components/MyWall/MyWall';

import { Route, Switch } from 'react-router-dom'
import ImageDetails from './components/ImageDetails/ImageDetails';

class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }
  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <NavBar />
        </header>
        <main className='App__main'>
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route
              exact
              path={'/'}
              component={Gallery}
            />
            <Route
              path={'/login'}
              component={Login}
            />
            <Route
              path={'/register'}
              component={Register}
            />
            <Route
            path={'/my_wall'}
              component={MyWall}
            />
            <Route
            path={'/images/:imageId'}
              component={ImageDetails}
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