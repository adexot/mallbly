import React from 'react';
import { Link, } from 'react-router-dom';
import './nav.scss';

const Nav = () => (
    <div className='nav'>
        <div className="leftNav">
            <ul>
                <li>
                    <Link to='/pricing'>Pricing</Link>
                </li>
                <li>
                    <Link to='/pricing'>Contact Us</Link>
                </li>
            </ul>
        </div>
        <div className="centerNav">Mallbly</div>
        <div className="rightNav">
            <Link to='/signup'>Log In / Sign Up</Link>
        </div>
    </div>
);

export default Nav;