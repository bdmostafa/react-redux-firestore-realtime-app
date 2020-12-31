import React from 'react';
import { Link } from 'react-router-dom';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

const NavBar = () => {
    return (
            <nav className="nav-wrapper gray darken-3">
                <div className="container">
                    <Link to="/" className="left brand-logo">
                        mProject Schedule
                    </Link>
                    <SignedIn />
                    <SignedOut />
                </div>
            </nav>
    );
};

export default NavBar;