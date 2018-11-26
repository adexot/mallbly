import React from 'react';
import {Link, } from 'react-router-dom';
import ReactSVG from 'react-svg';
import styles from './sidebar.module.scss';

const menuNav = [
    {
        img: 'music.svg',
        title: 'Music',
        key: 'music'
    },
    {
        img: 'corporate.svg',
        title: 'Corporate',
        key: 'corporate'
    },
    {
        img: 'wedding.svg',
        title: 'Wedding',
        key: 'wedding'
    },
    {
        img: 'art.svg',
        title: 'Art & Design',
        key: 'art'
    },
    {
        img: 'food.svg',
        title: 'Food & Drink',
        key: 'food'
    },
    {
        img: 'health.svg',
        title: 'Health & Fitness',
        key: 'health'
    },
    {
        img: 'photography.svg',
        title: 'Photography',
        key: 'photo'
    },
    {
        img: 'fashion.svg',
        title: 'Fashion & Beauty',
        key: 'fashion'
    },
    {
        img: 'more.svg',
        title: 'More categories',
        key: 'more'
    }
];

const Sidebar = ({active, onClickHandler}) => (
    <div className={styles.sidebar}>
        <ul>
            {
                menuNav.map((menu, index, menuArray) => (
                    <li key={index}>
                        <Link onClick={(e) => {
                            e.preventDefault();
                            console.log(menu.title);
                            if(typeof onClickHandler === 'function') onClickHandler(menu.key);
                        }} to='/' className={menu.key === active ? styles.active : ''}>
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