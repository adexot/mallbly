import React from 'react';
import {Link, } from 'react-router-dom';
import ReactSVG from 'react-svg';
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

const menuNav = [
    {
        img: 'music.svg',
        title: 'Music'
    },
    {
        img: 'corporate.svg',
        title: 'Corporate'
    },
    {
        img: 'wedding.svg',
        title: 'Wedding'
    },
    {
        img: 'art.svg',
        title: 'Art & Design'
    },
    {
        img: 'food.svg',
        title: 'Food & Drink'
    },
    {
        img: 'health.svg',
        title: 'Health & Fitness'
    },
    {
        img: 'photography.svg',
        title: 'Photography'
    },
    {
        img: 'fashion.svg',
        title: 'Fashion & Beauty'
    },
    {
        img: 'more.svg',
        title: 'More categories'
    }
];

const Sidebar = ({active}) => (
    <div className={styles.sidebar}>
        <ul>
            {
                menuNav.map((menu, index) => (
                    <li key={index}>
                        <Link to='/' className={active === menuList[index] ? styles.active : ''}>
                            <ReactSVG src={menu.img}/>
                            <span>{menu.title}</span>
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
);

export default Sidebar;