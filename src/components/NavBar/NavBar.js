import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import TokenService from '../../services/token-service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import UserService from '../../services/user-service';

class NavBar extends Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken();
        UserService.clearUser();     
    }
    renderLogoutLink() { //when the user has already logged in
        return (
            <div className='Navbar_logged-in'>
                <Link to='/my-wall' >
                    My Wall
                </Link>
                
                <Link
                    onClick={this.handleLogoutClick}
                    to='/'>
                    Logout
                </Link>
                
                <Link to='my-wall'>
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
                {/* {'    '} */}
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
                        Imagery
                    </Link>
                </h1>
                <div className="searchbox">
                    <input type="text" name="searchBar" placeholder="Search for an image" />
                    <span className="search__icon"> <FontAwesomeIcon icon={faSearch} size='lg'/></span>
                </div>
                <div className='main-nav'>

                    <Link to="/">
                        Home
                    </Link>
                    {TokenService.hasAuthToken()
                        ? this.renderLogoutLink()
                        : this.renderLoginLink()
                    }

                </div>
            </nav>
        );
    }
}

export default NavBar;