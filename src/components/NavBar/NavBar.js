import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import TokenService from '../../services/token-service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from "@fortawesome/free-solid-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

class NavBar extends Component {

    handleLogoutClick = () => {
        TokenService.clearAuthToken();
        this.setState({isLoggedin: false})
    }
    renderLogoutLink() { //when the user has already logged in
        return (
            <div className='Navbar_logged-in'>
                <Link to='/my-wall' >
                    My Wall
                </Link>
                {' '}
                <Link
                    onClick={this.handleLogoutClick}
                    to='/'>
                    Logout
                </Link>

            </div>
        )
    }
    renderLoginLink() { //when the user has not logged in
        return (
            <div className='Navbar__not-logged-in'>
                <Link to='/login'>
                    Login
                </Link>

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
                        {' '}
                        <FontAwesomeIcon icon='faImage' />
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

                {/* {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()
                } */}
                {this.state.isLoggedin ? this.renderLogoutLink : this.renderLoginLink}
            </nav>
        );
    }
}

export default NavBar;