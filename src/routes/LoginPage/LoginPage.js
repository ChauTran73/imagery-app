import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Section } from '../../components/Utils/Utils'


export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
    // this.setState({isLoggedin: true, hasUser: true})

  }

  render() {
    return (
      <Section className='LoginPage'>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </Section>
    )
  }
}
