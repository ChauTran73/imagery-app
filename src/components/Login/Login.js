import React, { Component } from 'react';
import './Login.css';
import { Button, Input } from '../Utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Login extends Component {
    render() {

        return (
            <div className="container">
            <h1>Welcome Back!</h1>
                <form
                    className='LoginForm'
                >
                    {/* <div role='alert'>
                        {error && <p className='red'>{error}</p>}
                    </div> */}
                    <div className='email'>
                        <label htmlFor='LoginForm__email'>
                            Email
                        </label>
                        <Input
                            required
                            name='email'
                            type='email'
                            id='LoginForm__email'>
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
                    <Button type='submit'>
                        Login
                    </Button>
                </form>


            </div>
        );

    }
}

export default Login;