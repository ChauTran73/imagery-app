import React, { Component } from 'react';
// import './Register.css';
import { Button, Input } from '../Utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AuthApiService from '../../services/auth-api-service'


class RegistrationForm extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => { }
    }
    state = {
        error: null
    }
    handleSubmit = ev => {
        ev.preventDefault()
        const { full_name, user_name, email, password } = ev.target
        this.setState({ error: null })
        AuthApiService.postUser({
            full_name: full_name.value,
            user_name: user_name.value,
            email: email.value,
            password: password.value
        })
            .then(user => {
                console.log(user)
                full_name.value = ''
                user_name.value = ''
                email.value = ''
                password.value = ''
                this.props.onRegistrationSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }
    render() {
        const { error } = this.state;
        return (
            <div className="container">
                <h1>Welcome To Imagery!</h1>
                <form
                    className='Register_Form'
                    onSubmit={this.handleSubmit}
                >
                    <div role='alert'>
                        {error && <p className='red'>{error}</p>}
                    </div>
                    <div className='first_name'>
                        <label htmlFor='RegisterForm__full_name'>
                            Full Name
                        </label>
                        <Input
                            required
                            name='full_name'
                            id='RegisterForm__full_name'>
                        </Input>
                        <label htmlFor='RegisterForm__user_name'>
                            User Name
                        </label>
                        <Input
                            required
                            name='user_name'
                            id='RegisterForm__user_name'>
                        </Input>
                    </div>
                    <div className='email'>
                        <label htmlFor='RegisterForm__email'>
                            Email
                        </label>
                        <Input
                            required
                            name='email'
                            type='email'
                            id='RegisterForm__email'>
                        </Input>
                    </div>
                    <div className='password'>
                        <label htmlFor='RegisterForm__password'>
                            Password
                        </label>
                        <Input
                            required
                            name='password'
                            type='password'
                            id='RegisterForm__password'>
                        </Input>
                    </div>
                    <button type='submit'>
                        Get Started
                    </button>
                </form>


            </div>
        );

    }
}

export default RegistrationForm;