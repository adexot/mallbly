import React from 'react';
import { Link, } from 'react-router-dom';
import styles from './nav.module.scss';

const Nav = () => (
    <div className={styles.nav}>
        <div className={styles.leftNav}>
            <ul>
                <li>
                    <Link to='/pricing'>Pricing</Link>
                </li>
                <li>
                    <Link to='/pricing'>Contact Us</Link>
                </li>
            </ul>
        </div>
        <div className={styles.centerNav}>Mallbly</div>
        <div className={styles.rightNav}>
            <Link to='/signup'>Log In / Sign Up</Link>
        </div>
    </div>
);

export default Nav;