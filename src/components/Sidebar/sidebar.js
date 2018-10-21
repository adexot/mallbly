import React from 'react';
import {Link, } from 'react-router-dom';
import styles from './sidebar.module.scss';

const menuList = [
    'Music',
    'Corporate',
    'Wedding',
    'Art & Design',
    'Food & Drink',
    'Health & Fitness',
    'Photography',
    'Fashion & Beauty',
    'More categories'
];

const Sidebar = ({active}) => (
    <div className={styles.sidebar}>
        <ul>
            {
                menuList.map((menu, index) => (
                    <li key={index}>
                        <Link to='/' className={active === menuList[index] ? styles.active : ''}>
                            <img src="" alt=""/>
                            <span>{menu}</span>
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
);

export default Sidebar;