import React, { Component } from 'react';
import './Register.css';
import { Button, Input } from '../Utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Register extends Component {
    render() {

        return (
            <div className="container">
            <h1>Welcome To Imagery!</h1>
                <form
                    className='Register_Form'
                >
                    {/* <div role='alert'>
                        {error && <p className='red'>{error}</p>}
                    </div> */}
                    <div className='first_name'>
                        <label htmlFor='RegisterForm__full_name'>
                            Full Name
                        </label>
                        <Input
                            required
                            name='full_name'
                            id='RegisterForm__full_name'>
                        </Input>
                    </div>
                    <div className='user_name'>
                        <label htmlFor='RegisterForm__user_name'>
                            User name
                        </label>
                        <Input
                            required
                            name='user_name'
                            id='RegisterForm__user_name'>
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
                    <Button type='submit'>
                        Get Started
                    </Button>
                </form>


            </div>
        );

    }
}

export default Register;