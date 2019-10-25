import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from "@fortawesome/free-solid-svg-icons"

class NavBar extends Component {
    render() {
        return (
            <nav className='navbar'>
                <h1>
                    <Link to='/'>
                        {/* <FontAwesomeIcon className='green' icon='frog' /> */}
                        {' '}
                        Imagery
                    </Link>
                </h1>
                <div className="searchbox">
                    <input type="text" name="searchBar" placeholder="Search for an image"/>
                   <span className="search__icon"> <FontAwesomeIcon icon={faSearch} /></span>
                </div>
                <div>
                    <Link to="/">
                        Home
                    </Link>
                </div>
                <div>
                    <Link to="/my_wall">
                        My Wall
                    </Link>
                </div>
                <div>
                    <Link to="/register">
                        Register
                    </Link>
                </div>
                <div>
                    <Link to="/login">
                        Login
                    </Link>
                </div>
            </nav>
        );
    }
}

export default NavBar;