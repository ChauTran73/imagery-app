import React, { Component } from 'react';
import './LoginForm.css';
import { Button, Input } from '../Utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import UserService from '../../services/user-service';


class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => { }
    }
    state = {
        error: null
    }
    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { username, password } = ev.target

        AuthApiService.postLogin({
            user_name: username.value,
            password: password.value,
        })
            .then(res => {
                username.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                UserService.saveUser(res.sub)
                this.props.onLoginSuccess() //redirect to the homepage
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }
    
    render() {
        const { error } = this.state
        return (
            <div className="container">
                <h1>Welcome Back!</h1>
                <form onSubmit={this.handleSubmitJwtAuth}
                    className='LoginForm'
                >
                    <div role='alert'>
                        {error && <p className='red'>{error}</p>}
                    </div>
                    <div className='email'>
                        <label htmlFor='LoginForm__email'>
                            User Name
                        </label>
                        <Input
                            required
                            name='username'
                            type='text'
                            id='LoginForm__username'>
                        </Input>
                    </div>
                    <div className='password'>
                        <label htmlFor='LoginForm__password'>
                            Password
                        </label>
                        <Input
                            required
                            name='password'
                            type='password'
                            id='LoginForm__password'>
                        </Input>
                    </div>
                    <button type='submit'>
                        Login
                    </button>
                </form>


            </div>
        );

    }
}

export default LoginForm;