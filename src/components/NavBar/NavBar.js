import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import TokenService from '../../services/token-service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from "@fortawesome/free-solid-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import UserService from '../../services/user-service';

class NavBar extends Component {
    //navbar only re-renders when there is a state change
    //login success => save token and user in local storage -> setState isLoggedin true, hasUser true
    constructor(props) {
        super(props);
        this.state = { //async
            isLoggedIn: TokenService.hasAuthToken(),
            hasUser: UserService.hasUser(),
        }
               
    }
   
    handleLogoutClick = () => {
        TokenService.clearAuthToken();
        UserService.clearUser();
        this.setState({isLoggedIn: false, hasUser: false})
    }
    
    renderLogoutLink() { //when the user has already logged in
        
        return (
            <div className='Navbar_logged-in'>
                <Link to='/my-wall' >
                    My Wall
                </Link>
                {'     '}
                <Link
                    onClick={this.handleLogoutClick}
                    to='/'>
                    Logout
                </Link>
                {'      '}
                <Link to= 'my-wall'>
                    Logged in as {UserService.getUser()}
                </Link>
            </div>
        )
    }
    renderLoginLink() { //when the user has not logged in
        return (
            <div className='Navbar__not-logged-in'>
                <Link to='/login' >
                    Login
                </Link>
            {'    '}
                <Link to='/register'>
                    Register
                </Link>
            </div>
        )
    }
    render() {

        return (
            <nav className='navbar'>
                <h1>
                    <Link to='/'>
                       <FontAwesomeIcon icon={faImages} size='lg' />
                        {' '}
                        Imagery
                    </Link>
                </h1>
                <div className="searchbox">
                    <input type="text" name="searchBar" placeholder="Search for an image" />
                    <span className="search__icon"> <FontAwesomeIcon icon={faSearch} /></span>
                </div>
                <Link to="/">
                    Home
                </Link>

                {this.state.isLoggedIn && this.state.hasUser
                    ? this.renderLogoutLink()
                    : this.renderLoginLink() 
                }

            </nav>
        );
    }
}

export default NavBar;